import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// TypeScript: Define form data types
interface ContactFormData {
  name: string;
  email: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  nights: number;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    nights: 1,
    message: '',
  });

  const checkOutRef = useRef<DatePicker>(null);

  const handleCheckInChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      checkIn: date,
      checkOut: date ? prevData.checkOut : null,
    }));
    if (date) {
      checkOutRef.current?.setFocus();
    }
  };

  const handleCheckOutChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      checkOut: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-80 text-white" style={{ backgroundImage: 'url("/contact-hero.jpg")' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            Have questions or want to learn more about staying with us? Get in touch and let us know how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <p className="text-gray-700 text-lg">
              Located on the serene shores of Koggala Lake, our property offers an idyllic retreat away from the hustle and bustle of daily life. Whether you're looking for a relaxing weekend getaway, planning a family vacation, or arranging a special event, our dedicated team is here to assist you. For more information about our rooms, amenities, or booking process, don't hesitate to reach out. We are always eager to hear from our guests and answer any questions you may have.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-12'>
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="w-full md:w-2/3 bg-white shadow-md p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-darkGreen text-center mb-8">Get in Touch</h2>
              <div className="mb-6">
                <label htmlFor="name" className="block text-darkGreen font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-darkGreen font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-6 flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="checkIn" className="block text-darkGreen font-semibold mb-2">Check-In</label>
                  <DatePicker
                    selected={formData.checkIn || undefined}
                    onChange={handleCheckInChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                    placeholderText="Select Date"
                    dateFormat="dd/MM/yyyy"
                    selectsStart
                    startDate={formData.checkIn || undefined}
                    endDate={formData.checkOut || undefined}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="checkOut" className="block text-darkGreen font-semibold mb-2">Check-Out</label>
                  <DatePicker
                    selected={formData.checkOut || undefined}
                    onChange={handleCheckOutChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                    placeholderText="Select Date"
                    dateFormat="dd/MM/yyyy"
                    selectsEnd
                    startDate={formData.checkIn || undefined}
                    endDate={formData.checkOut || undefined}
                    minDate={formData.checkIn || undefined}
                    ref={checkOutRef}
                  />
                </div>
              </div>
              <div className="mb-6 flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="guests" className="block text-darkGreen font-semibold mb-2">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: +e.target.value })}
                    min={1}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="nights" className="block text-darkGreen font-semibold mb-2">Number of Nights</label>
                  <input
                    type="number"
                    id="nights"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen"
                    value={formData.nights}
                    onChange={(e) => setFormData({ ...formData, nights: +e.target.value })}
                    min={1}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-darkGreen hover:bg-lightGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>

            {/* Contact Details */}
            <div className="w-full md:w-1/3 flex flex-col  justify-center items-start bg-white shadow-md p-8 items-center space-y-20 rounded-lg">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className='border w-80 px-10 bg-yellow-100/50 items-center  justify-center shadow-md border-none rounded flex py-4'>
                <FaPhoneAlt className="text-3xl mt-auto text-darkGreen mr-4" />
                <div >
                  <h3 className="text-xl text-red-3 font-semibold">Call Us</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >

<div className='border w-80 px-10 bg-yellow-100/50 shadow-md items-center  justify-center border-none rounded flex py-4'>
                <FaEnvelope className="text-3xl mt-auto text-darkGreen mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-gray-600">info@lakehouse.com</p>
                </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <div className='border w-80 px-10 bg-yellow-100/50  items-center  justify-center shadow-md border-none rounded flex py-4'>
                <FaWhatsapp className="text-3xl mt-auto text-darkGreen mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                  <p className="text-gray-600"><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
                </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-darkGreen text-center mb-8">Our Location</h2>
            <div className="h-64 bg-gray-200 rounded-lg text-center flex items-center justify-center">
              <p>Map will be integrated here.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
