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

// Reusable InputField component
const InputField = ({ label, name, type = "text", value, onChange, error }) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder=" " // keep this blank space for peer-* CSS to work
      className={`peer w-full h-12 rounded-lg border px-3 pt-4 pb-1 text-sm placeholder-transparent outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    <label
      htmlFor={name}
      className={`absolute left-3 top-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600 ${
        value ? "hidden" : ""
      }`}
    >
      {label}
    </label>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
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
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 border border-gray-100">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <p className="text-gray-500 text-base">
                  We're here to help you create unforgettable events.
                </p>
              </div>

              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-blue-600 mt-1" />
                  <div>
                    <span className="font-medium">Phone</span>
                    <br />
                    +91 98765 43210
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-blue-600 mt-1" />
                  <div>
                    <span className="font-medium">Email</span>
                    <br />
                    hello@example.com
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 mt-1" />
                  <div>
                    <span className="font-medium">Address</span>
                    <br />
                    Margao, South Goa, India
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaInstagram className="text-pink-500 mt-1" />
                  <div>
                    <span className="font-medium">Instagram</span>
                    <br />
                    @yourpage
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex gap-6 text-xl text-gray-600">
                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Website"
                  className="hover:text-blue-600 transition"
                >
                  <FaGlobe />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-blue-700 transition"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Contact Form */}
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
                  <label className="absolute left-3 top-1 text-xs text-gray-500 peer-focus:text-blue-600">
                    Event Type
                  </label>
                  {errors.event && (
                    <p className="mt-1 text-sm text-red-500">{errors.event}</p>
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
                  <label className="absolute left-3 top-1 text-xs text-gray-500 peer-focus:text-blue-600">
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19822.5849110418!2d-0.1285909524894658!3d51.50336413121351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760351e5c0d1bf%3A0x96e81c7aa7c81a07!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1638478193273!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
