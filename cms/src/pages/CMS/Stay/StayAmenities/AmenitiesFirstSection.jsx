import { useState, useEffect } from 'react';
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";
import AmenitiesSecondSection from "./AmenitiesSecondSection"

const AmenitiesFirstSection = () => {
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
      name: 'title',
      label: 'Amenities Title',
      type: 'textEditor',
      placeholder: 'Enter the title',
    },
    {
      name: 'description',
      label: 'Amenities Description',
      type: 'textEditor',
      placeholder: 'Enter the description',
    },
  ];

  return (
    <div className="space-y-6">
      <ContentManager
        apiBaseUrl="/stay/stay-amenities-title/"
        fields={contentFields}
        title="Stay Detail Page Amenities Title Management"
        singleEntry
      />
      <AmenitiesSecondSection />
    </div>
  );
};

export default AmenitiesFirstSection;