import { useState, useRef } from "react";
import Slider from "react-slick";
import StripHtml from "../../../components/stripHTML";

const AmenitiesSection = ({ sectionData, cardsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  if (
    !sectionData?.title &&
    !sectionData?.description &&
    (!cardsData || !cardsData.length)
  ) {
    return <div></div>;
  }

  const settings = {
    dots: false,
    infinite: cardsData?.length > 2,
    slidesToShow: Math.min(cardsData?.length || 0, 5),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(cardsData?.length || 0, 2),
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      {(sectionData?.title || sectionData?.description) && (
        <div className="text-center max-w-7xl mx-auto">
          {sectionData.title && (
            <div
              className="pb-10 space-y-6 px-4 sm:px-4 text-xl sm:text-2xl md:text-3xl font-bold"
              dangerouslySetInnerHTML={{ __html: sectionData.title }}
            />
          )}
          {sectionData.description && (
            <div
              className="pb-10 px-4 sm:px-4 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: sectionData.description }}
            />
          )}
        </div>
      )}
      {cardsData?.length > 0 && (
        <div className="slider-container container-secondary mx-auto px-4 sm:px-6 lg:px-0 pt-0 md:pt-6 pb-8 relative">
          <div className="flex items-center">
            <Slider {...settings} ref={sliderRef} className="w-full">
              {cardsData.map((card) => (
                <div key={card.id} className="p-2 group">
                  <div className="bg-white group-hover:bg-secondaryBlack shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 w-full mx-auto flex flex-col justify-center items-center min-h-[200px]">
                    <div className="relative flex justify-center items-center h-20">
                      <img
                        src={card.image || "/placeholder-image.jpg"}
                        alt={<StripHtml html={card.title || "No Title"} />}
                        className="z-40 w-16 h-16 object-contain brightness-50 group-hover:brightness-100"
                        onError={(e) => {
                          e.target.src = "/placeholder-image.jpg";
                        }}
                      />
                    </div>
                    <div className="p-4 text-center">
                      <div
                        className="line-clamp-2 group-hover:text-white transition-colors duration-300 text-gray-900 text-sm sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: card.title || "No Title",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-6 sm:mt-10 -mb-4 flex items-center justify-center space-x-2 sm:space-x-4">
            {cardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-2 sm:w-10 sm:h-2 bg-secondaryBlack"
                    : "w-2 h-2 sm:w-2 sm:h-2 bg-gray-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AmenitiesSection;