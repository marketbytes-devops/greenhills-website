import PropTypes from 'prop-types';
import { useModal } from '../../context/ModalProvider';

const Banner = ({ image, title, isButton = false }) => {
    const { setIsModalOpen } = useModal();
    return (
        <header
            className="w-full h-[450px] sm:h-[450px] lg:h-[550px] flex flex-col items-center justify-center"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "fill",
                objectPosition: "center center",
            }}
        >
            <div dangerouslySetInnerHTML={{ __html: title }} className="relative top-10 space-y-4 md:space-y-6 text-white text-center px-4" />
            {isButton && (
                <div className='mt-20'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-normal w-40 xl:w-40 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Book Now
                    </button>
                </div>
            )}
        </header>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isButton: PropTypes.bool, 
};

export default Banner;