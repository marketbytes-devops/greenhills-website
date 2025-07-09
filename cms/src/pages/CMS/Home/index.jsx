import { useState } from 'react';
import Hero from './Hero';
import Services from './Services';
import TitleSection from './AboutSection/TitleSection';
import RatingSection from './Rating/RatingSection';
import ExploreSection from './ExploreSection';
import Title from './Rooms/Title';
import EatListing from './EatSection/EatListing';
import GatherListing from './GatherSection/GatherListing';
import TeamTitle from './Team/TeamTitle';
import BlogTitle from './BlogSection/BlogTitle';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home-banner');

  const tabs = [
    { id: 'home-banner', label: 'Header', content: <Hero /> },
    { id: 'home-services', label: 'Amenities', content: <Services /> },
    { id: 'home-about-section', label: 'About Section', content: <TitleSection /> },
    { id: 'home-rating', label: 'Rating', content: <RatingSection /> },
    { id: 'home-rooms', label: 'Rooms Section', content: <Title /> },
    { id: 'home-explore', label: 'Explore Section', content: <ExploreSection /> },
    { id: 'home-eat-section', label: 'Eat Section', content: <EatListing /> },
    { id: 'home-gather-section', label: 'Gather Section', content: <GatherListing /> },
    { id: 'home-team-section', label: 'Team Section', content: <TeamTitle /> },
    { id: 'home-blog-section', label: 'Blog Section', content: <BlogTitle /> },
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

export default Home;