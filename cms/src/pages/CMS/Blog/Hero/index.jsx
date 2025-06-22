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
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/blog/blog-banner/"
      fields={contentFields}
      title="Blog Banner Management"
      singleEntry
    />
  );
};

export default Hero;