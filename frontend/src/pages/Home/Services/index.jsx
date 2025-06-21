import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import StripHtml from '../../../components/stripHtml';
import { fetchServiceSlider } from '../../../helpers/apiService';

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchServiceSlider()
      .then((response) => {
        const sortedData = (response.data || []).sort((a, b) => 
          (a.order || 0) - (b.order || 0)
        );
        setServices(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setServices([]);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: services.length > (services.length === 2 ? 2 : 5),
    slidesToShow: services.length === 2 ? 2 : 5,
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
          slidesToShow: services.length === 2 ? 2 : 2,
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

  if (!services.length) {
    return (
      <div className="slider-container px-4 py-8 mx-auto w-full h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>No services available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="slider-container mx-auto px-4 py-8 relative">
      <div className="flex items-center">
        <Slider {...settings} className="w-full">
          {services.map((service) => (
            <div key={service.id} className="p-2 group">
              <div className="bg-white group-hover:bg-secondaryBlack shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto flex flex-col justify-center items-center min-h-[200px]">
                <div className="relative flex justify-center items-center h-20">
                  <img
                    src={service.image || '/placeholder-image.jpg'}
                    alt={<StripHtml html={service.title || 'No Title'} />}
                    className="z-40 w-16 h-16 object-contain brightness-50 group-hover:brightness-100"
                    onError={(e) => { e.target.src = '/placeholder-image.jpg'; }}
                  />
                </div>
                <div className="p-4 text-center">
                  <div
                    className="line-clamp-2 group-hover:text-white transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: service.title || 'No Title' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-10 -mb-4 flex items-center justify-center space-x-4">
        {services.map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-10 h-2 bg-secondaryBlack' : 'w-2 h-2 bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;