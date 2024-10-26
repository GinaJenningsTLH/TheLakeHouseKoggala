import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import diningHero from '../assets/images/room1.jpg';
import freshIcon from '../assets/images/Fresh.svg';
import noFrozenIcon from '../assets/images/No-Frozen.svg';
import desireIcon from '../assets/images/desire.svg';
import freshIngIcon from '../assets/images/Fresh-Ing.svg';
import preparedIcon from '../assets/images/prepared.svg';
import servedIcon from '../assets/images/served.svg';
import bbq1 from '../assets/images/room1.jpg';
import bbq2 from '../assets/images/room1.jpg';
import bbq3 from '../assets/images/room1.jpg';
import vitaminIcon from '../assets/images/room1.jpg';
import tasteIcon from '../assets/images/room1.jpg';
import textureIcon from '../assets/images/room1.jpg';

const Dining: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96 text-white"
        style={{ backgroundImage: `url(${diningHero})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Savor Every Moment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            Only Fresh Ingredients, No Frozen Food
          </motion.p>
        </div>
      </section>

      {/* Fresh vs Frozen Food Infographic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-darkGreen mb-8"
          >
            Only Fresh Food, No Frozen Food
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="infographic-card"
            >
              <img src={freshIcon} className="mx-auto" alt="Fresh Food" />
              <h3 className="text-2xl font-bold mt-4">Fresh Food</h3>
              <p>100% fresh, locally sourced ingredients for every dish.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="infographic-card"
            >
              <img src={noFrozenIcon} className="mx-auto" alt="Frozen Food" />
              <h3 className="text-2xl font-bold mt-4">Frozen Food</h3>
              <p>We don’t use frozen food at all, ensuring maximum flavor and nutrients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm-to-Table Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-darkGreen mb-8"
          >
            How is Dining at The Lake House?
          </motion.h2>
          <p className="mb-8">
            At Lake House Villa, guests have the freedom to order anything they desire. Whether you choose from our carefully crafted Lake House menu or have something else in mind, the choice is yours! Just inform our chef a few hours in advance, and he will arrange for fresh produce to be delivered quickly, ensuring your culinary wishes are fulfilled.
          </p>
          <div className="flex items-center justify-center gap-12">
            {[desireIcon, freshIngIcon, preparedIcon, servedIcon].map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mx-auto rounded-full w-fit border bg-white mb-4">
                  <img className="mx-auto my-3 p-4" src={imgSrc} alt={`Step ${index + 1}`} />
                </div>
                <h4 className="text-xl font-semibold">{["Order Anything You Desire", "Delivered Fresh to Us", "Prepared to Perfection", "Served Fresh"][index]}</h4>
                <p>{[
                  "Guests can order from our menu or request anything they desire.",
                  "Ingredients are sourced daily from local farms and delivered fresh.",
                  "Our in-house chefs prepare each dish to perfection using fresh ingredients.",
                  "Every meal is served fresh, ensuring unmatched taste and quality."
                ][index]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BBQ Section with Images in Row */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Private Barbecues by the Lake
          </motion.h2>
          <p className="text-lg mb-8">For a truly unforgettable dining experience, guests can arrange for a private BBQ by the lake...</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[bbq1, bbq2, bbq3].map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={imgSrc} alt={`BBQ Dish ${index + 1}`} className="rounded-lg shadow-lg w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Benefits Infographic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-darkGreen mb-8"
          >
            Nutritional Benefits of Fresh Food
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {[vitaminIcon, tasteIcon, textureIcon].map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="infographic"
              >
                <img src={imgSrc} alt={`Benefit ${index + 1}`} />
                <h4 className="text-xl font-semibold">{["Higher Vitamin Content", "Superior Taste", "Better Texture"][index]}</h4>
                <p>{[
                  "Fresh food retains up to 50% more vitamins than frozen.",
                  "Fresh ingredients bring out the best flavor in every bite.",
                  "Fresh food offers a better texture and mouthfeel compared to frozen."
                ][index]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dining;
