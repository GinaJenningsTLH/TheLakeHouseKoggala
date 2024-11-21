import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import teamHero from '../assets/images/GalleryMain/villa-with-sunbeams-view.webp'; // Use appropriate hero image
import teamPhoto from '../assets/images/gina.jpg';
import ginaPhoto from '../assets/images/gina.jpg';
import rangaPhoto from '../assets/images/ranga.jpg';

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
              <div className="w-48 h-48 shrink-0">
                <img
                  src={ginaPhoto}
                  alt="Gina Jennings"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-gray-700 font-semibold mb-2">Gina Jennings</h3>
                <p className="text-lg text-gray-600 mb-4">Owner</p>
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
              <div className="w-48 h-48 shrink-0">
                <img
                  src={rangaPhoto}
                  alt="Ranga Koralage"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-gray-700 font-semibold mb-2">Ranga Koralage</h3>
                <p className="text-lg text-gray-600 mb-4">Manager</p>
                <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
                  "I love The Lake House and just want everyone who visits Sri Lanka and our house to have a wonderful time. My colleagues and I work hard to achieve this and I am proud to say that we have always had excellent reviews and feedback. Most of all, we have always had delightful guests of all nationalities and ages, many of whom return year after year. It is always such fun to have returning guests and it feels just like seeing old friends again! We would love you to become one of those..."
                </blockquote>
              </div>
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
              className="w-full h-[540px] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team; 