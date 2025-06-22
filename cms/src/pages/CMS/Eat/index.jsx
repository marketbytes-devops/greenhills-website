import { useState } from 'react';
import Hero from './Hero';
import CreatePage from './CreatePage';
import OpeningClosingTime from './OpeningClosingTime';
import MenuFirstSection from './MenuListings/MenuFirstSection';
import AmenitiesFirstSection from './EatAmenities/AmenitiesFirstSection';
import MenuTabCreate from './MenuTab/MenuTabCreate';
import ExploreSection from './ExploreSection';

const Eat = () => {
    const [activeTab, setActiveTab] = useState('eat-banner');

    const tabs = [
        { id: 'eat-create-page', label: 'Create Detailed Page', content: <CreatePage /> },
        { id: 'eat-banner', label: 'Detailed Page Header Section', content: <Hero /> },
        { id: 'eat-time', label: 'Detailed Page Time Section', content: <OpeningClosingTime /> },
        { id: 'eat-menu-listings-second', label: 'Detailed Page Menu Tab Section', content: <MenuTabCreate /> },
        { id: 'eat-menu-listings-first', label: 'Detailed Page Our Menu Section', content: <MenuFirstSection /> },
        { id: 'eat-amenities', label: 'Detailed Page Amenities Section', content: <AmenitiesFirstSection /> },
        { id: 'eat-explore', label: 'Detailed Page Explore Section', content: <ExploreSection /> },
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

export default Eat;