import ContentManager from "../../../../components/ContentManager";

const Hero = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Banner Image (For best performance, use WEBP images under 800KB.)',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter banner title',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textEditor',
      placeholder: 'Enter banner description',
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/explore/explore-banner/"
      fields={contentFields}
      title="Explore Banner Management"
      singleEntry
    />
  );
};

export default Hero;