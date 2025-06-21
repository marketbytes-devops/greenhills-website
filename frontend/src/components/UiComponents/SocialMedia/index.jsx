import { faFacebookF, faWhatsapp, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { fetchSocialMediaLinks } from '../../../helpers/apiService';

const SocialMedia = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '#',
    whatsapp: '#',
    youtube: '#',
    instagram: '#',
    twitter: '#'
  });

  useEffect(() => {
    const getSocialLinks = async () => {
      try {
        const response = await fetchSocialMediaLinks();
        const data = response.data[0]; 
        setSocialLinks({
          facebook: data.facebook,
          whatsapp: `https://wa.me/${data.whatsapp}`,
          youtube: data.youtube,
          instagram: data.instagram,
          twitter: data.twitter
        });
      } catch (error) {
        console.error('Error fetching social media links:', error);
      }
    };
    getSocialLinks();
  }, []);

  return (
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 rounded-full border border-gray-400 p-2" />
      </a>
      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 rounded-full border border-gray-400 p-2" />
      </a>
      <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
        <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 rounded-full border border-gray-400 p-2" />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 rounded-full border border-gray-400 p-2" />
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 rounded-full border border-gray-400 p-2" />
      </a>
    </div>
  );
};

export default SocialMedia;