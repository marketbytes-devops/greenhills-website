import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import { fetchGatherSectionContent, fetchGatherSectionImages } from "../../../helpers/apiService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../../../components/Button/MainButton";

const GatherSection = ({ className = "" }) => {
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [imagesResponse, contentResponse] = await Promise.all([
                    fetchGatherSectionImages(),
                    fetchGatherSectionContent(),
                ]);

                console.log("Images Response:", imagesResponse.data);
                console.log("Content Response:", contentResponse.data);

                const imagesData = Array.isArray(imagesResponse.data)
                    ? imagesResponse.data.slice(0, 2)
                    : [];
                const contentData =
                    Array.isArray(contentResponse.data) && contentResponse.data.length > 0
                        ? contentResponse.data[0]
                        : null;

                if (!imagesData.length && !contentData) {
                    setSectionData(null);
                    return;
                }

                const images = imagesData.map((item) => ({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    description: item.description,
                    link: item.link,
                }));

                const content = contentData
                    ? {
                        title: contentData.title,
                        description: contentData.description,
                        link: contentData.link,
                    }
                    : null;

                setSectionData({
                    images: images.length ? images : null,
                    content,
                });
            } catch (error) {
                console.error("Error fetching gather section data:");
                setSectionData(null);
            }
        };

        fetchData();
    }, []);

    if (!sectionData || (!sectionData.images && !sectionData.content)) {
        return <div className={className}></div>;
    }

    const { images, content } = sectionData;

    return (
        <section className={`container-primary mx-auto ${className}`} aria-labelledby="gather-section-title">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 md:mt-0 md:pl-12 flex flex-col justify-start mr-0 md:mr-10">
                    {content && content.title && (
                        <div
                            id="gather-section-title"
                            dangerouslySetInnerHTML={{ __html: content.title }}
                        />
                    )}
                    {content && content.description && (
                        <div dangerouslySetInnerHTML={{ __html: content.description }} className="mt-4" />
                    )}
                    {content && content.link && (
                          <div className="mt-4 mb-6">
                              <MainButton label="More Info" className="text-gray-100" onClick={() => (window.location.href = content.link)} />
                          </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6">
                    {images && images.map((item) => (
                        <div key={item.id} className="flex-1">
                            <Link to={item.link} className="group">
                                <div className="relative">
                                    <img
                                        src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                                        alt={item.title}
                                        className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg group-hover:shadow-[#1f1f1f] transition-colors duration-300"
                                        loading="lazy"
                                    />
                                    {item.title && (
                                        <div className="mt-6 flex items-center justify-start space-x-2">
                                            <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="text-white transition-all duration-300 -rotate-45 group-hover:rotate-0"
                                            />
                                        </div>
                                    )}
                                </div>
                                {item.description && (
                                    <div dangerouslySetInnerHTML={{ __html: item.description }} className="mt-2" />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

GatherSection.propTypes = {
    className: PropTypes.string,
};

export default memo(GatherSection);
