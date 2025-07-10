import ContentManager from "../../../../components/ContentManager";

const BlogTitle = () => {
    const contentFields = [
        {
            name: "title",
            label: "Title",
            type: "textEditor",
            placeholder: "Enter the title",
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "textEditor",
            placeholder: "Enter the description",
        },
    ];

    return (
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/home/home-blog-title/"
                fields={contentFields}
                title="Home Blog Highlights Section Title Management"
                singleEntry
            />
        </div>
    );
};

export default BlogTitle;