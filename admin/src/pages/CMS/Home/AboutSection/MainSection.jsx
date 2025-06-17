import ContentManager from "../../../../components/ContentManager";

const MainSection = () => {
  const contentFields = [
    {
      name: "image",
      label: "Image",
      type: "file",
      accept: "image/png,image/jpeg,image/webp,image/gif",
      required: true,
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/home/home-about-section-image/"
      fields={contentFields}
      title="Home About Section Image Management"
    />
  );
};

export default MainSection;