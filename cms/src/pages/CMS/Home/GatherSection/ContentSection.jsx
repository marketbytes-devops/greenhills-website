import ContentManager from "../../../../components/ContentManager";

const ContentSection = () => {
    const contentFields = [
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter banner title',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textEditor',
            placeholder: 'Enter banner description',
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
            placeholder: 'Enter the link',
        }
    ];

    return (
        <ContentManager
            apiBaseUrl="/home/home-gather-section-content/"
            fields={contentFields}
            title="Home Gather Content Section Management"
            singleEntry
        />
    );
};

export default ContentSection;