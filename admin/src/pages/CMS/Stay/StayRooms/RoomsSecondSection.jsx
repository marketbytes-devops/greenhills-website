import ContentManager from "../../../../components/ContentManager";

const RoomsSecondSection = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Image',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
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
      <ContentManager
        apiBaseUrl="/stay/stay-rooms-listings/"
        fields={contentFields}
        title="Stay Rooms Listings Management"
      />
  );
};

export default RoomsSecondSection;