import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCaretDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/gh-logo.webp';
import { fetchStayPages, fetchEatPages, fetchGatherPages } from '../../helpers/apiService';
import BookNowButton from '../UiComponents/BookNowButton';
import Modal from '../Modal';
import BookingFormModal from '../UiComponents/Forms/BookingFormModal';
import { useModal } from '../../context/ModalProvider';

const Nav = () => {
  const [stayOpen, setStayOpen] = useState(false);
  const [eatOpen, setEatOpen] = useState(false);
  const [gatherOpen, setGatherOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stayPages, setStayPages] = useState([]);
  const [eatPages, setEatPages] = useState([]);
  const [gatherPages, setGatherPages] = useState([]);
  const { isModalOpen, setIsModalOpen } = useModal();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (location.pathname === '/book') {
      setIsModalOpen(true);
      navigate(location.state?.from || '/', { replace: true });
    }
  }, [location.pathname, navigate, setIsModalOpen]);

  useEffect(() => {
    fetchStayPages()
      .then((response) => setStayPages(response.data))
      .catch((err) => console.error('Error fetching stay pages:', err));

    fetchEatPages()
      .then((response) => setEatPages(response.data))
      .catch((err) => console.error('Error fetching eat pages:', err));

    fetchGatherPages()
      .then((response) => setGatherPages(response.data))
      .catch((err) => console.error('Error fetching gather pages:', err));

    const handleScroll = () => setIsScrolled(window.scrollY > 100);

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
      basePath: '/stay',
      dropdown: stayPages.map((page) => ({
        name: page.title,
        to: `/stay/${page.link}`,
      })),
    },
    {
      name: 'Eat',
      basePath: '/eat',
      dropdown: eatPages.map((page) => ({
        name: page.title,
        to: `/eat/${page.link}`,
      })),
    },
    {
      name: 'Gather',
      basePath: '/gather',
      dropdown: gatherPages.map((page) => ({
        name: page.title,
        to: `/gather/${page.link}`,
      })),
    },
    { name: 'Blogs', to: '/blogs', basePath: '/blogs', hasChildRoutes: true },
    { name: 'Explore', to: '/explore', basePath: '/explore' },
    { name: 'Gallery', to: '/gallery', basePath: '/gallery' },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.3, ease: 'easeOut', type: 'spring', stiffness: 120 },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: -10,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { ease: 'linear' } },
  };

  const caretVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const toggleDropdown = (linkName) => {
    if (linkName === 'Stay') setStayOpen(!stayOpen);
    if (linkName === 'Eat') setEatOpen(!eatOpen);
    if (linkName === 'Gather') setGatherOpen(!gatherOpen);
  };

  const navBgClass = 'bg-white shadow-md';
  const linkColorClass = 'text-black';
  const hoverColorClass = 'hover:text-[#2b6843]';
  const mobileIconColorClass = 'text-black';
  const buttonBorderClass = 'border-black';
  const buttonHoverBgClass = 'hover:bg-[#2b6843] hover:text-white hover:border-[#2b6853]';

  return (
    <>
      <nav className={`z-50 fixed top-0 w-full transition-all duration-100 ${navBgClass}`}>
        <div className="container-secondary mx-auto flex items-center justify-between py-2">
          <NavLink to="/" end>
            <img src={logo} alt="Logo" className="w-auto h-auto" />
          </NavLink>
          <ul className="hidden lg:flex flex-grow justify-center space-x-6 xl:space-x-10 items-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.name === 'Stay') setStayOpen(true);
                  else if (link.name === 'Eat') setEatOpen(true);
                  else if (link.name === 'Gather') setGatherOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.name === 'Stay') setStayOpen(false);
                  else if (link.name === 'Eat') setEatOpen(false);
                  else if (link.name === 'Gather') setGatherOpen(false);
                }}
              >
                {link.dropdown ? (
                  <>
                    <button
                      style={{
                        color: location.pathname.startsWith(link.basePath)
                          ? '#2b6843'
                          : linkColorClass === 'text-white'
                            ? 'white'
                            : 'black',
                      }}
                      className={`flex items-center space-x-2 text-sm font-normal hover:font-medium ${hoverColorClass}`}
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
                                className={`block px-4 py-2 text-sm hover:bg-[#1a3c2b] ${index === 0 ? 'rounded-t-md' : ''
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
                      color:
                        isActive || (link.hasChildRoutes && location.pathname.startsWith(link.basePath))
                          ? '#2b6843'
                          : linkColorClass === 'text-white'
                            ? 'white'
                            : 'black',
                    })}
                    className={`text-sm font-normal hover:font-medium ${hoverColorClass}`}
                    end
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`hidden lg:flex group items-center justify-center space-x-2 bg-transparent border ${buttonBorderClass} ${buttonHoverBgClass} text-md ${linkColorClass} font-normal w-32 xl:w-36 h-12 xl:h-12 rounded-full transition-all duration-300`}
            >
              <span>Book Now</span>
              <motion.div variants={iconVariants} initial="initial" whileHover="hover">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
                />
              </motion.div>
            </button>
            <button
              className={`lg:hidden ${mobileIconColorClass} focus:outline-none`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className='text-secondaryBlack' size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                          className={`flex items-center justify-between w-full text-sm ${location.pathname.startsWith(link.basePath)
                              ? 'text-[#2b6843]'
                              : 'text-black'
                            } ${hoverColorClass} font-normal py-2`}
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
                                    className={`block text-sm ${hoverColorClass} font-normal py-2`}
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
                          color:
                            isActive || (link.hasChildRoutes && location.pathname.startsWith(link.basePath))
                              ? '#2b6843'
                              : 'black',
                        })}
                        className={`block text-sm ${hoverColorClass} font-normal py-2`}
                        onClick={() => setMobileMenuOpen(false)}
                        end
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
                <li className="w-full border-t border-secondaryBlack md:border-none pt-4 md:pt-0">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-2 bg-secondaryBlack md:bg-transparent ${buttonBorderClass} ${buttonHoverBgClass} text-sm text-white md:text-secondaryBlack font-normal w-full h-12 rounded-full transition-all duration-300`}
                  >
                    <span>Book Now</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
                    />
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="z-50 fixed top-1/2 -right-[60px] transform -rotate-90 -translate-y-1/2">
        <BookNowButton
          onClick={() => setIsModalOpen(true)}
          className="bg-secondaryBlack hover:bg-[#2b6843] hover:border-[#2b6843] text-md text-white rounded-none"
          icon={faArrowRight}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingFormModal />
      </Modal>
    </>
  );
};

export default Nav;