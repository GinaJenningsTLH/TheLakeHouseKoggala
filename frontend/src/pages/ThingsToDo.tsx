import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { FaSwimmer, FaBicycle, FaGlassCheers, FaFish, FaTree, FaUtensils } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/things-to-do.png';
import poolImage from '../assets/images/Gallery/Pool-overview.jpg';
import houseboatImage from '../assets/images/Amenities/boat-house.jpeg';
import surfingImage from '../assets/images/things-to-do/massage-room.png';
import sunbedsImage from '../assets/images/things-to-do/sunbeds.png';
import cocktailsImage from '../assets/images/things-to-do/cocktails-by-the-lake-koggala.png';
import servicesImage from '../assets/images/things-to-do/personal-services.png';
import kayakingImage from '../assets/images/things-to-do/canoeing.png';
import turtleHatcheryImage from '../assets/images/things-to-do/turtle-hatchery.png';
import stickFishermenImage from '../assets/images/things-to-do/stick-fishermen.png';
import martinMuseumImage from '../assets/images/things-to-do/Martin.png';
import surfImage from '../assets/images/things-to-do/surfing.png';
import teaPlantImage from '../assets/images/things-to-do/tea-plant.jpg';
import bikeride from '../assets/images/things-to-do/bikeride.jpg';
import tabletennis from '../assets/images/things-to-do/table-tennis.jpg';
import habaraduwa from '../assets/images/things-to-do/habaraduwa.jpg';
import whalewatching from '../assets/images/things-to-do/whale-watching.jpg';
import kabalamabeach from '../assets/images/things-to-do/kabalana_surfers_sunset.webp'
import bars from '../assets/images/things-to-do/bars.jpg'

const ThingsToDo: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a parallax effect for background image movement
  const yRange = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Things to Do at The Lake House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            A perfect blend of adventure, relaxation, and nature.
          </motion.p>

        


        </div>
      </section>

      {/* Facilities & Amenities Section */}
      <section className="py-20 bg-gray-50">
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <p className='text-center text-gray-700 mb-8'>We aim to run a concierge service through our wonderful manager, Ranga, who can organise
almost anything, tailor-made to suit you. From cars to motorbikes to fireworks - some of the
offerings are listed here but there are many more possibilities. He will discuss your requirements
on arrival and then... MAGIC!</p>
          <h2 className="text-4xl font-bold text-gray-500 mb-8 text-center">Facilities & Amenities at The Lake House</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Swimming Pool */}
            <motion.div 
              className="col-span-1 lg:col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${poolImage})`, backgroundPositionY: yRange }} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
           
              <h3 className="text-2xl font-semibold mb-2 text-white">Swimming Pool</h3>
              <p className="text-white ">Relax by the oversized serenity pool that blends with the calm waters of the lake.</p>
            </motion.div>

            {/* Houseboat */}
            <motion.div 
              className="col-span-1 lg:col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${houseboatImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
            
              <h3 className="text-2xl font-semibold mb-2 text-white">Boat Ride</h3>
              <p className="text-white">Hop on a boat ride from our private jetty and take a tour of Koggala Lake to experience a slice of nature’s finest gifts.  Almost 60 percent of Sri Lanka’s biodiversity cannot be found anywhere else on earth.   </p>
            </motion.div>

            {/* Surfing */}
            <motion.div 
              className="col-span-1 lg:col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${surfingImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
             
              <h3 className="text-2xl font-semibold mb-2 text-white">Massage Room</h3>
              <p className="text-white">Book a private treatment and pamper yourself with a range of relaxing Ayurvedic rituals or sports massages. This could be enjoyed within the comfort of your room, or a pool side therapy room.</p>
            </motion.div>

            {/* Sunbeds */}
            <motion.div 
              className="col-span-1 lg:col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${sunbedsImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
       
              <h3 className="text-2xl font-semibold mb-2 text-white">Sunbeams</h3>
              <p className="text-white">Select any one of our comfortable sunbeds and find your favourite spot by the pool, by the lake or in a lush corner of the gardens.</p>
            </motion.div>

            {/* Cocktails by the Lake */}
            <motion.div 
              className="col-span-1 lg:col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${cocktailsImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
           
              <h3 className="text-2xl font-semibold mb-2 text-white">Cocktails by the Lake</h3>
              <p className="text-white">Enjoy sundowners by the lake with a fine bottle of wine from our collection, or a cocktail created specially for you by our Bartender. Alternatively, you are welcome to bring your own bottles of spirits.</p>
            </motion.div>

            {/* Personalized Services */}
            <motion.div 
              className="col-span-1 lg:col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${servicesImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
             
              <h3 className="text-2xl font-semibold mb-2 text-white">Personalised Services</h3>
              <p className="text-white">Let our experienced staff make this holiday
even more memorable with a personal
cooking lesson, bird-watching tour, tuk-tuk
ride, or yoga by the pool. All this and more,
tailored to your needs.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-gray-500 mb-8 text-center">Activities near by</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Koggala Kayaking */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <LazyLoadImage
                src={kayakingImage}
                alt="Koggala Kayaking"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Canoeing on the Lake</h3>
              <p className="text-gray-600">From November to April, explore the scenic beauty of Koggala Lake by canoe. Accessible, by arrangement, from our private jetty at The Lake House.

</p>
            </motion.div>

            {/* Turtle Hatchery */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LazyLoadImage
                src={turtleHatcheryImage}
                alt="Turtle Hatchery"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Turtle Hatchery</h3>
              <p className="text-gray-600">Sri Lanka is one of the few islands in the world to support five different kinds of turtles. Visit any of the turtle hatcheries dotted along the southern coast to learn more about the conservation of these gentle creatures. 
Located just 10 minutes from The Lake House.
</p>
            </motion.div>

            {/* Stick Fishermen */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LazyLoadImage
                src={stickFishermenImage}
                alt="Stick Fishermen"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Stilt Fishermen</h3>
              <p className="text-gray-600">Discover the unique tradition of stilt fishing in Sri Lanka, where fishermen balance on stilts to catch fish in shallow waters. This iconic practice has been passed down for generations, adding to the cultural richness of the island nation. Located just 5 minutes away from The Lake House.
              </p>
            </motion.div>

            {/* Martin Wickramasinghe Museum */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <LazyLoadImage
                src={martinMuseumImage}
                alt="Martin Wickramasinghe Museum"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Martin Wickramasinghe Museum</h3>
              <p className="text-gray-600">Explore the Martin Wickramasinghe Museum in Koggala, dedicated to the renowned author and showcasing his personal belongings, literary works, and traditional artefacts. Immerse yourself in the cultural heritage and literary legacy of this iconic figure in Sri Lankan history. Located just 10 minutes away from The Lake House.
              </p>
            </motion.div>

            {/* Golf Course */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <LazyLoadImage
                src={surfImage}
                alt="Airforce Golf Course"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Surfing</h3>
              <p className="text-gray-600">Sri Lanka offers incredible surfing opportunities with waves suitable for all levels of experience. From the famous breaks in Arugam Bay to the stunning beaches of Hikkaduwa, the island's coastline has won multiple awards as a surfing paradise and is waiting to be explored. Excellent surfing beaches can be found just 10 minutes from The Lake House.

              </p>
            </motion.div>

            {/* Virgin White Tea Plantations */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={whalewatching}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Whale Watching</h3>
              <p className="text-gray-600">Sri Lanka is one of the best places in the world for whale watching.? With the chance to spot majestic blue whales, sperm whales, and playful dolphins, the waters off the island's coast are a haven for marine enthusiasts. Whale watching boats can be located just 120 minutes from The Lake House or private hire of crewed boats can be arranged.</p>
            </motion.div>

            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={bikeride}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Bicycle Rides</h3>
              <p className="text-gray-600">Guided bicycle rides can be arranged which take you through the backwaters of the area, with rides across paddy fields and refreshments en route.
              </p>
            </motion.div>


            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={tabletennis}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Table Tennis</h3>
              <p className="text-gray-600">Get competitive, have fun and enjoy
a game of outdoor Table Tennis
with our custom built table located
in the gardens.
              </p>
            </motion.div>


            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={teaPlantImage}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">White Tea Estate</h3>
              <p className="text-gray-600">Visit the Handunungoda white tea estate where the luxury white tea is grown and picked.  Tour around the plantation and factory and sample the many different teas. 20 minutes from The Lake House</p>
            </motion.div>

            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={habaraduwa}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Habaraduwa Beach</h3>
              <p className="text-gray-600">Although it is not safe to swim at this glorious beach, the long stretch of white sand down to the rolling waves is a wonderful spot for a stroll or a sunbathe and there are a number of chilled out bars with good casual food right on the sand.  Sunsets here are spectacular if the clouds are obliging!

              </p>
            </motion.div>


            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={kabalamabeach}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Kabalama Beach</h3>
              <p className="text-gray-600">Experience the pristine shores of
Kabalama Beach, where golden sands
meet the turquoise waters of the Indian
Ocean. This coastline is a tropical
haven perfect for relaxation, adventure
and unforgettable memories.

              </p>
            </motion.div>

            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={bars}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Explore the bars and restaurants of Ahangama</h3>
              <p className="text-gray-600">Explore the vibrant restaurants,
bars and beach clubs located
along the coastline of Ahangama
beach offering a mix of culinary
trills and social excitement.

              </p>
            </motion.div>
              
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ThingsToDo;
