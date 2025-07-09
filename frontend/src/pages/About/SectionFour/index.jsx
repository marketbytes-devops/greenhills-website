import { useState, useEffect } from 'react';
import { fetchAboutSectionFour } from '../../../helpers/apiService';
import { useModal } from '../../../context/ModalProvider';

const SectionFour = () => {
  const [sectionFourData, setSectionFourData] = useState(null);
  const { setIsModalOpen } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAboutSectionFour();
        setSectionFourData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        setSectionFourData([]);
      }
    };
    fetchData();
  }, []);

  if (!sectionFourData || sectionFourData.length === 0) return <div />;

  const data = sectionFourData[0];

  return (
    <div
      className="w-full h-[450px] md:h-[550px] bg-gradient-to-r from-white/80 to-black/50 relative flex items-center"
      style={{
        backgroundImage: `url(${data.image || '/placeholder-image.jpg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container-secondary mx-auto w-full md:w-1/2 px-4 md:px-8 space-y-4 md:space-y-6 text-center">
        <div
          dangerouslySetInnerHTML={{ __html: data.title || 'No Title' }}
        />
        <div className="pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex mx-auto items-center justify-center space-x-2 bg-secondaryBlack text-md text-md font-medium w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-primary text-white transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;