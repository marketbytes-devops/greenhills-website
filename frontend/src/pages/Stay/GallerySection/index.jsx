import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GallerySection = ({ galleryData, className = "" }) => {
  const images = galleryData?.reduce(
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
  ) || {};

  if (
    !images.leftImage &&
    !images.middleTopImage &&
    !images.middleBottomImage &&
    !images.rightImage
  ) {
    return <div></div>;
  }

  return (
    <section
      className={`slider-container ${className}`}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        role="region"
        aria-label="Image gallery"
      >
        {images.leftImage && (
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={images.leftImage}
              alt="Left column image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="grid grid-rows-2 gap-4">
          {images.middleTopImage && (
            <div className="rounded-xl overflow-hidden aspect-[3/2]">
              <img
                src={images.middleTopImage}
                alt="Middle top image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          {images.middleBottomImage && (
            <div className="rounded-xl overflow-hidden aspect-[3/1.9]">
              <img
                src={images.middleBottomImage}
                alt="Middle bottom image"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
        {images.rightImage && (
          <div className="rounded-xl overflow-hidden aspect-[3/4]">
            <img
              src={images.rightImage}
              alt="Right column image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Link
          to="/gallery"
          className="flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-medium w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

GallerySection.propTypes = {
  galleryData: PropTypes.array,
  className: PropTypes.string,
};

export default memo(GallerySection);