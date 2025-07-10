import StripHtml from "../../../components/stripHTML";
import { useModal } from "../../../context/ModalProvider";

const HighlightSection = ({ highlights, titleData }) => {
  const { setIsModalOpen } = useModal();

  if (!highlights || !highlights.length || !titleData) {
    return null;
  }

  return (
    <>
      <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
        {titleData.title && (
          <div
            className="space-y-6 pb-6 sm:pb-10 text-xl sm:text-2xl md:text-3xl font-bold"
            dangerouslySetInnerHTML={{ __html: titleData.title }}
          />
        )}
        {titleData.description && (
          <div
            className="pb-6 sm:pb-10 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: titleData.description }}
          />
        )}
      </div>
      <div className="w-full pt-4 sm:pt-6 md:pt-4">
        {highlights.map((card, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";
          const bgColor = isEven ? "bg-gray-100" : "bg-secondaryBlack";
          const textColor = isEven ? "text-black" : "text-gray-100";
          const buttonBgColor = isEven ? "bg-black" : "bg-gray-100";
          const buttonTextColor = isEven ? "text-white" : "text-black";

          return (
            <div
              key={card.id}
              className={`w-full h-auto md:h-[550px] flex flex-col ${flexDirection} items-center`}
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-full">
                <img
                  src={card.image || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={<StripHtml html={card.title || "No Title"} />}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
              <div
                className={`w-full px-4 sm:px-6 md:px-16 py-8 sm:py-8 md:py-16 md:w-1/2 h-auto md:h-[550px] ${bgColor} ${textColor} flex flex-col justify-center`}
              >
                {card.title && (
                  <div
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                )}
                {card.description && (
                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                )}
                <div className="mt-6 sm:mt-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`flex group items-center justify-center space-x-2 ${buttonBgColor} text-sm sm:text-md ${buttonTextColor} font-normal w-full sm:w-40 xl:w-40 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HighlightSection;