import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import { fetchEatSectionContent, fetchEatSectionImages } from "../../../helpers/apiService";
import MainButton from "../../../components/Button/MainButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EatSection = ({ className = "" }) => {
    const [sectionData, setSectionData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [imagesResponse, contentResponse] = await Promise.all([
                    fetchEatSectionImages(),
                    fetchEatSectionContent(),
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
                    link: item.link
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
                console.error("Error fetching eat section data:");
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
        <section
            className={`mx-auto ${className}`}
            aria-labelledby="eat-section-title"
        >
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row md:w-2/3 space-y-6 md:space-y-0 md:space-x-6">
                    {images && images.map((item) => (
                        <div key={item.id} className="flex-1">
                            <Link to={item.link} className="group">
                                <div className="relative">
                                    <img
                                        src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                                        alt={item.title}
                                        className="w-full h-80 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-colors duration-300"
                                        loading="lazy"
                                    />
                                    {item.title && (
                                    <div className="mt-4 flex items-center justify-start space-x-2">
                                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="transition-all duration-300 -rotate-45 group-hover:rotate-0"
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
                <div className="md:w-1/3 md:mt-0 md:pl-12 flex flex-col justify-start">
                    {content && content.title && (
                        <div
                            id="eat-section-title"
                            dangerouslySetInnerHTML={{ __html: content.title }}
                        />
                    )}
                    {content && content.description && (
                        <div dangerouslySetInnerHTML={{ __html: content.description }} className="mt-4" />
                    )}
                    {content && content.link && (
                        <div className="mt-4">
                            <MainButton label="More Info" onClick={() => (window.location.href = content.link)} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

EatSection.propTypes = {
    className: PropTypes.string,
};

export default memo(EatSection);