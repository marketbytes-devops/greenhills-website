import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";

const OpeningClosingTime = () => {
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
      name: 'opening_time',
      label: 'Opening Time',
      type: 'textEditor',
      placeholder: 'Enter the opening time',
    },
    {
      name: 'closing_time', 
      label: 'Closing Time',
      type: 'textEditor',
      placeholder: 'Enter the closing time',
    },
  ];

  return (
    <ContentManager
      apiBaseUrl="/eat/eat-time/"
      fields={contentFields}
      title="Eat Detail Page Time Management"
      singleEntry
    />
  );
};

export default OpeningClosingTime;