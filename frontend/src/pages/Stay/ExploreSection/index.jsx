import { useModal } from "../../../context/ModalProvider";

const ExploreSection = ({ exploreData }) => {
  const { setIsModalOpen } = useModal();

  if (!exploreData) return <div />;

  return (
    <div
      className="w-full h-[450px] md:h-[550px] relative flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url(${exploreData.image || '/placeholder-image.jpg'})
        `,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container-secondary mx-auto w-full md:w-1/2 px-4 md:px-8 space-y-4 md:space-y-6 text-center">
        <div dangerouslySetInnerHTML={{ __html: exploreData.title || 'No Title' }} />
        <div className="pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex mx-auto items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-medium w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;