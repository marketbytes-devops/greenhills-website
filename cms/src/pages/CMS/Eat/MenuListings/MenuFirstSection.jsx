import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";
import MenuSecondSection from "./MenuSecondSection";

const MenuFirstSection = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    apiClient
      .get('/eat/eat-page-create/')
      .then((response) => {
        const data = response.data.map((item) => ({
          value: item.id,
          label: item.title || 'Page Title',
        }));
        setPageData(data);
      })
      .catch((err) => console.error('Error fetching pages:', err));
  }, []);

  const contentFields = [
    {
      name: 'eat_page_create',
      label: 'Select Page',
      type: 'select',
      options: pageData,
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    }
  ];

  return (
    <div className="space-y-6">
      <ContentManager
        apiBaseUrl="/eat/eat-menu-title/"
        fields={contentFields}
        title="Eat Detail Page Menu Title Management"
        singleEntry
      />
      <MenuSecondSection/>
    </div>
  );
};

export default MenuFirstSection;