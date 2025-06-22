import ContentManager from "../../../../components/ContentManager";
import RoomsSecondSection from "./RoomsSecondSection";

const FirstSection = () => {
  const contentFields = [
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textEditor',
      placeholder: 'Enter the description',
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      placeholder: 'Enter the link',
    }
  ];

  return (
    <div className="space-y-6">
      <ContentManager
        apiBaseUrl="/stay/stay-rooms-title/"
        fields={contentFields}
        title="Stay Rooms Listings Title Management"
        singleEntry
      />
      <RoomsSecondSection />
    </div>
  );
};

export default FirstSection;