import { useModal } from "../../../context/ModalProvider";

const ExploreSection = ({ exploreData }) => {
  const { setIsModalOpen } = useModal();

  if (!exploreData || !exploreData.image || !exploreData.title) {
    return null;
  }

  return (
    <section
      className="w-full h-auto md:h-[550px] py-8 relative flex items-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url(${exploreData.image || "https://via.placeholder.com/300x200?text=No+Image"})
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onError={(e) => {
        e.target.style.backgroundImage = `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
          url(https://via.placeholder.com/300x200?text=No+Image)
        `;
      }}
    >
      <div className="container-secondary mx-auto w-full px-4 md:px-8 space-y-4 md:space-y-6">
        <div
          dangerouslySetInnerHTML={{ __html: exploreData.title || "No Title" }}
        />
        <div className="pt-2 flex items-start justify-start">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-medium w-52 xl:w-52 h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300"
          >
            Reserve Your Space
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;