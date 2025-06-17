import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainButton = ({
    label = '',
    className = '',
    onClick,
}) => {
    return (
        <button className={`group relative ${className}`} onClick={onClick}>
            <span className="relative text-sm lg:text-md font-medium z-20 flex items-center gap-2">
                {label}
                <div
                >
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="transition-all duration-300 -rotate-45 group-hover:rotate-0"
                    />
                </div>
            </span>
        </button>
    );
};

MainButton.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default MainButton;