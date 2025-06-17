import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitContactForm } from '../../../helpers/apiService';
import bgGetInTouch from "../../../assets/images/back.png";

const GetInTouch = ({ className = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!recaptchaValue) newErrors.recaptcha = 'reCAPTCHA verification failed';
        return newErrors;
    };

    const executeRecaptcha = async () => {
        if (recaptchaRef.current) {
            try {
                const token = await recaptchaRef.current.executeAsync();
                setRecaptchaValue(token);
                return token;
            } catch (error) {
                console.error('reCAPTCHA execution error:', error);
                setErrors((prev) => ({ ...prev, recaptcha: 'reCAPTCHA verification failed' }));
                return null;
            }
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');

        // Execute reCAPTCHA v3
        const token = await executeRecaptcha();
        if (!token) {
            setErrors({ recaptcha: 'reCAPTCHA verification failed' });
            return;
        }

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await submitContactForm({
                ...formData,
                'g-recaptcha-response': recaptchaValue,
            });
            setSuccessMessage('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setRecaptchaValue(null);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ form: error.response?.data?.message || 'Failed to submit form. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        // Ensure reCAPTCHA is ready for execution
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
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                        </p>
                    </div>

                    {successMessage && (
                        <p className="text-green-500 text-sm mb-4 text-center" role="alert">
                            {successMessage}
                        </p>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && (
                                    <p id="name-error" className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && (
                                    <p id="email-error" className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone"
                                    className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                                />
                                {errors.phone && (
                                    <p id="phone-error" className="text-red-500 text-sm mt-1">
                                        {errors.phone}
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
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                rows="4"
                                className={`w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary bg-[#181818] focus:border-none placeholder:text-sm placeholder:text-gray-400 text-gray-400 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            ></textarea>
                            {errors.message && (
                                <p id="message-error" className="text-red-500 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
                            size="invisible"
                            onChange={setRecaptchaValue}
                            aria-describedby={errors.recaptcha ? 'recaptcha-error' : undefined}
                        />
                        {errors.recaptcha && (
                            <p id="recaptcha-error" className="text-red-500 text-sm mb-4 text-center" role="alert">
                                {errors.recaptcha}
                            </p>
                        )}
                        {errors.form && (
                            <p className="text-red-500 text-sm mb-4 text-center" role="alert">
                                {errors.form}
                            </p>
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