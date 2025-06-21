import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StripHtml from '../../../components/stripHtml';

const MenuListings = ({ titleData, menuListingsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: menuListingsData.length > (menuListingsData.length === 2 ? 2 : 4),
    speed: 500,
    slidesToShow: menuListingsData.length === 2 ? 2 : Math.min(menuListingsData.length, 4),
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
          slidesToShow: menuListingsData.length === 2 ? 2 : Math.min(menuListingsData.length, 2),
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

  const renderStarRating = (rating) => {
    const maxStars = 5;
    const normalizedRating = parseFloat(rating) || 0;
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-500 text-md mb-4">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {hasHalfStar && <span>★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`}>☆</span>
        ))}
      </div>
    );
  };

  return (
    <div className="container-secondary mx-auto">
      <div className="text-center">
        <div
          className="pb-10 text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: titleData?.title || 'Our Menu' }}
        />
      </div>
      <div className="pb-16">
        {menuListingsData.length > 0 ? (
          <div className="flex items-center justify-center">
            <Slider {...settings} className="w-full">
              {menuListingsData.map((item, index) => (
                <div key={item.id} className="p-0 md:px-4">
                  <div className="flex flex-col justify-center">
                    <div className="overflow-hidden mb-4">
                      <img
                        src={item.image || 'https://via.placeholder.com/150'}
                        alt={<StripHtml html={item.title || 'No title'} />}
                        className="w-full h-[300px] rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-full text-left">
                      <div
                        className="mb-2"
                        dangerouslySetInnerHTML={{ __html: item.title || 'Unknown Title' }}
                      />
                      {renderStarRating(item.rating)}
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description || 'No description' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p>No menu listings available.</p>
            </div>
          </div>
        )}
        {menuListingsData.length > 0 && (
          <div className="mt-10 -mb-16 flex items-center justify-center space-x-4">
            {menuListingsData.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-10 h-2 bg-secondaryBlack' : 'w-2 h-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuListings;