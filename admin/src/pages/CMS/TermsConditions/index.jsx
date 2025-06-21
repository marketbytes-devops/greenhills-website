import ContentManager from "../../../components/ContentManager";

const TermsConditions = () => {
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
      apiBaseUrl="/terms-and-privacy/terms-and-conditions/"
      fields={contentFields}
      title="Terms and Conditions Management"
      singleEntry
    />
  );
};

export default TermsConditions;