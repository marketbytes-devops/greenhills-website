import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp, LayoutDashboard, User, Settings, FolderDot, Home, MessageSquareMore, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/images/img-logo.png";

const Sidebar = ({ toggleSidebar }) => {
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  const toggleCMS = () => {
    setIsCMSOpen(!isCMSOpen);
  };

  const menuItems = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4 inline-block mr-2" /> },
    {
      label: 'CMS',
      icon: <FolderDot className="w-4 h-4 inline-block mr-2" />,
      subItems: [
        { to: '/cms/home', label: 'Home' },
        { to: '/cms/about', label: 'About' },
        { to: '/cms/blog', label: 'Blog' },
        { to: '/cms/contact', label: 'Contact' },
      ],
    },
    { to: '/profile', label: 'Profile', icon: <User className="w-4 h-4 inline-block mr-2" /> },
    { to: '/settings', label: 'Settings', icon: <Settings className="w-4 h-4 inline-block mr-2" /> },
  ];

  return (
    <motion.div
      className="flex flex-col h-full p-4 bg-gray-100 shadow"
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.1 }}
    >
      <div className="mt-2 mb-6 flex items-center justify-center text-center">
        <img src={logo} className="w-20" alt="Prime" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <>
                  <button
                    onClick={toggleCMS}
                    className="group flex items-center justify-between w-full p-2 rounded text-gray-800 transition-colors duration-300 hover:bg-indigo-500 hover:text-gray-100"
                  >
                    <span className="flex items-center">
                      {item.icon}
                      {item.label}
                    </span>
                    {isCMSOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-800 group-hover:text-gray-100" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-800 group-hover:text-gray-100" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isCMSOpen && item.subItems && (
                      <motion.ul
                        className="pl-4 mt-2 space-y-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.1 }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.to}
                              className={({ isActive }) =>
                                `block p-2 rounded transition-colors duration-300 group ${isActive
                                  ? 'bg-indigo-500 text-gray-100'
                                  : 'text-gray-800 hover:bg-indigo-500 hover:text-gray-100'
                                }`
                              }
                              onClick={toggleSidebar}
                            >
                              <span className="flex items-center">
                                {subItem.icon}
                                {subItem.label}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block p-2 rounded transition-colors duration-300 group ${isActive ? 'bg-indigo-500 text-gray-100' : 'text-gray-800 hover:bg-indigo-500 hover:text-gray-100'
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.label}
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;