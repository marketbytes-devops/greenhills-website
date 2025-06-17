import ContentManager from "../../../../components/ContentManager";
import StatsSection from "./StatsSection";

const RatingSection = () => {
  const contentFields = [
    {
      name: "description",
      label: "Description",
      type: "textEditor",
      placeholder: "Enter the description",
    },
    {
      name: "starRating",
      label: "Rating",
      type: "number",
      placeholder: "Enter the rating (1-5)",
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: "score",
      label: "Score",
      type: "textEditor",
      placeholder: "Enter the score (e.g., 5.0)",
      required: true,
    },
    {
      name: "label",
      label: "Label",
      type: "textEditor",
      placeholder: "Enter the label",
      required: true,
    },
  ];

  return (
    <div className="space-y-8">
      <ContentManager
        apiBaseUrl="/home/home-rating/"
        fields={contentFields}
        title="Home Rating Management"
        singleEntry
      />
      <StatsSection />
    </div>
  );
};

export default RatingSection;