import ContentManager from "../../../../components/ContentManager";
import MainSection from "./MainSection";

const TitleSection = () => {
  const contentFields = [
    {
      name: "title",
      label: "Title",
      type: "textEditor",
      placeholder: "Enter about section title",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textEditor",
      placeholder: "Enter about section description",
    },
  ];

  return (
    <div className="space-y-8">
      <ContentManager
        apiBaseUrl="/home/home-about-section-title/"
        fields={contentFields}
        title="Home About Section Title Management"
        singleEntry
      />
      <MainSection />
    </div>
  );
};

export default TitleSection;