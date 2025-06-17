import PropTypes from 'prop-types';

const Banner = ({ image, title }) => {
    return (
        <header
            className="w-full h-[450px] sm:h-[450px] lg:h-[550px] flex flex-col items-center justify-center"
            style={{
                background: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
        >
            <div dangerouslySetInnerHTML={{ __html: title }} className="relative top-10 text-white text-center px-4" />
        </header>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Banner;
