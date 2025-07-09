import { useState, useEffect } from "react";
import { fetchExplore } from "../../../helpers/apiService";
import { useModal } from '../../../context/ModalProvider';

const ExploreSection = () => {
  const { setIsModalOpen } = useModal();
  const [exploreData, setExploreData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExplore()
      .then((response) => {
        setExploreData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!exploreData || exploreData.length === 0) return <div></div>;

  const data = exploreData[0];

  return (
    <>
      <div
        className="w-full h-[450px] md:h-[550px] bg-gradient-to-r from-white/80 to-black/50 relative flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${data.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="container-secondary mx-auto w-full md:w-1/2 px-0 md:px-0 space-y-4 md:space-y-6">
          <div dangerouslySetInnerHTML={{ __html: data.title }} />
          <div className="max-w-lg md:max-w-4xl" dangerouslySetInnerHTML={{ __html: data.description }} />
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-normal w-40 xl:w-40 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;