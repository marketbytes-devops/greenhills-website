import { useState, useEffect } from "react";
import { fetchAboutSectionFive } from "../../../helpers/apiService";

const SectionFive = () => {
    const [sectionFiveData, setSectionFiveData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAboutSectionFive()
            .then((response) => {
                setSectionFiveData(response.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!sectionFiveData || sectionFiveData.length === 0) return <div></div>;

    const data = sectionFiveData[0];

    return (
        <div
            className="w-full h-[450px] md:h-[550px] bg-gradient-to-r from-white/80 to-black/50 relative flex items-center"
            style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="container-secondary mx-auto w-full md:w-1/2 px-0 md:px-0 space-y-4 md:space-y-6">
                <div dangerouslySetInnerHTML={{ __html: data.title }} />
                <div className="max-w-lg md:max-w-4xl" dangerouslySetInnerHTML={{ __html: data.description }} />
                <div className="pt-2">
                    <button
                        className="flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-normal w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionFive;