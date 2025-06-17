import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#181818] py-8 md:py-12">
      <div className="container-secondary mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-100">Green Hills</h3>
            <p className="mt-2 text-gray-400 text-sm max-w-xs">
              Webinar event for mental training and personal development for young people
            </p>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12">
            <p className="flex items-start text-gray-400 text-sm">
              <svg className="w-5 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              State Bank Road, Valparai, Tamil Nadu 642127
            </p>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12">
            <p className="flex items-start text-gray-400 text-sm">
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <span className="block">094434 09589</span>
                <span className="block">094434 85876</span>
              </div>
            </p>
          </div>

          <div className="flex flex-col items-start relative top-0 md:top-12">
            <p className="flex items-center text-gray-400 text-sm">
              <svg className="w-4 h-4 mr-2 border border-gray-400 p-0.5 rounded-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Greenhills@gmail.com
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-start lg:justify-end relative top-0 md:top-8">
            <Link
              to="/book-now"
              className="flex items-center justify-center space-x-2 bg-transparent border border-white text-sm sm:text-md text-white font-medium w-fit px-6 sm:px-8 h-10 sm:h-12 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              <span>Book Now</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 MarketBytes. All rights reserved</p>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 rounded-full border border-gray-400 p-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 rounded-full border border-gray-400 p-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 rounded-full border border-gray-400 p-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c-.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.196-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 rounded-full border border-gray-400 p-0.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>

          <div className="flex space-x-4">
            <Link to="/terms-conditions" className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;