import { useState, useEffect } from 'react';
import ContentManager from "../../../../components/ContentManager";
import apiClient from "../../../../helpers/apiClient";
import GatherHighlightsSection from './GatherHighlightsSection';

const GatherHighlightsTitle = () => {
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
            name: 'title',
            label: 'Highlights Title',
            type: 'textEditor',
            placeholder: 'Enter the title',
        },
        {
            name: 'description',
            label: 'Highlights Description',
            type: 'textEditor',
            placeholder: 'Enter the description',
        }
    ];

    return (
        <div>
        <ContentManager
            apiBaseUrl="/gather/gather-highlights-title/"
            fields={contentFields}
            title="Gather Detail Page Highlights Title Management"
            singleEntry
        />
        <GatherHighlightsSection/>
        </div>
    );
};

export default GatherHighlightsTitle;