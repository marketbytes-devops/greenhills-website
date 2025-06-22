import ContentManager from "../../../../components/ContentManager";

const Rooms = () => {
    const contentFields = [
        {
            name: 'index',
            label: 'Index Number',
            type: 'textEditor',
            placeholder: 'Enter index number',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
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
        <ContentManager
            apiBaseUrl="/home/home-rooms/"
            fields={contentFields}
            title="Home Rooms Management"
        />
    );
};

export default Rooms;