import { useState, useEffect } from "react";
import { fetchAboutSectionTwo } from "../../../helpers/apiService";
import StripHtml from "../../../components/stripHTML";

const SectionTwo = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const getCardsData = async () => {
      try {
        const response = await fetchAboutSectionTwo();
        setCardsData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        setCardsData([]);
      }
    };
    getCardsData();
  }, []);

  if (!cardsData.length) {
    return <div></div>;
  }

  return (
    <div className="w-full">
      {cardsData.map((card, index) => {
        const isEven = index % 2 === 0;
        const flexDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";
        const bgColor = isEven ? "bg-secondaryBlack" : "bg-gray-100";
        const textColor = isEven ? "text-gray-100" : "text-black";

        return (
          <div
            key={card.id}
            className={`w-full flex flex-col ${flexDirection} items-center`}
          >
            <div className="w-full md:w-1/2 h-[300px] md:h-[550px]">
              <img
                src={card.image || "/placeholder-image.jpg"}
                alt={<StripHtml html={card.title || "No Title"} />}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
            </div>
            <div
              className={`w-full px-4 sm:px-6 md:px-16 py-4 sm:py-6 md:py-16 md:w-1/2 h-auto md:h-[550px] ${bgColor} ${textColor} flex flex-col justify-center`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: card.title || "No Title" }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: card.description || "No Description",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionTwo;