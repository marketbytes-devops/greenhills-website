import ContentManager from "../../../../components/ContentManager";

const SectionFour = () => {
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
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/about/about-section-four/"
      fields={contentFields}
      title="About Second Highlight Section Management"
      singleEntry
    />
  );
};

export default SectionFour;