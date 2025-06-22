import ContentManager from "../../../../components/ContentManager";

const BlogContent = () => {
    const contentFields = [
        {
            name: "image",
            label: "Image",
            type: "file",
            accept: "image/png,image/jpeg,image/webp,image/gif",
            required: true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter the title',
        },
        {
            name: 'date',
            label: 'Date',
            type: 'date',
            placeholder: 'Enter the date',
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
            apiBaseUrl="/home/home-blog-items/"
            fields={contentFields}
            name="Home Blog Section Management"
        />
    );
};

export default BlogContent;