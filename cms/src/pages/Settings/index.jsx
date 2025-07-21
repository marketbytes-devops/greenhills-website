import ContentManager from "../../components/ContentManager";

const Settings = () => {
  const contentFields = [
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      placeholder: 'Enter the description',
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      placeholder: 'Enter the location',
    },
    {
      name: 'phone_one',
      label: 'Phone Number 1',
      type: 'text',
      placeholder: 'Enter the phone number 1',
    },
    {
      name: 'phone_two',
      label: 'Phone Number 2',
      type: 'text',
      placeholder: 'Enter the phone number 2',
    },
    {
      name: 'phone_three',
      label: 'Phone Number 3',
      type: 'text',
      placeholder: 'Enter the phone number 3',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter the email',
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/additional-settings/settings/"
      fields={contentFields}
      title="Additional Settings"
    />
  );
};

export default Settings;
