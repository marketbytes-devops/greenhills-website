import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { fetchTermsConditions } from '../../helpers/apiService';

const TermsConditions = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchTermsConditions()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].content) {
          setContent(data[0].content);
        } else {
          setContent('<p>No content available.</p>');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching terms and conditions:', err);
        setError('Failed to load terms and conditions.');
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container-secondary mx-auto mt-32 sm:mt-32 lg:mt-40 mb-8 sm:mb-8 lg:mb-16">
      <Helmet>
        <title>Terms and Conditions | Hotel Green Hills Valparai</title>
        <meta
          name="description"
          content="Review the terms and conditions of staying, booking, and using services at Hotel Green Hills Valparai. Includes cancellation and check-in policies."
        />
        <meta name="keywords" content="terms and conditions, Hotel Green Hills Valparai, booking policies, cancellation policies, check-in policies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/terms-and-conditions-hotel-green-hills" />
      </Helmet>
      <h1 className="text-center text-secondaryBlack mb-8">Terms and Conditions</h1>
      {isLoading ? (
        <div className="text-center text-gray-500"></div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div
          className="terms-conditions-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      <style jsx>{`
        .terms-conditions-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .terms-conditions-content ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .terms-conditions-content li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default TermsConditions;