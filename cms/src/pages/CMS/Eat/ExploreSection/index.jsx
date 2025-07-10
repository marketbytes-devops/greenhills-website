import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const ExploreSection = () => {
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
  ];

  return (
    <ContentManager
      apiBaseUrl="/eat/eat-explore/" 
      fields={contentFields}
      title="Eat Detail Page Explore Management"
      singleEntry
    />
  );
};

export default ExploreSection;