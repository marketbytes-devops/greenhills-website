import ContentManager from "../../../../components/ContentManager";

const GalleryImages = () => {
    const contentFields = [
        {
            name: 'image',
            label: 'Banner Image',
            type: 'file',
            accept: 'image/png,image/jpeg,image/webp,image/gif',
            required: false,
        },
    ];

    return (
        <ContentManager
            apiBaseUrl="/gallery/gallery-images/"
            fields={contentFields}
            title="Gallery Images Management"
        />
    );
};

export default GalleryImages;