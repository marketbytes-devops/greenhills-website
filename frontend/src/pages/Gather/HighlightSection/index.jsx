import StripHtml from "../../../components/stripHtml";

const HighlightSection = ({ highlights, titleData }) => {
  if (!highlights || !highlights.length || !titleData) {
    return null;
  }

  return (
    <>
      <div className="text-center max-w-4xl mx-auto">
        {titleData.title && (
          <div
            className="pb-10 space-y-6"
            dangerouslySetInnerHTML={{ __html: titleData.title }}
          />
        )}
        {titleData.description && (
          <div
            className="pb-10"
            dangerouslySetInnerHTML={{ __html: titleData.description }}
          />
        )}
      </div>
      <div className="w-full">
        {highlights.map((card, index) => {
          const isEven = index % 2 === 0;
          const flexDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";
          const bgColor = isEven ? "bg-gray-100" : "bg-secondaryBlack";
          const textColor = isEven ? "text-black" : "text-gray-100";

          return (
            <div
              key={card.id}
              className={`w-full h-[550px] flex flex-col ${flexDirection} items-center`}
            >
              <div className="w-full md:w-1/2 h-full">
                <img
                  src={card.image}
                  alt={<StripHtml html={card.title || "No Title"} />}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`w-full px-4 md:px-16 py-4 md:py-16 md:w-1/2 h-[550px] ${bgColor} ${textColor} flex flex-col justify-center p-8`}
              >
                {card.title && (
                  <div dangerouslySetInnerHTML={{ __html: card.title }} />
                )}
                {card.description && (
                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HighlightSection;