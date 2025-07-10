import ContentManager from "../../../../components/ContentManager";

const SecondSection = () => {
    const contentFields = [
        {
            name: 'image',
            label: 'Image',
            type: 'file',
            accept: 'image/png,image/jpeg,image/webp,image/gif',
            required: false,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter the title',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textEditor',
            placeholder: 'Enter the description',
        }
    ];

    return (
        <ContentManager
            apiBaseUrl="/about/about-section-three/"
            fields={contentFields}
            title="About Aneminities Section Management"
        />
    );
};

export default SecondSection;