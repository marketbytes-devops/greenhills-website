// import ContentManager from "../../../../components/ContentManager";
import SecondSection from "./SecondSection";

const FirstSection = () => {
    // const contentFields = [
    //     {
    //         name: 'title',
    //         label: 'Title',
    //         type: 'textEditor',
    //         placeholder: 'Enter the title',
    //     },
    //     {
    //         name: 'description',
    //         label: 'Description',
    //         type: 'textEditor',
    //         placeholder: 'Enter the description',
    //     }
    // ];

    return (
        <div className="">
            {/* <ContentManager
                apiBaseUrl="/about/about-section-three-title/"
                fields={contentFields}
                title="About Section Three Title Management"
                singleEntry
            /> */}
            <SecondSection/>
        </div>
    );
};

export default FirstSection;