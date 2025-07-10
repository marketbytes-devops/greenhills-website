import { useState, useEffect } from 'react';
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const StayHighlights = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    apiClient
      .get('/stay/stay-page-create/')
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
      name: 'stay_page_create',
      label: 'Select Page',
      type: 'select',
      options: pageData,
      required: true,
    },
    {
      name: 'image',
      label: 'Highlights Image',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Highlights Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'original_price',
      label: 'Highlights Original Price (ex., 2000, 1000)',
      type: 'text',
      placeholder: 'Enter the original price',
    },
    {
      name: 'discounted_price',
      label: 'Highlights Discounted Price (ex., 2000, 1000)',
      type: 'text',
      placeholder: 'Enter the discounted price',
    },
    {
      name: 'rating',
      label: 'Star Rating (ex., 3, 4)',
      type: 'text',
      placeholder: 'Enter the rating',
    },
    {
      name: 'description',
      label: 'Highlights Description',
      type: 'textEditor',
      placeholder: 'Enter the description',
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      placeholder: 'Enter the order',
      min: 0,
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/stay/stay-highlights/"
      fields={contentFields}
      title="Stay Detail Page Features & Pricing Section Management"
      singleEntry={false}
    />
  );
};

export default StayHighlights;