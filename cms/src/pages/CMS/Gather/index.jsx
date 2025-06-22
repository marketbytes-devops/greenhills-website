import { useState } from 'react';
import Hero from './Hero';
import CreatePage from './CreatePage';
import GatherServices from './GatherServices';
import AmenitiesFirstSection from './GatherAmenities/AmenitiesFirstSection';
import GatherHighlightsTitle from './GatherHighlights/GatherHighlightsTitle';
import GatherExplore from './GatherExplore';

const Gather = () => {
    const [activeTab, setActiveTab] = useState('gather-banner');

    const tabs = [
        { id: 'gather-create-page', label: 'Create Detailed Page', content: <CreatePage /> },
        { id: 'gather-banner', label: 'Detailed Page Header Section', content: <Hero /> },
        { id: 'gather-highlights', label: 'Detailed Page Highlights Section', content: <GatherHighlightsTitle /> },
        { id: 'gather-services', label: 'Detailed Page Services Section', content: <GatherServices /> },
        { id: 'gather-amenities', label: 'Detailed Page Amenities Section', content: <AmenitiesFirstSection /> },
        { id: 'gather-explore', label: 'Detailed Page Explore Section', content: <GatherExplore /> },
    ];

    return (
        <div className="mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                            ? 'bg-indigo-400 text-white'
                            : 'bg-gray-500 text-white'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-6">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default Gather;