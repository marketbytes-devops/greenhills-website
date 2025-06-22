import { useState } from 'react';
import Hero from './Hero';
import GalleryImages from './GalleryImages';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('gallery-banner');

  const tabs = [
    { id: 'gallery-banner', label: 'Header', content: <Hero /> },
    { id: 'gallery-images', label: 'Gallery Images', content: <GalleryImages /> },
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

export default Gallery;