import { useState, useEffect, memo, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import StripHtml from "../../../components/stripHTML";
import { fetchBlogTitle, fetchBlogItems } from "../../../helpers/apiService";
import MainButton from "../../../components/Button/MainButton";
import { Link } from "react-router-dom";

const Blog = ({ className = "" }) => {
  const [sectionData, setSectionData] = useState({
    title: "",
    description: "",
  });
  const [blogItems, setBlogItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [titleResponse, itemsResponse] = await Promise.all([
          fetchBlogTitle(),
          fetchBlogItems(),
        ]);

        const titleData =
          Array.isArray(titleResponse.data) && titleResponse.data.length > 0
            ? titleResponse.data[0]
            : { title: "Latest Blog Posts", description: "" };

        const sortedItems = (itemsResponse.data || [])
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .slice(0, 3);

        setSectionData({
          title: titleData.title || "Latest Blog Posts",
          description: titleData.description || "",
        });
        setBlogItems(sortedItems);
        setError(null);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError("Failed to load content. Please try again later.");
        setSectionData({
          title: "Latest Blog Posts",
          description: "",
        });
        setBlogItems([]);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: blogItems.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const { title, description } = sectionData;
  const hasContent = title || description || blogItems.length > 0;

  if (error) {
    return (
      <div
        className={`slider-container px-4 py-8 mx-auto text-center text-red-500 ${className}`}
      >
        <p role="alert">{error}</p>
      </div>
    );
  }

  if (!hasContent) {
    return (
      <div
        className={`slider-container px-4 py-8 mx-auto ${className}`}
        aria-hidden="true"
      >
        <p>No content available.</p>
      </div>
    );
  }

  return (
    <section
      className={`mb-2 lg:mb-6 ${className}`}
      aria-labelledby="blog-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-16 items-start mb-8 sm:mb-12">
          <div className="md:w-1/2">
            {title && (
              <h2
                id="blog-title"
              >
                <StripHtml html={title} />
              </h2>
            )}
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 sm:gap-6">
            {description && (
              <p className="text-sm sm:text-base">
                <StripHtml html={description} />
              </p>
            )}
            <MainButton
              label="More Info"
              onClick={() => (window.location.href = "/blog-hotel-green-hills-valparai")}
              className="text-black hover:text-primary w-full sm:w-auto"
              aria-label="Learn more about this section"
            />
          </div>
        </div>
        <div className="pb-16 sm:pb-0">
          {blogItems.length > 0 ? (
            <>
              {/* Desktop and Tablet: Grid Layout */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {blogItems.map((item, index) => (
                  <div key={item.id || index}>
                    <Link
                      to={`blog-hotel-green-hills-valparai/${item.link}`}
                      className="group flex flex-col items-start text-left bg-white rounded-xl"
                    >
                      <div className="w-full h-40 sm:h-52 overflow-hidden mb-4 rounded-xl shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                        <img
                          src={item.image || "https://via.placeholder.com/150"}
                          alt={<StripHtml html={item.title || "No Title"} />}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                          }}
                        />
                      </div>
                      <h5 className="text-black mb-2 line-clamp-2 text-base sm:text-lg font-semibold">
                        <StripHtml html={item.title || "Unknown Title"} />
                      </h5>
                      <p className="mb-2 text-black line-clamp-3 text-sm sm:text-base">
                        <StripHtml html={item.description || "No description available."} />
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Mobile: Slider */}
              <div className="sm:hidden flex items-center">
                <Slider {...settings} ref={sliderRef} className="w-full">
                  {blogItems.map((item, index) => (
                    <div key={item.id || index} className="p-2">
                      <Link
                        to={`blog-hotel-green-hills-valparai/${item.link}`}
                        className="group flex flex-col items-start text-left"
                      >
                        <div className="w-full h-40 overflow-hidden mb-4 rounded-xl shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                          <img
                            src={item.image || "https://via.placeholder.com/150"}
                            alt={<StripHtml html={item.title || "No Title"} />}
                            className="w-full h-full object-cover rounded-xl"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150";
                            }}
                          />
                        </div>
                        <h5 className="text-black mb-2 line-clamp-2 text-base font-semibold">
                          <StripHtml html={item.title || "Unknown Title"} />
                        </h5>
                        <p className="mb-2 text-black line-clamp-3 text-sm">
                          <StripHtml
                            html={item.description || "No description available."}
                          />
                        </p>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Mobile: Dots */}
              {blogItems.length > 0 && (
                <div className="sm:hidden mt-6 -mb-16 flex items-center justify-center space-x-2">
                  {blogItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 h-2 bg-secondaryBlack"
                          : "w-2 h-2 bg-gray-200"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p>No blog posts available.</p>
              </div>
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