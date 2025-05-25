import React, { useState } from "react";
import Layout from "../Components/Layout";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaGlobe,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import ShinyText from "../Components/ShinyText";

const InputField = ({ label, name, type = "text", value, onChange, error }) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full h-12 rounded-lg border px-3 pt-4 pb-1 text-sm placeholder-transparent outline-none transition-all focus:border-[#31eddb] focus:ring-2 focus:ring-[#31eddb] ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label
      htmlFor={name}
      className={`absolute left-3 top-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[#31eddb] ${
        value ? "hidden" : ""
      }`}
    >
      {label}
    </label>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.event) newErrors.event = "Event type is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { name, email, phone, event, message } = formData;
    const text = `Hello, I'm ${name} (%0AEmail: ${email} %0APhone: ${phone}). I am interested in your "${event}" event service. %0AHere is my message: ${message}`;
    const whatsappURL = `https://wa.me/919119455139?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#31eddb] via-[#eeebed] to-[#dfe9f3] py-10 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <ShinyText
              text="Get In Touch"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
          <p className="text-black text-lg">
            Tailored packages for all kinds of events. Pick what fits you best
            or customize your own.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form on the LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <div className="relative">
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className={`peer w-full h-12 rounded-lg border px-3 pt-3 pb-1 text-sm outline-none ${
                      errors.event ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Concert">Concert</option>
                  </select>
                  <label className="absolute left-3 top-1 text-xs text-gray-700 peer-focus:text-[#31eddb]">
                    Event Type
                  </label>
                  {errors.event && (
                    <p className="mt-1 text-sm text-red-600">{errors.event}</p>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className={`peer w-full rounded-lg border px-3 pt-4 pb-1 text-sm outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  <label className="absolute left-3 top-1 text-xs text-gray-700 peer-focus:text-[#31eddb]">
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#31eddb] hover:bg-[#28b9ad] text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            {/* Contact Details on the RIGHT */}
            <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
              <div className="space-y-3">
                <p className="text-gray-600 text-lg max-w-md">
                  We're here to help you create unforgettable events.
                </p>
              </div>

              <div className="space-y-6 text-gray-700 text-base">
                {[
                  {
                    icon: FaPhoneAlt,
                    label: "Phone",
                    value: "+91 98765 43210",
                    bg: "bg-[#31eddb]",
                  },
                  {
                    icon: FaEnvelope,
                    label: "Email",
                    value: "hello@example.com",
                    bg: "bg-[#31eddb]",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: "Address",
                    value: "Margao, South Goa, India",
                    bg: "bg-[#31eddb]",
                  },
                  {
                    icon: FaInstagram,
                    label: "Instagram",
                    value: "@yourpage",
                    bg: "bg-pink-500",
                  },
                ].map(({ icon: Icon, label, value, bg }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className={`${bg} p-3 rounded-full text-white text-xl flex items-center justify-center shadow`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{label}</h4>
                      <p className="opacity-90">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex gap-8 text-2xl text-gray-500">
                {[
                  {
                    href: "https://yourwebsite.com",
                    icon: FaGlobe,
                    label: "Website",
                  },
                  {
                    href: "https://twitter.com/yourhandle",
                    icon: FaTwitter,
                    label: "Twitter",
                  },
                  {
                    href: "https://facebook.com/yourpage",
                    icon: FaFacebookF,
                    label: "Facebook",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="hover:text-[#31eddb] transition-colors duration-300 ease-in-out"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
