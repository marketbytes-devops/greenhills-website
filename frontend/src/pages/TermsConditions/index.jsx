import { useState, useEffect } from 'react';
import { fetchTermsConditions } from '../../helpers/apiService';

const TermsConditions = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchTermsConditions().then((data) => {
      if (data.length > 0 && data[0].content) {
        setContent(data[0].content);
      }
    });
  }, []);

  return (
    <div className="container-secondary mx-auto mt-32 sm:mt-32 lg:mt-40 mb-8 sm:mb-8 lg:mb-16">
      <h1 className="text-center text-secondaryBlack mb-8">Terms and Conditions</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TermsConditions;