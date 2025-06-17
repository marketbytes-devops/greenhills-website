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
        }
    ];

    return (
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/home/home-rooms-title/"
                fields={contentFields}
                title="Home Rooms Title Management"
                singleEntry
            />
            <Rooms />
        </div>
    );
};

export default Title;