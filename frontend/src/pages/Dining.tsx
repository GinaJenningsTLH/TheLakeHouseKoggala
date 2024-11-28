import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import diningHero from '../assets/images/GalleryMain/staff-serving-drinks.webp';
import freshIcon from '../assets/images/Fresh.svg';
import desireIcon from '../assets/images/desire.svg';
import freshIngIcon from '../assets/images/Fresh-Ing.svg';
import preparedIcon from '../assets/images/prepared.svg';
import servedIcon from '../assets/images/served.svg';

import bbq2 from '../assets/images/Dining/food-served.webp';
import bbq3 from '../assets/images/Dining/seafood-bbq.png';
import bbq4 from '../assets/images/Dining/Srilankan-food-prepared.webp';

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
            Savour Every Moment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            Enjoy a diverse selection of fresh, locally sourced seafood, vegetables, and produce.
          </motion.p>
        </div>
      </section>

      {/* Fresh vs Frozen Food Infographic */}
      <section className="pt-16 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-500 mb-8"
          >
            Fresh Food
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" infographic-card min-h-[100px] flex flex-col items-center"
            >
              {/* <img src={freshIcon} className="mx-auto" alt="Fresh Food" /> */}
             
              <p className='text-gray-700'>100% fresh, locally sourced ingredients for every dish.</p>
              <p className='mx-2 text-gray-700'>We have a wonderful chef who takes great pride in delighting our guests.  What’s even better is that he will prepare your food at only the cost of the ingredients.  There is no additional mark up of “menu” price – unlike hotels and many other villas
              </p>
            </motion.div>
     
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-200 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Our legendary Barbecues
          </motion.h2> */}
          {/* <p className="text-lg mb-8">
          For a special experience, guests can arrange for a BBQ on the garden by the lake or in the courtyard. Enjoy the serene surroundings while savouring expertly grilled dishes prepared with the freshest ingredients. 

          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ bbq2, bbq3, bbq4].map((imgSrc, index) => (
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

      {/* Farm-to-Table Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-500 mb-8"
          >
            How is Dining at The Lake House?
          </motion.h2>
          <p className="mb-8 text-gray-700">
          Whether you select from our carefully chosen Lake House
offerings or have specific preferences, we ensure your
culinary experience is exceptional. Inform our chef of your
choice each morning, and he will arrange for the freshest
ingredients to be delivered promptly, catering to your dining
desires. We don’t think you will find better food elsewhere!
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-12">
            {[desireIcon, freshIngIcon].map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center w-64 min-h-[200px] flex flex-col items-center"
              >
                <div className="mx-auto rounded-full w-fit border bg-white mb-4">
                  <img className="mx-auto my-3 p-4" src={imgSrc} alt={`Step ${index + 1}`} />
                </div>
                <h4 className="text-xl font-semibold">{["Select Your Ingredients", "Freshly Delivered, Cooked and Served", ][index]}</h4>
                <p>{[
                  "Choose from our wide range of fresh, locally sourced seafood, vegetables, and produce.",
                  "Ingredients are sourced daily from local farms and markets, and delivered fresh, just for you.",

                ][index]}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* BBQ Section with Images in Row */}


      <Footer />
    </>
  );
};

export default Dining;
