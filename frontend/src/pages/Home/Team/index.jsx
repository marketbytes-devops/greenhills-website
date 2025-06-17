import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { fetchTeamSection, fetchTeamSectionTitle } from '../../../helpers/apiService';
import StripHtml from '../../../components/stripHtml';

const Team = () => {
    const [titleData, setTitleData] = useState('');
    const [teamMembers, setTeamMembers] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        Promise.all([fetchTeamSectionTitle(), fetchTeamSection()])
            .then(([titleResponse, membersResponse]) => {
                const title = titleResponse.data?.[0]?.title || 'Lorem Ipsum Is Typesetting Industry.';
                setTitleData(title);
                const sortedMembers = (membersResponse.data || []).sort((a, b) => 
                    (a.order || 0) - (b.order || 0)
                );
                setTeamMembers(sortedMembers);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
                setTitleData('Lorem Ipsum Is Typesetting Industry.');
                setTeamMembers([]);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: teamMembers.length > (teamMembers.length === 2 ? 2 : 4),
        speed: 500,
        slidesToShow: teamMembers.length === 2 ? 2 : 4,
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
                    slidesToShow: teamMembers.length === 2 ? 2 : 2,
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

    return (
        <div className="container mx-auto px-4">
            <div className="text-center">
                <div 
                    className="pb-10 text-4xl font-bold" 
                    dangerouslySetInnerHTML={{ __html: titleData }}
                />
            </div>
            <div className="pb-16">
                {teamMembers.length > 0 ? (
                    <div className="flex items-center">
                        <Slider {...settings} className="w-full">
                            {teamMembers.map((member, index) => (
                                <div key={member.id || index} className="p-4">
                                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                                            <img 
                                                src={member.image || 'https://via.placeholder.com/150'} 
                                                alt={<StripHtml html={member.name || 'No Name'} />} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                        <div 
                                            className="mb-2 text-xl font-semibold" 
                                            dangerouslySetInnerHTML={{ __html: member.name || 'Unknown Name' }} 
                                        />
                                        <div 
                                            className="mb-4 text-gray-600" 
                                            dangerouslySetInnerHTML={{ __html: member.role || 'Unknown Role' }} 
                                        />
                                        <div 
                                            className="text-gray-700" 
                                            dangerouslySetInnerHTML={{ __html: member.testimonial || 'No testimonial available.' }} 
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="w-full h-64 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <p>No team members available.</p>
                        </div>
                    </div>
                )}
                {teamMembers.length > 0 && (
                    <div className="mt-10 -mb-16 flex items-center justify-center space-x-4">
                        {teamMembers.map((_, index) => (
                            <div
                                key={index}
                                className={`rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'w-10 h-2 bg-black' : 'w-2 h-2 bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Team;