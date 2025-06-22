import { useState, useEffect } from "react";
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";
import TabMenuItems from "./TabMenuItems";

const MenuTabCreate = () => {
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
      name: 'tab_name',
      label: 'Tab Name',
      type: 'text',
      placeholder: 'Enter the tab name',
    },
    {
      name: 'order',
      label: 'Order',
      type: 'number',
      placeholder: 'Enter display order',
      min: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <ContentManager
        apiBaseUrl="/eat/eat-menu-tab-create/"
        fields={contentFields}
        title="Eat Detail Page Menu Tab Create"
      />
      <TabMenuItems/>
    </div>
  );
};

export default MenuTabCreate;