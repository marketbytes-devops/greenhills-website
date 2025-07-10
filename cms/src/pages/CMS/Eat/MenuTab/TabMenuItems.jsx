import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const TabMenuItems = () => {
  const [pageData, setPageData] = useState([]);
  const [tabData, setTabData] = useState([]);

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

  useEffect(() => {
    apiClient
      .get('/eat/eat-menu-tab-create/')
      .then((response) => {
        const data = response.data.map((item) => ({
          value: item.id,
          label: item.tab_name || 'No Tab Name',
        }));
        setTabData(data.length ? data : [{ value: '', label: 'No Tabs Available' }]);
      })
      .catch((err) => console.error('Error fetching tab name:', err));
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
      name: 'tab_name',
      label: 'Select Tab Name',
      type: 'select',
      options: tabData,
      required: true,
    },
    {
      name: 'image',
      label: 'Image (For best performance, use WEBP images under 800KB.)',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textEditor',
      placeholder: 'Enter the description',
    },
    {
      name: 'rating',
      label: 'Rating',
      type: 'number',
      placeholder: 'Enter the rating',
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/eat/eat-menu-tab-items/"
      fields={contentFields}
      title="Eat Detail Page Tab Menu Items"
    />
  );
};

export default TabMenuItems;