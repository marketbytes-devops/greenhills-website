import ContentManager from "../../../../components/ContentManager";

const StatsSection = () => {
  const contentFields = [
    {
      name: "value",
      label: "Value",
      type: "textEditor",
      placeholder: "Enter the value",
      required: true,
    },
    {
      name: "label",
      label: "Label",
      type: "textEditor",
      placeholder: "Enter the label",
      required: true,
    },
    {
      name: "order",
      label: "Order",
      type: "number",
      placeholder: "Enter display order",
      required: true,
      min: 0,
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/home/home-stats/"
      fields={contentFields}
      title="Home Stats Management"
    />
  );
};

export default StatsSection;