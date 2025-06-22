import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp, LayoutDashboard, User, Settings, FolderDot, MessageCircleMore, MessageSquareShare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/img-logo.png';

const Sidebar = ({ toggleSidebar }) => {
  const location = useLocation();
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  useEffect(() => {
    const cmsPaths = [
      '/cms/home', '/cms/about', '/cms/stay', '/cms/eat', '/cms/gather',
      '/cms/blog', '/cms/explore', '/cms/gallery', '/cms/terms-and-conditions', '/cms/privacy-policy'
    ];
    if (cmsPaths.includes(location.pathname)) {
      setIsCMSOpen(true);
    }
  }, [location.pathname]);

  const toggleCMS = () => {
    setIsCMSOpen(!isCMSOpen);
  };

  const menuItems = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5 mr-3" /> },
    {
      label: 'CMS',
      icon: <FolderDot className="w-5 h-5 mr-3" />,
      subItems: [
        { to: '/cms/home', label: 'Home' },
        { to: '/cms/about', label: 'About' },
        { to: '/cms/stay', label: 'Stay' },
        { to: '/cms/eat', label: 'Eat' },
        { to: '/cms/gather', label: 'Gather' },
        { to: '/cms/blog', label: 'Blog' },
        { to: '/cms/explore', label: 'Explore' },
        { to: '/cms/gallery', label: 'Gallery' },
        { to: '/cms/terms-and-conditions', label: 'Terms and Conditions' },
        { to: '/cms/privacy-policy', label: 'Privacy Policy' },
      ],
    },
    { to: '/enquiry-management', label: 'Enquiry Management', icon: <MessageCircleMore className="w-5 h-5 mr-3" /> },
    { to: '/social-media-management', label: 'Social Media Management', icon: <MessageSquareShare className="w-5 h-5 mr-3" /> },
    { to: '/profile', label: 'Profile', icon: <User className="w-5 h-5 mr-3" /> },
    { to: '/settings', label: 'Additional Settings', icon: <Settings className="w-5 h-5 mr-3" /> },
  ];

  return (
    <motion.div
      className="fixed top-0 left-0 w-72 h-screen bg-gray-50 shadow-lg flex flex-col"
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      role="navigation"
      aria-label="Main sidebar navigation"
    >
      <div className="mb-6 flex items-center justify-center">
        <motion.img
          src={logo}
          className="w-24"
          alt="Prime Logo"
          aria-label="Prime Logo"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </div>
      <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <>
                  <button
                    onClick={toggleCMS}
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-expanded={isCMSOpen}
                    aria-controls={`cms-submenu-${index}`}
                    aria-label={`Toggle ${item.label} menu`}
                  >
                    <span className="flex items-center text-sm font-medium">
                      {item.icon}
                      {item.label}
                    </span>
                    {isCMSOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-indigo-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-indigo-700" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isCMSOpen && item.subItems && (
                      <div className='h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200'>
                        <motion.ul
                          id={`cms-submenu-${index}`}
                          className="pl-4 mt-2 space-y-1"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={subItem.to}
                                className={({ isActive }) =>
                                  `block p-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive
                                    ? 'bg-indigo-500 text-white'
                                    : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-700'
                                  }`
                                }
                                onClick={toggleSidebar}
                                aria-current={location.pathname === subItem.to ? 'page' : undefined}
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      </div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive
                      ? 'bg-indigo-500 text-white'
                      : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                    }`
                  }
                  onClick={toggleSidebar}
                  aria-current={location.pathname === item.to ? 'page' : undefined}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;