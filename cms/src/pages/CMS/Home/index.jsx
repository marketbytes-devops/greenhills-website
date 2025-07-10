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
    { id: 'home-services', label: 'Amenities Section', content: <Services /> },
    { id: 'home-about-section', label: 'Gallery Section', content: <TitleSection /> },
    { id: 'home-rating', label: 'Stands Out Section', content: <RatingSection /> },
    { id: 'home-rooms', label: 'Stay Listing Section', content: <Title /> },
    { id: 'home-explore', label: 'Highlights Section', content: <ExploreSection /> },
    { id: 'home-eat-section', label: 'Eat Listing Section', content: <EatListing /> },
    { id: 'home-gather-section', label: 'Gather Listing Section', content: <GatherListing /> },
    { id: 'home-team-section', label: 'Testimonial Section', content: <TeamTitle /> },
    { id: 'home-blog-section', label: 'Blog Highlights Title Section', content: <BlogTitle /> },
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