import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const BookNowButton = ({ onClick, className, icon }) => {
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <button
      onClick={onClick}
      className={`flex group items-center justify-center space-x-2 font-normal px-8 h-12 rounded-full transition-all duration-300 ${className}`}
    >
      <span>Book Now</span>
      <motion.div variants={iconVariants} initial="initial" whileHover="hover">
        <FontAwesomeIcon
          icon={icon}
          className="-rotate-45 group-hover:rotate-0 transition-all duration-300"
        />
      </motion.div>
    </button>
  );
};

export default BookNowButton;