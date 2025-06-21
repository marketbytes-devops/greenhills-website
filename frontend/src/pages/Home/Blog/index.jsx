import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import StripHtml from '../../../components/stripHtml';
import { fetchBlogTitle, fetchBlogItems } from '../../../helpers/apiService';
import MainButton from '../../../components/Button/MainButton';
import { Link } from "react-router-dom";

const Blog = ({ className = '' }) => {
    const [sectionData, setSectionData] = useState({
        title: '',
        description: '',
    });
    const [blogItems, setBlogItems] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [titleResponse, itemsResponse] = await Promise.all([
                    fetchBlogTitle(),
                    fetchBlogItems(),
                ]);

                const titleData = Array.isArray(titleResponse.data) && titleResponse.data.length > 0
                    ? titleResponse.data[0]
                    : { title: 'Latest Blog Posts', description: '' };

                const sortedItems = (itemsResponse.data || []).sort((a, b) =>
                    (a.order || 0) - (b.order || 0)
                );

                setSectionData({
                    title: titleData.title || 'Latest Blog Posts',
                    description: titleData.description || '',
                });
                setBlogItems(sortedItems);
                setError(null);
            } catch (error) {
                console.error('Error fetching blog data:', error);
                setError('Failed to load content. Please try again later.');
                setSectionData({
                    title: 'Latest Blog Posts',
                    description: '',
                });
                setBlogItems([]);
            }
        };

        fetchData();
    }, []);

    const settings = {
        dots: false,
        infinite: blogItems.length > (blogItems.length === 2 ? 2 : 4),
        speed: 500,
        slidesToShow: blogItems.length === 2 ? 2 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: blogItems.length === 2 ? 2 : 2,
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

    const { title, description } = sectionData;
    const hasContent = title || description || blogItems.length > 0;

    if (error) {
        return (
            <div className={`slider-container px-4 py-8 mx-auto text-center text-red-500 ${className}`}>
                <p role="alert">{error}</p>
            </div>
        );
    }

    if (!hasContent) {
        return (
            <div className={`slider-container px-4 py-8 mx-auto ${className}`} aria-hidden="true">
                <p>No content available.</p>
            </div>
        );
    }

    const handleButtonClick = () => {
        console.log("More Info button clicked!");
    };


    return (
        <section className={`mb-2 lg:mb-6 ${className}`} aria-labelledby="blog-title">
            <div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-16 items-start mb-12">
                    <div className="md:w-1/2">
                        {title && (
                            <div id="blog-title" dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-6">
                        {description && (
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        )}
                        <MainButton
                            label="More Info"
                            onClick={handleButtonClick}
                            className="text-black hover:text-primary"
                            aria-label="Learn more about this section"
                        />
                    </div>
                </div>
                <div className="pb-16">
                    {blogItems.length > 0 ? (
                        <div className="flex items-center">
                            <Slider {...settings} className="w-full">
                                {blogItems.map((item, index) => (
                                    <div key={item.id || index} className="p-4">
                                        <Link to={item.link} className="flex flex-col items-start text-left">
                                            <div className="w-full h-52 overflow-hidden mb-4">
                                                <img
                                                    src={item.image || 'https://via.placeholder.com/150'}
                                                    alt={<StripHtml html={item.title || 'No Title'} />}
                                                    className="w-full h-full rounded-xl object-cover"
                                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                                                />
                                            </div>
                                            <div
                                                className="mb-2 line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: item.title || 'Unknown Title' }}
                                            />
                                            <div
                                                className="text-gray-500 text-sm font-medium mt-2"
                                                dangerouslySetInnerHTML={{ __html: item.date || 'No content available.' }}
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <div className="w-full h-64 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <p>No blog posts available.</p>
                            </div>
                        </div>
                    )}
                    {blogItems.length > 0 && (
                        <div className="mt-10 -mb-16 flex items-center justify-center space-x-4">
                            {blogItems.map((_, index) => (
                                <div
                                    key={index}
                                    className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'w-10 h-2 bg-secondaryBlack' : 'w-2 h-2 bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

Blog.propTypes = {
    className: PropTypes.string,
};

export default memo(Blog);