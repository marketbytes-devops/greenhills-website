import ContentManager from "../../components/ContentManager";

const SMM = () => {
    const contentFields = [
        {
            name: 'facebook',
            label: 'Facebook',
            type: 'text',
            placeholder: 'Enter the facebook url',
        },
        {
            name: 'whatsapp',
            label: 'Whatsapp',
            type: 'number',
            placeholder: 'Enter the whatsapp url',
        },
        {
            name: 'youtube',
            label: 'Youtube',
            type: 'text',
            placeholder: 'Enter the youtube url',
        },
        {
            name: 'instagram',
            label: 'Instagram',
            type: 'text',
            placeholder: 'Enter the instagram url',
        },
        {
            name: 'twitter',
            label: 'Twitter',
            type: 'text',
            placeholder: 'Enter the twitter url',
        },

    ];

    return (
        <ContentManager
            apiBaseUrl="/social-media/social-media-links/"
            fields={contentFields}
            facebook="Social Media Management"
            singleEntry
        />
    );
};

export default SMM;