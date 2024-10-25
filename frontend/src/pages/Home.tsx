import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import WhyBookWithUs from '../components/WhyBookWithUs';
import Gallery from '../components/Gallery';
import galleryImages from '../data/galleryData';
import RoomsTypeCard from '../components/RoomTypeCard'; // Import the component
import roomData from '../data/roomData'; // Import the data
import { AiOutlineMail } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import '../App.css';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    overview: false,
    rooms: false,
    booking: false,
    gallery: false,
  });

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const options = {
      threshold: 0.4, // Trigger when 40% of the section is in view
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <main>
        {/* Property Overview */}
        <section
          id="overview"
          className={`relative min-h-96 bg-cover bg-center py-20 transition-opacity duration-1000 ease-in-out ${isVisible.overview ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{
            width: "100vw",
            backgroundImage: "url('tree.png')",
            backgroundAttachment: "fixed",
          }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <motion.h2
              className=" font-bold text-darkGreen mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              The Lake House  Villa
            </motion.h2>
            <motion.p
              className=" text-darkGreen mb-6  max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
            >
              Built in 2010 by a British architect, the Lake House is a peaceful, architect-designed, contemporary, and environmentally sustainable villa located on the serene shores of Koggala Lake.
            </motion.p>
            <WhyBookWithUs />
            <motion.a
              href="/about"
              className="inline-block bg-darkGreen hover:bg-lightGreen text-white py-3 px-6 rounded-md transition-transform duration-500 hover:scale-110"
              whileHover={{ scale: 1.05 }}>
              Read More
            </motion.a>
          </div>
        </section>

        {/* Rooms & Suites */}
        <section
          id="rooms"
          className={`py-20 bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible.rooms ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ background: "url('/leaf-pattern.png') repeat" }}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-h2 font-bold text-darkGreen mb-3">Rooms & Suites</h2>
            <p className="text-darkGreen mb-8 max-w-2xl mx-auto">
              Enjoy luxurious accommodations with stunning views.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              {roomData.map((room, idx) => (
                <RoomsTypeCard
                  key={idx}
                  imageSrc={room.imageSrc}
                  altText={room.altText}
                  title={room.title}
                  description={room.description}
                  link={room.link}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className={`py-20 bg-[#cffafe] ${isVisible.gallery ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <div className=' w-fit mx-auto px-2  '>
            <h2 className="text-h2 font-bold text-darkGreen  mb-2">Gallery</h2>
            <p className="text-darkGreen mb-8 max-w-2xl mx-auto">
              Explore beautiful moments captured at Lake House.
            </p>
            </div>
            <Gallery images={galleryImages} />
          </div>
        </section>

        {/* Booking Call to Action */}
        <section
  id="booking"
  className={`py-20 bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`}
>
  <div className="container  py-5 mx-auto px-6 md:px-12 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
      {/* Email CTA */}
      <motion.div
        className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="mb-4">
          <AiOutlineMail className="w-12 h-12 mx-auto" />
        </div>
        <h2 className="text-h2 text-darkGreen font-bold mb-1">Ready to Book Your Stay?</h2>
        <p className="mb-4 text-gray-600">Reach out to us via email for any inquiries or bookings.</p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
        >
          Get in touch!
        </a>
      </motion.div>

      {/* Call CTA */}
      <motion.div
        className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="mb-4">
          <IoCallSharp className="w-12 h-12 mx-auto" />
        </div>
        <h2 className="text-h2 text-darkGreen font-bold mb-1">Prefer to Speak Directly?</h2>
        <p className="mb-4 text-gray-600">Give us a call and we'll be happy to assist you with your booking.</p>
        <a
          href="tel:+1234567890"
          className="inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
        >
          Call Us Now
        </a>
      </motion.div>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
