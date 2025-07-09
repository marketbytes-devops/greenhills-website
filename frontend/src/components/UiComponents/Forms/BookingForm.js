import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
import { submitBookingForm } from "../../../helpers/apiService";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      roomType: "",
      checkin: null,
      checkout: null,
      adults: "1",
      referer_url: document.referrer || "",
      submitted_url: window.location.href,
    },
  });

  const [roomTypes, setRoomTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState("");
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/stay/stay-page-create/`
        );
        if (!response.ok) throw new Error("Failed to fetch room types");
        const data = await response.json();
        const formattedRoomTypes = data.map((room) => ({
          value: room.link,
          label: room.title,
        }));
        setRoomTypes(formattedRoomTypes);
      } catch (error) {
        console.error("Error fetching room types:", error);
        setRoomTypes([
          { value: "standard", label: "Standard Room" },
          { value: "deluxe", label: "Deluxe Room" },
          { value: "suite", label: "Suite" },
        ]);
      }
    };

    fetchRoomTypes();
  }, []);

  const executeRecaptcha = async () => {
    if (recaptchaRef.current) {
      try {
        const token = await recaptchaRef.current.executeAsync();
        setRecaptchaValue(token);
        setRecaptchaError("");
        return token;
      } catch (error) {
        console.error("reCAPTCHA execution error:", error);
        setRecaptchaError("reCAPTCHA verification failed");
        return null;
      }
    }
    setRecaptchaError("reCAPTCHA verification failed");
    return null;
  };

  const onSubmit = async (data) => {
    setSuccessMessage("");
    setFormError("");
    setRecaptchaError("");

    if (!data.roomType) {
      setFormError("Please select a room type");
      return;
    }

    if (
      data.checkout &&
      data.checkin &&
      new Date(data.checkout) <= new Date(data.checkin)
    ) {
      setFormError("Check-out must be after check-in");
      return;
    }

    const token = await executeRecaptcha();
    if (!token) {
      setRecaptchaError("reCAPTCHA verification is required");
      return;
    }

    setIsSubmitting(true);
    try {
      const formattedData = {
        ...data,
        room_type: data.roomType,
        checkin: data.checkin ? data.checkin.toISOString().split("T")[0] : null,
        checkout: data.checkout
          ? data.checkout.toISOString().split("T")[0]
          : null,
        "g-recaptcha-response": token,
      };
      console.log("Submitting data:", formattedData);
      await submitBookingForm(formattedData);
      setSuccessMessage("Booking submitted successfully!");
      reset();
      setRecaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting booking:", error);
      setFormError(
        error.response?.data?.error ||
          "Failed to submit booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-auto mx-auto px-8 py-8 container-secondary bg-white shadow-lg rounded-xl">
      <style>
        {`
          .react-datepicker-wrapper {
            width: 100%;
          }
          .react-datepicker__input-container input {
            width: 100%;
            padding: 10px 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            background-color: #fff;
            line-height: 1.25rem;
            color: #111827;
          }
          .react-datepicker__input-container input:focus {
            outline: none;
            border-color: #d1d5db;
            box-shadow: 0 0 0 2px #000000;
          }
          .react-datepicker__input-container input::placeholder {
            color: #4b5563;
          }
          .react-datepicker__input-container input.border-red-500 {
            border-color: #ef4444;
          }
          select {
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 1em;
          }
        `}
      </style>
      {successMessage && (
        <p className="text-green-500 text-sm mb-4 text-center" role="alert">
          {successMessage}
        </p>
      )}
      {formError && (
        <p className="text-red-500 text-sm mb-4 text-center" role="alert">
          {formError}
        </p>
      )}
      {recaptchaError && (
        <p className="text-red-500 text-sm mb-4 text-center" role="alert">
          {recaptchaError}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Full name is required" })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack placeholder:text-gray-600 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Mobile
            </label>
            <input
              id="mobile"
              type="number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Enter a valid mobile number",
                },
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack placeholder:text-gray-600 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter Mobile Number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="roomType"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Room Type
            </label>
            <select
              id="roomType"
              {...register("roomType", { required: "Room type is required" })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack text-gray-900 ${
                errors.roomType ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select room type
              </option>
              {roomTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roomType.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Check-in
            </label>
            <Controller
              name="checkin"
              control={control}
              rules={{ required: "Check-in date is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={new Date()}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select check-in date"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack placeholder:text-gray-600 ${
                    errors.checkin ? "border-red-500" : "border-gray-300"
                  }`}
                  wrapperClassName="w-full"
                />
              )}
            />
            {errors.checkin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.checkin.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Check-out
            </label>
            <Controller
              name="checkout"
              control={control}
              rules={{ required: "Check-out date is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  minDate={watch("checkin") || new Date()}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select check-out date"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack placeholder:text-gray-600 ${
                    errors.checkout ? "border-red-500" : "border-gray-300"
                  }`}
                  wrapperClassName="w-full"
                />
              )}
            />
            {errors.checkout && (
              <p className="text-red-500 text-sm mt-1">
                {errors.checkout.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Adults
            </label>
            <select
              id="adults"
              {...register("adults", {
                required: "Number of adults is required",
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondaryLightBlack text-gray-900 ${
                errors.adults ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select number of adults
              </option>
              {[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
              ].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.adults && (
              <p className="text-red-500 text-sm mt-1">
                {errors.adults.message}
              </p>
            )}
          </div>
        </div>
        <input type="hidden" {...register("referer_url")} />
        <input type="hidden" {...register("submitted_url")} />
        {import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
            size="invisible"
            onChange={setRecaptchaValue}
            aria-describedby={recaptchaError ? "recaptcha-error" : undefined}
          />
        ) : (
          <p className="text-red-500 text-sm mt-1">
            reCAPTCHA configuration is missing. Please contact support.
          </p>
        )}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex group items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-normal w-32 xl:w-36 h-10 xl:h-12 rounded-full hover:bg-primary hover:text-white transition-all duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Book Now"}
          </button>
        </div>
      </form>
    </div>
  );
}
