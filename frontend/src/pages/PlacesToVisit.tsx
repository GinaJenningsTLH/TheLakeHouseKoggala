import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import galleFort from '../assets/images/Galle-fort.png';
import mirissa from '../assets/images/Mirissa.png';
import unawatuna from '../assets/images/Unawatuna-Beach.png';
import yala from '../assets/images/Yala.png';
import ella from '../assets/images/Ella.png';
import heroImage from '../assets/images/Places-to-visit.png';

const PlacesToVisit: React.FC = () => {
  const places = [
    {
      name: 'Galle Fort',
      description: 'A 1-hour drive from Koggala, explore this iconic UNESCO World Heritage Site.',
      image: galleFort,
      route: '/blog/galle-fort',
      distance: '1 Hour Drive',
    },
    {
      name: 'Mirissa Beach',
      description: 'A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.',
      image: mirissa,
      route: '/blog/mirissa-beach',
      distance: '45 Minutes Drive',
    },
    {
      name: 'Unawatuna Beach',
      description: 'A 30-minute drive to a beautiful beach with turquoise waters and lively atmosphere.',
      image: unawatuna,
      route: '/blog/unawatuna-beach',
      distance: '30 Minutes Drive',
    },
    {
      name: 'Yala National Park',
      description: 'Experience wildlife and safari tours in one of Sri Lanka’s famous national parks.',
      image: yala,
      route: '/blog/yala-national-park',
      distance: '2.5 Hours Drive',
    },
    {
      name: 'Ella',
      description: 'A scenic town known for hikes, waterfalls, and Nine Arches Bridge. Perfect for a road trip.',
      image: ella,
      route: '/blog/ella',
      distance: '3.5 Hours Drive',
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
            Places to Visit Near Koggala
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            Explore the best destinations around Koggala.
          </motion.p>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="py-20 bg-lightestGreen">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-darkGreen mb-8">Nearby Places to Visit</h2>
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
