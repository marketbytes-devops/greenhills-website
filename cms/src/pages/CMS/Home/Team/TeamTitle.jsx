import ContentManager from "../../../../components/ContentManager";
import TeamSection from "./TeamSection";

const TeamTitle = () => {
    const contentFields = [
        {
            name: 'title',
            label: 'Title',
            type: 'textEditor',
            placeholder: 'Enter the title',
        }
    ];

    return (
        <div className="space-y-6">
            <ContentManager
                apiBaseUrl="/home/home-team-title/"
                fields={contentFields}
                title="Home Testimonial Section Title Management"
                singleEntry
            />
            <TeamSection />
        </div>
    );
};

export default TeamTitle;