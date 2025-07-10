import ContentManager from "../../../../components/ContentManager";

const TeamSection = () => {
  const contentFields = [
    {
      name: 'image',
      label: 'Person Image',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'name',
      label: 'Name',
      type: 'textEditor',
      placeholder: 'Enter the name',
    },
    {
      name: 'role',
      label: 'Place',
      type: 'textEditor',
      placeholder: 'Enter the role',
    },
    {
      name: 'testimonial',
      label: 'Testimonials',
      type: 'textEditor',
      placeholder: 'Enter the testimonials',
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
      apiBaseUrl="/home/home-team-section/"
      fields={contentFields}
      name="Home Testimonials Section Listing Management"
    />
  );
};

export default TeamSection;