import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import contactHero from '../assets/images/GalleryMain/jetty-with-lake-view.webp'; // Importing the hero image
// import GoogleMap from '../components/GoogleMap';
import BookingForm from '../components/BookingForm';


const Contact: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96  text-white" style={{ backgroundImage: `url(${contactHero})` }}>
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
            {/* Replace the old form with BookingForm component */}
            <div className="w-full md:w-2/3 bg-white shadow-md p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-500 text-center mb-8">Book Your Stay</h2>
              <BookingForm />
            </div>

            {/* Contact Details */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-start bg-white shadow-md p-8 items-center space-y-20 rounded-lg">
              {/* Phone Contact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className='border w-80 px-10 bg-gray-100 items-center justify-center shadow-md border-none rounded flex py-4'>
                  <FaPhoneAlt className="text-3xl mt-auto text-gray-500 mr-4" />
                  <div >
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="text-gray-600"><a href="tel:+447710634540" className="hover:text-gray-800 transition-colors duration-300">
        44 771 063 4540
      </a></p>
                  </div>
                </div>
              </motion.div>
              {/* Email Contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className='border w-80 px-10 bg-gray-100 shadow-md items-center justify-center border-none rounded flex py-4'>
                  <FaEnvelope className="text-3xl mt-auto text-gray-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-gray-600">ginajennings10@gmail.com</p>
                  </div>
                </div>
              </motion.div>
              {/* WhatsApp Contact */}
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <div className='border w-80 px-10 bg-gray-100 items-center justify-center shadow-md border-none rounded flex py-4'>
                  <FaWhatsapp className="text-3xl mt-auto text-gray-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">WhatsApp</h3>
                    <p className="text-gray-600"><a href="https://wa.me/447710634540" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-500 text-center mb-8">Our Location</h2>
            <div className="h-full rounded-lg overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.783205795744!2d80.312204815394!3d6.002180799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16db2b0386177%3A0x1f3ec99294ca599d!2sThe%20Lake%20House!5e0!3m2!1sen!2suk!4v1739902894092!5m2!1sen!2suk"
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Lake House Location"
              />
            {/* <img src={map} alt="map" className='w-full h-full'></img> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
