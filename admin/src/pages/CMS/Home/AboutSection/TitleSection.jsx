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
    {
      name: "link",
      label: "More Info Link",
      type: "text",
      placeholder: "Enter about section link",
    },
  ];

  return (
    <div className="space-y-6">
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