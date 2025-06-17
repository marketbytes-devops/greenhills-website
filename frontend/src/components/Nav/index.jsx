import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/gh-logo.webp';

const Nav = () => {
  const [stayOpen, setStayOpen] = useState(false);
  const [eatOpen, setEatOpen] = useState(false);
  const [gatherOpen, setGatherOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', to: '/', basePath: '/' },
    { name: 'About Us', to: '/about', basePath: '/about' },
    {
      name: 'Stay',
      to: '/stay',
      basePath: '/stay',
      dropdown: [
        { name: 'Deluxe Double Bedroom', to: '/stay/deluxe-double' },
        { name: 'Super Deluxe Room', to: '/stay/super-deluxe' },
        { name: 'Standard Double Room', to: '/stay/standard-double' },
      ],
    },
    {
      name: 'Eat',
      to: '/eat',
      basePath: '/eat',
      dropdown: [
        { name: 'Menu', to: '/eat/menu' },
        { name: 'Bar', to: '/eat/bar' },
      ],
    },
    {
      name: 'Gather',
      to: '/gather',
      basePath: '/gather',
      dropdown: [
        { name: 'Ooty', to: '/gather/ooty' },
        { name: 'Valparai', to: '/gather/valparai' },
      ],
    },
    { name: 'Blogs', to: '/blogs', basePath: '/blogs' },
    { name: 'Explore', to: '/explore', basePath: '/explore' },
    { name: 'Gallery', to: '/gallery', basePath: '/gallery' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const caretVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const toggleDropdown = (linkName) => {
    if (linkName === 'Stay') setStayOpen(!stayOpen);
    if (linkName === 'Eat') setEatOpen(!eatOpen);
    if (linkName === 'Gather') setGatherOpen(!gatherOpen);
  };

  const navBgClass = isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md';
  const linkColorClass = isHomePage && !isScrolled ? 'text-white' : 'text-black';
  const hoverColorClass = 'hover:text-[#2b6843]';
  const mobileIconColorClass = isHomePage && !isScrolled ? 'text-white' : 'text-black';
  const buttonBorderClass = isHomePage && !isScrolled ? 'border-white' : 'border-black';
  const buttonHoverBgClass = 'hover:bg-[#2b6843] hover:text-white hover:border-[#2b6843]';

  return (
    <nav className={`z-50 fixed top-0 w-full transition-all duration-300 ${navBgClass}`}>
      <div className="container-secondary mx-auto flex items-center justify-between py-2">
        <NavLink to="/" end>
          <img src={logo} alt="Greenhills Logo" className="w-auto h-auto" />
        </NavLink>
        <button
          className={`lg:hidden ${mobileIconColorClass} focus:outline-none`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>
        <ul className="hidden lg:flex space-x-6 xl:space-x-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                if (link.name === 'Stay') setStayOpen(true);
                if (link.name === 'Eat') setEatOpen(true);
                if (link.name === 'Gather') setGatherOpen(true);
              }}
              onMouseLeave={() => {
                if (link.name === 'Stay') setStayOpen(false);
                if (link.name === 'Eat') setEatOpen(false);
                if (link.name === 'Gather') setGatherOpen(false);
              }}
            >
              {link.dropdown ? (
                <>
                  <NavLink
                    to={link.to}
                    style={({ isActive }) => ({
                      color: isActive ? '#2b6843' : linkColorClass === 'text-white' ? 'white' : 'black',
                    })}
                    className={`flex items-center space-x-2 text-sm font-semibold ${hoverColorClass}`}
                    onClick={() => toggleDropdown(link.name)}
                  >
                    <span>{link.name}</span>
                    <motion.div
                      variants={caretVariants}
                      animate={
                        (link.name === 'Stay' && stayOpen) ||
                        (link.name === 'Eat' && eatOpen) ||
                        (link.name === 'Gather' && gatherOpen)
                          ? 'open'
                          : 'closed'
                      }
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </motion.div>
                  </NavLink>
                  <AnimatePresence>
                    {(link.name === 'Stay' && stayOpen) ||
                    (link.name === 'Eat' && eatOpen) ||
                    (link.name === 'Gather' && gatherOpen) ? (
                      <motion.ul
                        className="absolute bg-[#2b6843] shadow-lg rounded-md mt-1 w-60 z-10"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {link.dropdown.map((item, index) => (
                          <li key={item.name}>
                            <NavLink
                              to={item.to}
                              style={({ isActive }) => ({
                                backgroundColor: isActive ? '#1a3c2b' : 'transparent',
                                color: 'white',
                              })}
                              className={`block px-4 py-2 text-sm hover:bg-[#1a3c2b] ${
                                index === 0 ? 'rounded-t-md' : ''
                              } ${index === link.dropdown.length - 1 ? 'rounded-b-md' : ''}`}
                              end
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </>
              ) : (
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? '#2b6843' : linkColorClass === 'text-white' ? 'white' : 'black',
                  })}
                  className={`text-sm font-semibold ${hoverColorClass}`}
                  end
                >
                  {link.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <NavLink
          to="/book"
          className={`hidden lg:flex group items-center justify-center space-x-2 bg-transparent border ${buttonBorderClass} ${buttonHoverBgClass} text-md ${linkColorClass} font-semibold w-32 xl:w-36 h-12 xl:h-12 rounded-full transition-all duration-300`}
        >
          <span>Book Now</span>
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="-rotate-45 group-hover:rotate-45 transition-all duration-300"
            />
          </motion.div>
        </NavLink>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ul className="flex flex-col items-start p-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    {link.dropdown ? (
                      <>
                        <button
                          className={`flex items-center justify-between w-full text-sm text-black ${hoverColorClass} font-medium py-2`}
                          onClick={() => toggleDropdown(link.name)}
                        >
                          <span>{link.name}</span>
                          <motion.div
                            variants={caretVariants}
                            animate={
                              (link.name === 'Stay' && stayOpen) ||
                              (link.name === 'Eat' && eatOpen) ||
                              (link.name === 'Gather' && gatherOpen)
                                ? 'open'
                                : 'closed'
                            }
                          >
                            <FontAwesomeIcon icon={faCaretDown} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {(link.name === 'Stay' && stayOpen) ||
                          (link.name === 'Eat' && eatOpen) ||
                          (link.name === 'Gather' && gatherOpen) ? (
                            <motion.ul
                              className="pl-4 space-y-2"
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {link.dropdown.map((item) => (
                                <li key={item.name}>
                                  <NavLink
                                    to={item.to}
                                    style={({ isActive }) => ({
                                      color: isActive ? '#2b6843' : 'black',
                                    })}
                                    className={`block text-sm ${hoverColorClass} font-medium py-2`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    end
                                  >
                                    {item.name}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          ) : null}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.to}
                        style={({ isActive }) => ({
                          color: isActive ? '#2b6843' : 'black',
                        })}
                        className={`block text-sm ${hoverColorClass} font-medium py-2`}
                        onClick={() => setMobileMenuOpen(false)}
                        end
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li className="w-full">
                  <NavLink
                    to="/book"
                    style={({ isActive }) => ({
                      color: isActive ? '#2b6843' : linkColorClass === 'text-white' ? 'white' : 'black',
                      borderColor: isActive ? '#2b6843' : buttonBorderClass === 'border-white' ? 'white' : 'black',
                    })}
                    className={`flex items-center justify-center space-x-2 bg-transparent ${buttonBorderClass} ${buttonHoverBgClass} text-sm font-medium w-full h-12 rounded-full transition-all duration-300`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Book Now</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
                    />
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
