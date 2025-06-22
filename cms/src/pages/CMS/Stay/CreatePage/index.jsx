import ContentManager from "../../../../components/ContentManager";

const CreatePage = () => {
  const contentFields = [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      placeholder: 'Enter the title',
    },
    {
      name: 'link',
      label: 'Page Slug',
      type: 'text',
      placeholder: 'Enter the slug',
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/stay/stay-page-create/"
      fields={contentFields}
      title="Stay Detailed Pages Create Management"
    />
  );
};

export default CreatePage;