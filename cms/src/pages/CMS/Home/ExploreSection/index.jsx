import ContentManager from "../../../../components/ContentManager";

const ExploreSection = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Background Image',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter banner title',
      required: true,
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
      apiBaseUrl="/home/home-explore/"
      fields={contentFields}
      title="Home Explore Management"
    />
  );
};

export default ExploreSection;