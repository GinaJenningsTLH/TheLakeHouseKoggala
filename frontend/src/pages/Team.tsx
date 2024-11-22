import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import teamHero from '../assets/images/GalleryMain/villa-with-sunbeams-view.webp'; // Use appropriate hero image
import teamPhoto from '../assets/images/Team/full-team.jpg';
import ginaPhoto from '../assets/images/Team/gina.jpg';
import rangaPhoto from '../assets/images/Team/ranga.jpg';
import staffServing from '../assets/images/Team/team-1.jpg';
import srilankanFood from '../assets/images/Team/team-2.jpg';
import drinksAreaView from '../assets/images/Team/team-3.jpg';
import foodServed from '../assets/images/Team/team-4.jpg';

const Team = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96 text-white"
        style={{ backgroundImage: `url(${teamHero})` }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            The people who make The Lake House experience unforgettable
          </motion.p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Gina's Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex flex-col items-center w-48 shrink-0">
                <img
                  src={ginaPhoto}
                  alt="Gina Jennings"
                  className="w-48 h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl text-gray-700 font-semibold">Gina Jennings</h3>
                <p className="text-gray-600">Owner</p>
              </div>
              <div className="flex-1">
                <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
                  "Welcome to The Lake House, our private villa on Koggala Lake near Galle. We have designed, built and loved this place for 12 years now and are delighted to share the joy of it with you. It is a truly special place and our staff are a delightful team, most of whom have been with us for a long time and, especially Ranga, who has been with us from before the villa was conceived. He is a close friend and member of our family and is, frankly, completely magical. Our chef is excellent and prepares a wide range of dishes from local cuisine to international dishes, and nothing is too much for our House Steward to handle. Come, stay with us and meet the team!"
                </blockquote>
              </div>
            </motion.div>

            {/* Ranga's Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse gap-8 items-start"
            >
              <div className="flex flex-col items-center w-48 shrink-0">
                <img
                  src={rangaPhoto}
                  alt="Ranga Koralage"
                  className="w-48 h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl text-gray-700 font-semibold">Ranga Koralage</h3>
                <p className="text-gray-600">Manager</p>
              </div>
              <div className="flex-1">
                <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
                  "I love The Lake House and just want everyone who visits Sri Lanka and our house to have a wonderful time. My colleagues and I work hard to achieve this and I am proud to say that we have always had excellent reviews and feedback. Most of all, we have always had delightful guests of all nationalities and ages, many of whom return year after year. It is always such fun to have returning guests and it feels just like seeing old friends again! We would love you to become one of those..."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Images Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <img
                src={staffServing}
                alt="Staff Service"
                className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <img
                src={srilankanFood}
                alt="Sri Lankan Cuisine"
                className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full"
            >
              <img
                src={drinksAreaView}
                alt="Drinks Area"
                className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full"
            >
              <img
                src={foodServed}
                alt="Food Service"
                className="w-[300px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-gray-500 font-bold text-center mb-8"
          >
            Our Team
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-w-16 aspect-h-9"
          >
            <img
              src={teamPhoto}
              alt="The Lake House Team"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team; 