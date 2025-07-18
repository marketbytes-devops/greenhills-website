import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import MainButton from "../../../components/Button/MainButton";
import {
  fetchAboutSectionTitle,
  fetchAboutSectionImages,
} from "../../../helpers/apiService";
import { useNavigate } from "react-router-dom";

const AboutSection = ({ className = "" }) => {
  const navigate = useNavigate();
  const [sectionData, setSectionData] = useState({
    title: "",
    description: "",
    image: {
      leftImage: null,
      middleTopImage: null,
      middleBottomImage: null,
      rightImage: null,
    },
    link: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [titleResponse, imageResponse] = await Promise.all([
          fetchAboutSectionTitle(),
          fetchAboutSectionImages(),
        ]);

        console.log("Title Response:", titleResponse.data);
        console.log("Image Response:", imageResponse.data);

        const titleData =
          Array.isArray(titleResponse.data) && titleResponse.data.length > 0
            ? titleResponse.data[0]
            : {};

        const imageData = Array.isArray(imageResponse.data)
          ? imageResponse.data
          : [];
        const newImage = imageData.reduce(
          (acc, image) => {
            const imageMap = {
              1: "leftImage",
              2: "middleTopImage",
              3: "middleBottomImage",
              4: "rightImage",
            };
            if (imageMap[image.id]) {
              acc[imageMap[image.id]] = image.image;
            }
            return acc;
          },
          {
            leftImage: null,
            middleTopImage: null,
            middleBottomImage: null,
            rightImage: null,
          }
        );

        console.log("Mapped Images:", newImage);

        setSectionData({
          title: titleData.title || "",
          description: titleData.description || "",
          image: newImage,
          link: titleData.link || "",
        });
        setError(null);
      } catch (error) {
        console.error("Error fetching about section data:", error);
        setError("Failed to load content. Please try again later.");
        setSectionData({
          title: "",
          description: "",
          image: {
            leftImage: null,
            middleTopImage: null,
            middleBottomImage: null,
            rightImage: null,
          },
          link: "",
        });
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    console.log("Link value:", sectionData.link);
    if (sectionData.link) {
      navigate(`/${sectionData.link}`);
    }
  };

  const handleButtonGalleryClick = () => {
    navigate('/gallery');
  };

  const { title, description, image, link } = sectionData;
  const hasContent =
    title || description || Object.values(image).some((img) => img !== null);

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
      className={`slider-container py-8 mx-auto mb-2 lg:mb-6 ${className}`}
      aria-labelledby="about-title"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-6"
        role="region"
        aria-label="Image gallery"
      >
        {image.leftImage && (
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={image.leftImage}
              alt="Left column image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="grid grid-rows-2 gap-4">
          {image.middleTopImage && (
            <div className="rounded-xl overflow-hidden aspect-[3/2]">
              <img
                src={image.middleTopImage}
                alt="Middle top image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          {image.middleBottomImage && (
            <div className="rounded-xl overflow-hidden aspect-[3/1.9]">
              <img
                src={image.middleBottomImage}
                alt="Middle bottom image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
        {image.rightImage && (
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={image.rightImage}
              alt="Right column image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="pt-10 flex items-center justify-center">
        <button className="flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-normal w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300" onClick={handleButtonGalleryClick}>
          View More
        </button>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  className: PropTypes.string,
};

export default memo(AboutSection);