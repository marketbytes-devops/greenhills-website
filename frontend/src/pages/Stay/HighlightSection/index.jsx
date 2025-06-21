import StripHtml from "../../../components/stripHtml";

const HighlightSection = ({ highlights }) => {
  if (!highlights || !highlights.length) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseInt(rating) || 0;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= ratingNum ? "text-yellow-400" : "text-gray-400"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
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
              <div dangerouslySetInnerHTML={{ __html: card.title }} />
              {(card.discounted_price || card.original_price || card.rating) && (
                <div className="flex items-center space-x-4 mt-2">
                  {card.discounted_price && (
                    <p className="font-medium">Rs. {card.discounted_price}</p>
                  )}
                  {card.original_price && (
                    <p className="font-medium line-through">Rs. {card.original_price}</p>
                  )}
                  {card.rating && <div className="flex">{renderStars(card.rating)}</div>}
                </div>
              )}
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightSection;