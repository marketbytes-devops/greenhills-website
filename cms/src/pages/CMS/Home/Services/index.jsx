import ContentManager from "../../../../components/ContentManager";

const Services = () => {
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
      name: 'order',
      label: 'Order',
      type: 'number',
      placeholder: 'Enter display order',
      min: 0,
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/home/home-services/"
      fields={contentFields}
      title="Home Services Management"
    />
  );
};

export default Services;