import ContentManager from "../../../../components/ContentManager";

const SectionTwo = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Image (For best performance, use WEBP images under 800KB.)',
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
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/explore/explore-section-two/"
      fields={contentFields}
      title="Explore Section Two Management"
    />
  );
};

export default SectionTwo;