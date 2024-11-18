// BookingForm.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to API)
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-500 mb-4">Thank You!</h3>
          <p>Your booking request has been received. We'll get back to you shortly.</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]"
            />
          </div>
          <div className="mb-4 md:flex md:space-x-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <label htmlFor="checkIn" className="block text-gray-700 mb-2">
                Check-In
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]"
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="checkOut" className="block text-gray-700 mb-2">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="guests" className="block text-gray-700 mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-lightGreen transition-colors duration-300">
            Submit Inquiry
          </button>
        </>
      )}
    </motion.form>
  );
};

export default BookingForm;
