import ContentManager from "../../../../components/ContentManager";
import ContentSection from "./ContentSection";

const EatListing = () => {
    const contentFields = [
        {
            name: 'image',
            label: 'Image (For best performance, use WEBP images under 800KB.)',
            type: 'file',
            accept: 'image/png,image/jpeg,image/webp,image/gif',
            required: true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter the title',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textEditor',
            placeholder: 'Enter the description',
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
            placeholder: 'Enter the link',
        }
    ];

    return (
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/home/home-eat-section-listing/"
                fields={contentFields}
                title="Home Eat Section Title Management"
            />
            <ContentSection />
        </div>
    );
};

export default EatListing;