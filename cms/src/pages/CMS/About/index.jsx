import { useState } from 'react';
import Hero from './Hero';
import SectionTwo from './SectionTwo';
import FirstSection from './SectionThree/FirstSection';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import TitleSection from '../Home/AboutSection/TitleSection';


const About = () => {
  const [activeTab, setActiveTab] = useState('about-banner');

  const tabs = [
    { id: 'about-banner', label: 'Header ', content: <Hero /> },
    { id: 'about-section-two', label: 'Highlights Section', content: <SectionTwo /> },
    { id: 'about-section-three', label: 'Amenities Section', content: <FirstSection /> },
    { id: 'about-section-four', label: 'Second Highlight Section', content: <SectionFour /> },
    { id: 'about-section-explore', label: 'Gallery Section', content: <TitleSection /> },
    { id: 'about-section-five', label: 'Explore Section', content: <SectionFive /> },
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

export default About;