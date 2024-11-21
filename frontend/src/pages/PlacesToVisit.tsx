import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/places-to-visit/Places-to-visit.png';
import galleFort from '../assets/images/places-to-visit/Galle-fort.png';
import mirissa from '../assets/images/places-to-visit/Mirissa.png';
import unawatuna from '../assets/images/places-to-visit/Unawatuna-Beach.png';
import yala from '../assets/images/places-to-visit/Yala.png';
import ella from '../assets/images/places-to-visit/Ella.png';
import sinharaja from '../assets/images/places-to-visit/sinharaja.jpg';

const PlacesToVisit: React.FC = () => {
  const places = [
    {
      name: 'Galle Fort',
      description: 'Explore the rich history and the stunning architecture of Galle Fort. This iconic UNESCO World Heritage Site is located just 20 minutes from The Lake House.',
      image: galleFort,
      route: '/blog/galle-fort',
      distance: '1 Hour Drive',
    },
    {
      name: 'Mirissa Beach',
      description: 'Swim in the crystal clear water, swing in a hammock or simply sink your feet in the warm soft sea sand and catch the golden sunset. Located just 20 minutes from The Lake House.',
      image: mirissa,
      route: '/blog/mirissa-beach',
      distance: '45 Minutes Drive',
    },
    {
      name: 'Unawatuna Beach',
      description: 'Known for seeing turtles close to the shore, this location has won multiple awards for Asia’s best surfing beach. Located just 30 minutes from The Lake House. ',
      image: unawatuna,
      route: '/blog/unawatuna-beach',
      distance: '30 Minutes Drive',
    },
    {
      name: 'Yala National Park',
      description: 'Did you know that Sri Lanka has the highest density of Elephants in Asia? Experience these majestic animals and more during a safari in one of Sri Lanka’s famous national parks.  ',
      image: yala,
      route: '/blog/yala-national-park',
      distance: '2.5 Hours Drive',
    },
    {
      name: 'Ella',
      description: 'Sri Lanka has over 430 waterfalls throughout the Island, making it one of the most waterfall rich countries in the world. The Ella region is dotted with waterfalls, hikes, the famous Nine Arch Bridge and variety of adventurous activities making it perfect for a road trip.',
      image: ella,
      route: '/blog/ella',
      distance: '3.5 Hours Drive',
    },
    {
      name: 'Sinharaja Rain Forest',
      description: 'Take a trip to this biodiverse rain forest which is listed as a  Biosphere Reserve and a World Heritage Site by UNESCO with almost all of Sri Lanka’s endemic birds and over 60% of the island’s endemic trees.  1 hour from The Lake House.',
      image: sinharaja,
      route: '/blog/sinharaja-rain-forest',
      distance: '2.5 Hours Drive',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Places to Visit Near Koggala Lake
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            Explore the best destinations around Koggala Lake.
          </motion.p>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-20 bg-lightestGreen">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-gray-500 mb-8">Nearby Places to Visit</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
            {places.map((place, index) => (
              <motion.div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                <a href={place.route}>
                  <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
                  <div className="p-6">
                    <h3 className="font-bold text-h3 mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-2">{place.description}</p>
                    <span className="text-darkGreen font-semibold">{place.distance}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PlacesToVisit;
