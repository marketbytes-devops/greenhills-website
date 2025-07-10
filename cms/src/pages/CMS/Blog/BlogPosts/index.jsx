import ContentManager from "../../../../components/ContentManager";

const BlogPosts = () => {
    const contentFields = [
        {
            name: 'image',
            label: 'Blog Image (For best performance, use WEBP images under 800KB.)',
            type: 'file',
            accept: 'image/png,image/jpeg,image/webp,image/gif',
            required: false,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter blog title',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textEditor',
            placeholder: 'Enter blog description',
        },
        {
            name: 'title_detailed_page',
            label: 'Detailed Page Blog Title',
            type: 'textEditor',
            placeholder: 'Enter blog title',
        },
        {
            name: 'content',
            label: 'Detailed Page Blog Contents',
            type: 'textEditor',
            placeholder: 'Enter blog contents',
        },
        {
            name: 'link',
            label: 'Blog Slug (Go to Detail Page)',
            type: 'text',
            placeholder: 'Enter blog detail page link',
        }
    ];

    return (
        <ContentManager
            apiBaseUrl="/blog/blog-posts/"
            fields={contentFields}
            title="Blog Posts Management"
        />
    );
};

export default BlogPosts;