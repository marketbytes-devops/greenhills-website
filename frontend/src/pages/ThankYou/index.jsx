import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/thank-you.webp';

const ThankYou = () => {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bgImg})`
      }}
    >
      <div className="text-center">
        <h1 className="text-white text-4xl font-normal">Thanks for submitting!</h1>
        <p className="text-white text-md font-light mt-2">Your message has been sent!</p>
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

export default ThankYou;