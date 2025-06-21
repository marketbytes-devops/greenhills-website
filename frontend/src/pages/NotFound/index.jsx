import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/not-found.webp';

const NotFound = () => {
    return (
        <div
            className="h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bgImg})`
            }}
        >
            <div className="text-center">
                <p className='text-white text-4xl font-normal pb-10'>PAGE ERROR</p>
                <h1 className="text-white text-7xl font-normal pb-4">404</h1>
                <p className="text-white text-lg font-light pb-2">Page not found</p>
                <p className="text-white text-sm font-light">We're sorry, something is not working here!</p>
                <div className="pt-6">
                    <Link
                        to="/"
                        className="px-6 py-2 rounded-full transition-all duration-300 inline-block bg-secondaryBlack text-white hover:bg-primary"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;