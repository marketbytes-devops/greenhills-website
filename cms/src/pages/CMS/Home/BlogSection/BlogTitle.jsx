import ContentManager from "../../../../components/ContentManager";
import BlogContent from "./BlogContent";

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
                title="Home Blog Section Title Management"
                singleEntry
            />
            <BlogContent />
        </div>
    );
};

export default BlogTitle;