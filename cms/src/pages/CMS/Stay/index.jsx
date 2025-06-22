import { useState } from 'react';
import Hero from './Hero';
import CreatePage from './CreatePage';
import StayHighlights from './StayHighlights';
import StayExplore from './StayExplore';
import RoomsFirstSection from './StayRooms/RoomsFirstSection';
import AmenitiesFirstSection from './StayAmenities/AmenitiesFirstSection';
import StayGallery from './StayGallery';

const Stay = () => {
  const [activeTab, setActiveTab] = useState('stay-banner');

  const tabs = [
    { id: 'stay-rooms', label: 'Stay Rooms Listings', content: <RoomsFirstSection /> },
    { id: 'stay-create-page', label: 'Create Detailed Page', content: <CreatePage /> },
    { id: 'stay-banner', label: 'Detailed Page Header Section', content: <Hero /> },
    { id: 'stay-highlights', label: 'Detailed Page Highlights Section', content: <StayHighlights /> },
    { id: 'stay-amenities', label: 'Detailed Page Amenities Section', content: <AmenitiesFirstSection /> },
    { id: 'stay-explore', label: 'Detailed Page Explore Section', content: <StayExplore /> },
    { id: 'stay-gallery', label: 'Detailed Page Gallery Section', content: <StayGallery /> },
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

export default Stay;