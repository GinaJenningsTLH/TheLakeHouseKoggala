import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import villaFrontView from '../assets/images/Gallery/villa-front-view-2.jpg';
import lakeViewIndoor from '../assets/images/lakeview(indoor).jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="py-16 px-4 md:px-6 transition-opacity duration-1000 ease-in-out">
     <div className="container mx-auto">
            <div className="text-center mb-12">
              <motion.h1
                className="font-bold text-gray-500 mb-6 text-3xl md:text-4xl"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                THE LAKE HOUSE 
              </motion.h1>
              <motion.p
                className="text-darkGreen mb-8 max-w-2xl mx-auto text-base md:text-lg lg:text-xl px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.5 }}
              >
                Constructed in 2010 and designed by a British architect, The Lake House
stands as a tranquil, modern and environmentally conscious villa nestled
along the calm waters of Koggala Lake conveniently located at
Habaraduwa, close to the sea and to the enchanting and lively town of Galle.
              </motion.p>
            </div>

            {/* Sustainability Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.6 }} 
                className="w-full md:w-1/2"
              >
                <LazyLoadImage 
                  src={villaFrontView} 
                  alt="Front view of the Lake House Villa" 
                  effect="blur" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                  loading="lazy" 
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className="w-full md:w-1/2 px-4 md:px-8"
              >
                <h2 className="md:text-center lg:text-center text-gray-500 font-bold mb-6 text-2xl text-center md:text-left">
                  BUILT FOR SUSTAINABILITY
                </h2>
                <p className="text-gray-700 mb-6">
                  We have designed our villa using local materials which adds to the authenticity of the architecture. It also dramatically reduces the carbon footprint. Additionally, reliance on natural ventilation and solar power aligns with the villa's commitment to environmental responsibility. This approach minimises the villa's impact on the surrounding ecosystem and offers a unique and eco-friendly experience for all our guests.
                </p>
              </motion.div>
            </div>

            {/* Amenities Section */}
            <div className="flex flex-col-reverse md:flex-row gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className="w-full md:w-1/2 px-4 md:px-8"
              >
                <h2 className="md:text-center  lg:text-center text-gray-500 font-bold mb-6 text-2xl text-center md:text-left">
                  OUR ROOMS & AMENITIES
                </h2>
                <p className="text-gray-700 mb-6">
                The villa includes four double bedrooms with en-suite bathrooms, three of which have outdoor showers. An additional twin room
is available on request. Our guests are offered the choice of renting the entire estate, or individual rooms offering tailored
elegance for every lifestyle.
                </p>
                <p className="text-gray-700 mb-6">
                The villa amenities are well-suited for a relaxing and rejuvenating stay. The combination of indoor and outdoor living spaces
ensures a wonderful experience with nature surrounding you. The open-plan dining and sitting area offers delightful views of the
natural surroundings and Koggala Lake. The emphasis we have made on outdoor showers, private garden, and a dedicated
massage room further enhances the feeling of tranquillity. These thoughtful touches align with the villa's sustainable ethos.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.6 }} 
                className="w-full md:w-1/2"
              >
                <LazyLoadImage
                  src={lakeViewIndoor}
                  alt="Indoor view of the Lake House Villa with lake view"
                  effect="blur"
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
    </section>
  );
};

export default OverviewSection; 