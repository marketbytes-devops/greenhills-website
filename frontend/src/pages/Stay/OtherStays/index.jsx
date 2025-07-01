import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import MainButton from "../../../components/Button/MainButton";

const OtherStays = ({ sectionData, className = "" }) => {
  if (!sectionData || (!sectionData.images && !sectionData.content)) {
    return <div className={className}></div>;
  }

  const { images, content } = sectionData;

  return (
    <section
      className={`container-primary mx-auto ${className}`}
      aria-labelledby="other-stays-title"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:mt-0 md:pl-12 pr-0 md:pr-6 flex flex-col justify-start">
          {content?.title && (
            <div
              id="other-stays-title"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.title) }}
            />
          )}
          {content?.description && (
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.description) }}
              className="mt-4"
            />
          )}
          {content?.link && (
            <div className="mt-4">
              {/* <Link to={content.link}>
                <MainButton
                  label="More Info"
                  className="text-gray-100 hover:text-[#2b6843] transition-all duration-300"
                />
              </Link> */}
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6 mt-6 md:mt-0">
          {images?.map((item) => (
            <div key={item.id} className="flex-1">
              <Link to={`/stay/${item.link}`} className="group">
                <div className="relative">
                  <img
                    src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={DOMPurify.sanitize(item.title || "Stay Image").replace(/<[^>]+>/g, "")}
                    className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg group-hover:shadow-[#1f1f1f] transition-colors duration-300"
                    loading="lazy"
                  />
                  {item.title && (
                    <div className="mt-4 flex items-center justify-start space-x-2">
                      <div
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.title) }}
                      />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white transition-all duration-300 -rotate-45 group-hover:rotate-0"
                      />
                    </div>
                  )}
                </div>
                {item.description && (
                  <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }}
                    className="mt-2"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

OtherStays.propTypes = {
  sectionData: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    content: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    }),
  }),
  className: PropTypes.string,
};

export default memo(OtherStays);