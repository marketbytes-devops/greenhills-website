import PropTypes from 'prop-types';

const Banner = ({ image, title }) => {
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
        </header>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Banner;
