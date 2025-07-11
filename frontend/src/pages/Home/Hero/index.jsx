import { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchSliderData } from "../../../helpers/apiService";
import { useModal } from "../../../context/ModalProvider";

const Hero = () => {
  const [sliderData, setSliderData] = useState([]);
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    fetchSliderData()
      .then((response) => {
        const sortedData = (response.data || []).sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );
        setSliderData(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
        setSliderData([]);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-[500px] lg:h-screen relative overflow-hidden">
      <Slider {...settings}>
        {sliderData.length > 0 ? (
          sliderData.map((item, index) => (
            <div
              key={item.id || index}
              className="w-full h-[500px] lg:h-screen"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex items-center justify-center h-full bg-secondaryBlack bg-opacity-30">
                  <div className="relative top-10 md:-top-8 px-6 space-y-6 flex flex-col items-center justify-center text-center text-white">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.title || "No Title",
                      }}
                    />
                    <div
                      className="max-w-4xl"
                      dangerouslySetInnerHTML={{
                        __html: item.description || "No Description",
                      }}
                    />
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group flex items-center justify-center bg-secondaryBlack text-md text-white font-normal w-36 h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-[500px] lg:h-screen">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center justify-center h-full bg-secondaryBlack bg-opacity-30">
                <div className="relative top-10 px-6 space-y-6 flex flex-col items-center justify-center text-center text-white">
                  <h1>Valparai</h1>
                  <p className="max-w-4xl">
                    Indulge in the mystic charm of the mountains. Trek through
                    the unspoilt and unseen forest trails of Annamalai. Infuse
                    the wonders and spell of the virgin shola forest. Breathe in
                    nature in its pristine form.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center space-x-2 bg-secondaryBlack text-sm text-md font800 py-2.5 px-6 h-10 rounded-full hover:bg-primary transition-all duration-200"
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Hero;