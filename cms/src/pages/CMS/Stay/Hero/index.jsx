import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const Hero = () => {
  const [coursePageData, setCoursePageData] = useState([]);

  useEffect(() => {
    apiClient
      .get('/stay/stay-page-create/')
      .then((response) => {
        const data = response.data.map((item) => ({
          value: item.id,
          label: item.title || 'Page Title',
        }));
        setCoursePageData(data);
      })
      .catch((err) => console.error('Error fetching pages:', err));
  }, []);

  const contentFields = [
    {
      name: 'stay_page_create',
      label: 'Select Page',
      type: 'select',
      options: coursePageData,
      required: true,
    },
    {
      name: 'image',
      label: 'Banner Image',
      type: 'file',
      accept: 'image/png,image/jpeg,image/webp,image/gif',
      required: false,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'textEditor',
      placeholder: 'Enter banner title',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textEditor',
      placeholder: 'Enter banner description',
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/stay/stay-banner/"
      fields={contentFields}
      title="Stay Detail Page Banner Management"
      singleEntry
    />
  );
};

export default Hero;