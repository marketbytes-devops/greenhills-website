import ContentManager from "../../../../components/ContentManager";

const ImageItems = () => {
    const contentFields = [
        {
            name: 'image',
            label: 'Banner Image (For best performance, use WEBP images under 800KB.)',
            type: 'file',
            accept: 'image/png,image/jpeg,image/webp,image/gif',
            required: false,
        },
    ];

    return (
        <ContentManager
            apiBaseUrl="/explore/explore-section-three/"
            fields={contentFields}
            title="Explore Images Management"
        />
    );
};

export default ImageItems;