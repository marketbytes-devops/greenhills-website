import { useEffect, useState } from 'react';
import { fetchRatingSection, fetchStatsSection } from '../../../helpers/apiService';

const RatingCard = () => {
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    Promise.all([fetchRatingSection(), fetchStatsSection()])
      .then(([ratingResponse, statsResponse]) => {
        const ratingSection = ratingResponse.data.length > 0 ? ratingResponse.data[0] : null;
        const sortedStatsSection = (statsResponse.data || []).sort((a, b) => 
          (a.order || 0) - (b.order || 0)
        );
        if (ratingSection || sortedStatsSection.length > 0) {
          setRatingData({
            ratingSection: ratingSection || {},
            statsSection: sortedStatsSection,
          });
        } else {
          setRatingData(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRatingData(null);
      });
  }, []);

  if (!ratingData) {
    return <div></div>;
  }

  const { ratingSection, statsSection } = ratingData;

  return (
    <div className="bg-gradient-to-r from-[#181818] to-[#101010] text-white py-8 md:py-16">
      <div className="container-secondary mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="flex-1 flex flex-col gap-y-4 md:gap-y-6 px-4 md:px-0">
          <div dangerouslySetInnerHTML={{ __html: ratingSection.description || 'No Description' }} />
          <div className="hidden lg:block bg-[#181818] w-[90%] h-[1px]"></div>
          <div className="flex items-center gap-x-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg md:text-xl ${i < (ratingSection.starRating || 0) ? 'text-yellow-400' : 'text-gray-500'}`}
              >
                ★
              </span>
            ))}
            <span dangerouslySetInnerHTML={{ __html: ratingSection.score || 'N/A' }} />
          </div>
          <div className="flex items-baseline gap-2">
            <span dangerouslySetInnerHTML={{ __html: ratingSection.label || 'No Label' }} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:-space-x-8 gap-4 md:gap-0 items-center">
          {statsSection.map((stat, index) => (
            <div
              key={stat.id || index}
              className={`rounded-full space-y-2 md:space-y-4 aspect-square flex flex-col items-center justify-center w-40 h-40 md:w-60 md:h-60 ${index % 2 === 0 ? 'bg-secondaryBlack' : 'bg-[#191919]'}`}
            >
              <span dangerouslySetInnerHTML={{ __html: stat.value || 'N/A' }} />
              <span className="text-center px-2" dangerouslySetInnerHTML={{ __html: stat.label || 'No Label' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingCard;