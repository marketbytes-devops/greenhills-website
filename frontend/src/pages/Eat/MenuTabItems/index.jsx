import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StripHtml from "../../../components/stripHTML";

const MenuTabItems = ({ tabData, tabMenuItemsData }) => {
  const [activeTab, setActiveTab] = useState(
    tabData.length > 0 ? tabData[0].id : null
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (tabData.length > 0 && !activeTab) {
      setActiveTab(tabData[0].id);
    }
  }, [tabData, activeTab]);

  const activeTabItems = tabMenuItemsData.filter(
    (item) => item.tab_name === activeTab
  );

  const settings = {
    dots: false,
    infinite: activeTabItems.length > (activeTabItems.length === 2 ? 2 : 4),
    speed: 500,
    slidesToShow:
      activeTabItems.length === 2 ? 2 : Math.min(activeTabItems.length, 4),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            activeTabItems.length === 2
              ? 2
              : Math.min(activeTabItems.length, 2),
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

  const renderStarRating = (rating) => {
    const maxStars = 5;
    const normalizedRating = Math.min(Math.max(parseFloat(rating) || 0, 0), maxStars); 
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating % 1 >= 0.5;
    const emptyStars = Math.max(maxStars - fullStars - (hasHalfStar ? 1 : 0), 0); 

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
    <div>
      <div className="text-center mb-6 sm:mb-14">
        <div className="flex flex-wrap justify-center gap-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center space-x-2 border border-black hover:border-none text-md text-black font-normal px-10 w-full sm:w-fit h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-secondaryBlack text-white"
                  : "bg-white text-secondaryBlack"
              }`}
            >
              {tab.tab_name}
            </button>
          ))}
        </div>
      </div>
      <div className="pb-16">
        {activeTabItems.length > 0 ? (
          <div className="flex items-center">
            <Slider {...settings} ref={sliderRef} className="w-full">
              {activeTabItems.map((item, index) => (
                <div key={item.id} className="group p-4 md:p-4">
                  <div className="flex flex-col justify-center">
                    <div className="rounded-lg overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={item.image || "https://via.placeholder.com/150"}
                        alt={<StripHtml html={item.title || "No title"} />}
                        className="w-full h-[300px] rounded-lg object-cover shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                    <div className="w-full text-left">
                      <div
                        className="mb-2 text-base sm:text-lg md:text-xl font-semibold"
                        dangerouslySetInnerHTML={{
                          __html: item.title || "Unknown Title",
                        }}
                      />
                      {renderStarRating(item.rating)}
                      <div
                        className="text-sm sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: item.description || "No description",
                        }}
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
              <p>No menu items available for this tab.</p>
            </div>
          </div>
        )}
        {activeTabItems.length > 0 && (
          <div className="mt-6 sm:mt-10 -mb-16 flex items-center justify-center space-x-2 sm:space-x-4">
            {activeTabItems.map((_, index) => (
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
        )}
      </div>
    </div>
  );
};

export default MenuTabItems;