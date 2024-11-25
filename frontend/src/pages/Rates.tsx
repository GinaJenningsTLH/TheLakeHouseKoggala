import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import BookingForm from '../components/BookingForm';
import ratesHero from '../assets/images/GalleryMain/villa-front-view-2.jpg';

const Rates: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96 text-white" style={{ backgroundImage: `url(${ratesHero})` }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Our Rates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            Transparent pricing for your perfect stay
          </motion.p>
        </div>
      </section>

      {/* Rates Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* General Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-gray-700 mb-4">
                Prices are quoted for the rent of the whole villa. If you require only a room, please contact us directly for a quote. We offer competitive rates for all seasons.
                
              </p>
              <p className="text-gray-700">
                All food and drinks at the house are charged ONLY at cost of the ingredients which is vastly cheaper than hotels and most other villas which charge a menu price.
              </p>
            </motion.div>

            {/* Season Rates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* High Season */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-500 mb-4">High Season</h3>
                <p className="text-gray-700 mb-2">15th December 2024 to 06th January 2025</p>
                <p className="text-gray-700 text-i mb-2">Minimum stay 1 week</p>
                <p className="text-gray-700">$1500 per day*</p>
               
              </motion.div>

              {/* Mid Season */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-500 mb-4">Mid Season</h3>
                <p className="text-gray-700 mb-2">6 January to 30 April 2025</p>
                <p className="text-gray-700 mb-2">15 June to 15 November 2025</p>
                <p className="text-gray-700 mb-2">Minimum stay 3 nights</p>
                <p className="text-gray-700">$660 per day</p>
              </motion.div>

              {/* Low Season */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-500 mb-4">Low Season</h3>
                <p className="text-gray-700 mb-2">1 October to 15 December 2024</p>
                <p className="text-gray-700 mb-2">1 May 2025 to 15 June 2025</p>
                <p className="text-gray-700 mb-2">Minimum stay 3 nights</p>
                <p className="text-gray-700">$500 per night</p>
              </motion.div>


           
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=""
              >
                
                <p className="text-md text-gray-700 italic">Prices may vary depending on number of people etc.</p>
                <p className="text-md text-gray-700 italic">All prices are based in USD rates and are subject to change without notice.</p>
               
              </motion.div>

            {/* Additional Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Additional Information</h3>
              <div className="space-y-4 text-gray-700">
                <p>50% of the total payment is required at the time of booking - payment to be made by bank transfer and any bank charges to be borne by the guest; reservations are confirmed upon receipt of the deposit.</p>
                <p>The balance of the payment must be paid in full by bank transfer no later than one calendar month before the first night of the stay.</p>
                <p>During the Christmas and New Year period, payment in full will be required 2 months before the first night of the stay and will only be refunded where the accommodation can be re-let.</p>
                <p>Check-in time is normally 3 pm, check-out 11am. Different arrangements can, however, be made if other bookings allow it and to suit flights etc.</p>
              </div>
            </motion.div>

            {/* Reservations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Make a Reservation</h3>
              <p className="text-gray-700 mb-6">Making a reservation couldn't be easier. Contact us through any of these methods:</p>
              <p>Submit an inquiry</p>
              <BookingForm />
              <p className='text-gray-700 pt-4'>Or contact us directly</p>
              <div className="pt-2 grid grid-cols-3 items-center">
                <p className="text-gray-700 grid grid-rows-2">UK: <a href="tel:+447710634540" className="text-gray-800 hover:underline">+44 7710 634540</a> <span className='text-sm italic'> (bookings from UK)</span> </p>
                <p className="text-gray-700 grid grid-rows-2">Sri Lanka: <a href="tel:+94776197728" className="text-gray-800 hover:underline">+94 776 197728</a> <span className='text-sm italic'> (bookings from Sri Lanka)</span> </p>
                <p className="text-gray-700 grid grid-rows-2">Email: <a href="mailto:ginajennings10@gmail.com" className="text-gray-800 hover:underline">ginajennings10@gmail.com</a> <span className='text-sm italic'> (general enquiries)</span> </p>
              </div>
            </motion.div>

           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rates; 