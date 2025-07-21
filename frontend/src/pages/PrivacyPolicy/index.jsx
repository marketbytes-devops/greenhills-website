import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { fetchPrivacyPolicy } from '../../helpers/apiService';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchPrivacyPolicy()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].content) {
          setContent(data[0].content);
        } else {
          setContent('<p>No content available.</p>');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching privacy policy:', err);
        setError('Failed to load privacy policy.');
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Hotel Green Hills Valparai</title>
        <meta
          name="description"
          content="Read the privacy policy of Hotel Green Hills Valparai to understand how we collect, use, and protect your personal data and booking information."
        />
        <meta name="keywords" content="privacy policy, Hotel Green Hills, Valparai hotel, data protection, booking privacy" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/privacy-policy" />
      </Helmet>
      <div className="container-secondary mx-auto mt-32 sm:mt-32 lg:mt-40 mb-8 sm:mb-8 lg:mb-16">
        <h1 className="text-center text-secondaryBlack mb-8">Privacy Policy</h1>
        {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div
            className="privacy-policy-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        <style jsx>{`
        .privacy-policy-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .privacy-policy-content ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .privacy-policy-content li {
          margin-bottom: 0.5rem;
        }
      `}</style>
      </div>
    </>
  );
};

export default PrivacyPolicy;