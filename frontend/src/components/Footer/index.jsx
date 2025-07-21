import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalProvider';
import SocialMedia from '../UiComponents/SocialMedia';
import { useEffect, useState } from 'react';
import { fetchAdditionalSettings } from '../../helpers/apiService';

const Footer = () => {
  const { setIsModalOpen } = useModal();
  const currentYear = new Date().getFullYear();
  const [settings, setSettings] = useState({
    description: 'Experience the rhythm of rain, trees, and quiet hills.',
    location: 'State Bank Road, Valparai, Tamil Nadu 642127',
    phone_one: '094434 09489',
    phone_two: '094434 85876',
    email: 'Greenhills@gmail.com',
  });

  useEffect(() => {
    const getSettings = async () => {
      try {
        const response = await fetchAdditionalSettings();
        const data = response.data[0];
        const cleanPhone = (phone) => (phone ? phone.replace(/[^\d\s+]/g, '') : '');
        setSettings({
          description: data.description || settings.description,
          location: data.location || settings.location,
          phone_one: cleanPhone(data.phone_one),
          phone_two: cleanPhone(data.phone_two),
          phone_three: cleanPhone(data.phone_three),
          email: data.email || settings.email,
        });
      } catch (error) {
        console.error('Error fetching additional settings:', error);
      }
    };
    getSettings();
  }, []);

  return (
    <footer className="bg-[#181818] py-8 md:py-12">
      <div className="container-secondary mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-100">Hotel Green Hills</h3>
            <p className="mt-2 text-gray-400 text-sm max-w-xs">
              {settings.description}
            </p>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {settings.location}
            </a>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12">
            <p className="flex items-start text-gray-400 text-sm">
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href={`tel:${settings.phone_one.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-gray-100 transition-colors duration-200">{settings.phone_one}</a>
                <a href={`tel:${settings.phone_two.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-gray-100 transition-colors duration-200 mt-2">{settings.phone_two}</a>
              </div>
            </p>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12 space-y-2">
            <a href={`tel:${settings.phone_three ? settings.phone_three.replace(/\s/g, '') : ''}`} className="flex items-center text-gray-400 text-sm hover:text-gray-100 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {settings.phone_three || ''}
            </a>

            <a href={`mailto:${settings.email}`} className="flex items-center text-gray-400 text-sm hover:text-gray-100 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="true" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {settings.email}
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start lg:justify-end relative top-0 md:top-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center space-x-2 bg-transparent border border-white text-sm sm:text-md text-white font-medium w-fit px-6 sm:px-8 h-10 sm:h-12 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
            >
              <span>Book Now</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} All Rights Reserved by Hotel Green Hills. </span><span className='block'>Made With Passion By <a href="https://www.marketbytes.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors duration-200">MarketBytes WebWorks Pvt Ltd.</a></span>
          </p>

          <SocialMedia />

          <div className="flex space-x-4">
            <Link to="/terms-and-conditions" className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;