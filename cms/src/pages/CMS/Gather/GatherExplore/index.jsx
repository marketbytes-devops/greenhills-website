import { useState, useEffect } from 'react';
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const GatherExplore = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    apiClient
      .get('/gather/gather-page-create/')
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
      name: 'gather_page_create',
      label: 'Select Page',
      type: 'select',
      options: pageData,
      required: true,
    },
    {
      name: 'image',
      label: 'Explore Image (For best performance, use WEBP images under 800KB.)',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Explore Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'link',
      label: 'Explore Link',
      type: 'text',
      placeholder: 'Enter the link',
    }
  ];

  return (
    <ContentManager
      apiBaseUrl="/gather/gather-explore/"
      fields={contentFields}
      title="Gather Detail Page Explore Management"
      singleEntry
    />
  );
};

export default GatherExplore;