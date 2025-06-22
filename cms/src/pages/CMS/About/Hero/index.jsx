import ContentManager from "../../../../components/ContentManager";

const Hero = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Banner Image',
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
      apiBaseUrl="/about/about-banner/"
      fields={contentFields}
      title="About Banner Management"
      singleEntry
    />
  );
};

export default Hero;