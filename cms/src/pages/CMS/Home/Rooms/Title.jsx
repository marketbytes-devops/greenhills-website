import ContentManager from "../../../../components/ContentManager";
import Rooms from "./Rooms";

const Title = () => {
    const contentFields = [
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
            label: 'See More Link',
            type: 'text',
            placeholder: 'Enter the link',
        },
    ];

    return (
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/home/home-rooms-title/"
                fields={contentFields}
                title="Home Stay Listing Title Management"
                singleEntry
            />
            <Rooms />
        </div>
    );
};

export default Title;