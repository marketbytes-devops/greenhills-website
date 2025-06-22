import ContentManager from "../../../components/ContentManager";

const PrivacyPolicy = () => {
  const contentFields = [
    {
      name: 'content',
      label: 'Content',
      type: 'textEditor',
      placeholder: 'Enter the content',
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/terms-and-privacy/privacy-policy/"
      fields={contentFields}
      title="Privacy Policy Management"
      singleEntry
    />
  );
};

export default PrivacyPolicy;