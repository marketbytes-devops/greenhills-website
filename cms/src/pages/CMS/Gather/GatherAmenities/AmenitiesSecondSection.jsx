import { useState, useEffect } from 'react';
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const AmenitiesSecondSection = () => {
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
      label: 'Amenities Image (For best performance, use WEBP images under 800KB.)',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Amenities Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      placeholder: 'Enter the order',
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/gather/gather-amenities-listings/"
      fields={contentFields}
      title="Gather Detail Page Amenities Listings Management"
    />
  );
};

export default AmenitiesSecondSection;