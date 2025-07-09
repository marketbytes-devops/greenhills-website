import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitContactForm } from '../../../helpers/apiService';
import bgGetInTouch from '../../../assets/images/back.webp';

const GetInTouch = ({ className = '' }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      referer_url: document.referrer || '',
      submitted_url: window.location.href,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [formError, setFormError] = useState('');
  const recaptchaRef = useRef(null);
  const navigate = useNavigate(); 

  const executeRecaptcha = async () => {
    if (recaptchaRef.current) {
      try {
        const token = await recaptchaRef.current.executeAsync();
        setRecaptchaValue(token);
        setRecaptchaError('');
        return token;
      } catch (error) {
        console.error('reCAPTCHA execution error:', error);
        setRecaptchaError('reCAPTCHA verification failed');
        return null;
      }
    }
    setRecaptchaError('reCAPTCHA verification failed');
    return null;
  };

  const onSubmit = async (data) => {
    setFormError('');
    setSuccessMessage('');
    setRecaptchaError('');

    const token = await executeRecaptcha();
    if (!token) {
      setRecaptchaError('reCAPTCHA verification is required');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm({
        ...data,
        'g-recaptcha-response': token,
      });
      setSuccessMessage('Form submitted successfully! Check your email for confirmation.');
      reset();
      setRecaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      navigate('/thank-you'); 
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError(error.response?.data?.error || 'Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  }, []);

  return (
    <section
      className={`bg-cover bg-center py-12 ${className}`}
      style={{ backgroundImage: `url(${bgGetInTouch})` }}
      aria-labelledby="get-in-touch-title"
    >
      <div className="container-secondary mx-auto">
        <div className="bg-[#181818] focus:border-none p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 id="get-in-touch-title" className="text-3xl font-bold text-gray-100 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-6">
              We’d love to hear from you! Whether you have questions, need assistance, or want to book your next stay, our team is here to help. Fill out the form below, and we’ll get back to you promptly.
            </p>
          </div>

          {successMessage && (
            <p className="text-green-500 text-sm mt-1 text-center" role="alert">
              {successMessage}
            </p>
          )}
          {formError && (
            <p id="form-error" className="text-red-500 text-sm mt-1" role="alert">
              {formError}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email format',
                    },
                  })}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^\d{10,15}$/,
                      message: 'Enter a valid phone number',
                    },
                  })}
                  placeholder="Enter your phone"
                  className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                placeholder="Enter your message"
                rows="4"
                className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
            <input type="hidden" {...register('referer_url')} />
            <input type="hidden" {...register('submitted_url')} />
            {import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY ? (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                size="invisible"
                onChange={setRecaptchaValue}
                aria-describedby={recaptchaError ? 'recaptcha-error' : undefined}
              />
            ) : (
              <p className="text-red-500 text-sm mt-1">reCAPTCHA configuration is missing. Please contact support.</p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group flex items-center justify-center bg-white text-md text-[#181818] font-medium w-60 py-2 hover:bg-primary hover:text-gray-200 transition-all duration-300 rounded-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

GetInTouch.propTypes = {
  className: PropTypes.string,
};

export default GetInTouch;