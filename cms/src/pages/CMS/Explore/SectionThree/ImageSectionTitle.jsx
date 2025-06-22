import ContentManager from "../../../../components/ContentManager";
import ImageItems from "./ImageItems";

const ImageSectionTitle = () => {
    const contentFields = [
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
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/explore/explore-section-three-title/"
                fields={contentFields}
                title="Explore Section Three Title Management"
            />
            <ImageItems/>
        </div>
    );
};

export default ImageSectionTitle;