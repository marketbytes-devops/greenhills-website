import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import StripHtml from '../../../components/stripHtml';
import { fetchAboutSectionThree, fetchAboutSectionThreeTitle } from '../../../helpers/apiService';

const SectionThree = () => {
    const [sectionData, setSectionData] = useState({ title: '', description: '' });
    const [cardsData, setCardsData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [titleResponse, cardsResponse] = await Promise.all([
                    fetchAboutSectionThreeTitle(),
                    fetchAboutSectionThree(),
                ]);
                const titleData = Array.isArray(titleResponse.data) && titleResponse.data[0]
                    ? titleResponse.data[0]
                    : { title: '', description: '' };
                setSectionData({
                    title: titleData.title || '',
                    description: titleData.description || '',
                });
                const sortedCards = (cardsResponse.data || []).sort(
                    (a, b) => (a.order || 0) - (b.order || 0)
                );
                setCardsData(sortedCards);
            } catch (error) {
                setSectionData({ title: '', description: '' });
                setCardsData([]);
            }
        };
        fetchData();
    }, []);

    const settings = {
        dots: false,
        infinite: cardsData.length > 2,
        slidesToShow: Math.min(cardsData.length, 5),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(cardsData.length, 2),
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                },
            },
        ],
    };

    if (!cardsData.length && !sectionData.title && !sectionData.description) {
        return <div></div>;
    }

    return (
        <>
            {(sectionData.title || sectionData.description) && (
                <div className="text-center max-w-4xl mx-auto">
                    {sectionData.title && (
                        <div
                            className="pb-10 space-y-6"
                            dangerouslySetInnerHTML={{ __html: sectionData.title }}
                        />
                    )}
                    {sectionData.description && (
                        <div
                            className="pb-10"
                            dangerouslySetInnerHTML={{ __html: sectionData.description }}
                        />
                    )}
                </div>
            )}
            {cardsData.length > 0 && (
                <div className="slider-container mx-auto px-4 py-8 relative max-w-7xl">
                    <div className="flex items-center">
                        <Slider {...settings} className="w-full">
                            {cardsData.map((card) => (
                                <div key={card.id} className="p-2 group">
                                    <div className="bg-white group-hover:bg-secondaryBlack shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto flex flex-col justify-center items-center min-h-[200px]">
                                        <div className="relative flex justify-center items-center h-20">
                                            <img
                                                src={card.image || '/placeholder-image.jpg'}
                                                alt={<StripHtml html={card.title || 'No Title'} />}
                                                className="z-40 w-16 h-16 object-contain brightness-50 group-hover:brightness-100"
                                                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
                                            />
                                        </div>
                                        <div className="p-4 text-center">
                                            <div
                                                className="line-clamp-2 group-hover:text-white transition-colors duration-300 text-gray-900"
                                                dangerouslySetInnerHTML={{ __html: card.title || 'No Title' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="mt-10 -mb-4 flex items-center justify-center space-x-4">
                        {cardsData.map((_, index) => (
                            <div
                                key={index}
                                className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 h-2 bg-secondaryBlack' : 'w-2 h-2 bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionThree;