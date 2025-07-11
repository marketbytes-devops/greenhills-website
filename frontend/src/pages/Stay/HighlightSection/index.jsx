import StripHtml from "../../../components/stripHTML";
import { useModal } from "../../../context/ModalProvider";

const HighlightSection = ({ highlights }) => {
  const { setIsModalOpen } = useModal();

  if (!highlights || !highlights.length) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseInt(rating) || 0;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= ratingNum ? "text-yellow-400" : "text-gray-400"}
        >
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
        const buttonBgColor = isEven ? "bg-secondaryBlack" : "bg-gray-100";
        const buttonTextColor = isEven ? "text-gray-100" : "text-black";

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
              {(card.discounted_price || card.original_price || card.rating) && (
                <div className="flex items-center space-x-4">
                  {card.discounted_price && (
                    <p className="font-medium">
                      Rs. {card.discounted_price}
                    </p>
                  )}
                  {card.original_price && (
                    <p className="font-medium">
                      Rs. <del>{card.original_price}</del>
                    </p>
                  )}
                  {card.rating && (
                    <div>
                      {renderStars(card.rating)}
                    </div>
                  )}
                </div>
              )}
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: card.description || "No Description",
                }}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className={`mt-6 sm:mt-8 flex group items-center justify-center space-x-2 ${buttonBgColor} ${buttonTextColor} font-normal w-full sm:w-40 xl:w-40 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300`}
              >
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HighlightSection;