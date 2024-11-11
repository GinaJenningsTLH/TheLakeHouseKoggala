import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import roomData from '../data/roomData';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallSharp, IoArrowUpSharp } from "react-icons/io5";
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import villaFrontView from '../assets/images/Gallery/villa-front-view-2.jpeg';
import lakeViewIndoor from '../assets/images/lakeview(indoor).jpg';
import galleryImages from '../data/galleryData';
import RoomsTypeCard from '../components/RoomTypeCard';
import BookingForm from '../components/BookingForm';

const Gallery = lazy(() => import('../components/Gallery'));
const WhyBookWithUs = lazy(() => import('../components/WhyBookWithUs'));

const Home: React.FC = () => {
  const observer = useRef<IntersectionObserver | null>(null);

  const [isVisible, setIsVisible] = useState({
    whychooseus: true,
    overview: false,
    rooms: false,
    booking: false,
    gallery: false,
    'booking-form': false,
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const options = { threshold: 0.4 };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id in isVisible) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
          observer.current?.unobserve(entry.target);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.current?.observe(section));

    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
      observer.current?.disconnect();
    };
  }, [isVisible]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Helmet>
        <title>Lake House Villa - Luxury Stay by Koggala Lake</title>
        <meta name="description" content="Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with luxurious amenities and stunning views." />
        <meta name="keywords" content="The Lake House Villa, Koggala Lake, Luxury Villa, Sustainable Accommodation, Sri Lanka Villas, Book Lake Villa" />
        <meta property="og:title" content="The Lake House Villa - Kogalla Villas" />
        <meta property="og:description" content="Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with luxurious amenities and stunning views." />
        <meta property="og:image" content="/assets/images/Gallery/villa-front-view-2.jpeg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <HeroSection />

      <main>
        {/* <section
          id="whychooseus"
          className={`relative min-h-screen md:min-h-full  bg-center mt-20 transition-opacity duration-1000 ease-in-out ${isVisible.whychooseus ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {isVisible.whychooseus && <WhyBookWithUs />}
          </Suspense>
        </section> */}

        <section
          id="overview"
          className={`relative min-h-screen bg-cover bg-center py-10 transition-opacity duration-1000 ease-in-out ${isVisible.overview ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="container px-6 md:px-12 lg:px-24 text-center">
            <motion.h1
              className="font-bold text-gray-500 mb-6 text-4xl md:text-5xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              THE LAKE HOUSE VILLA
            </motion.h1>
            <motion.p
              className="text-darkGreen mb-8 max-w-2xl mx-auto text-lg md:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
            >
              Built in 2010 by a British architect, The Lake House is a peaceful, architect-designed, contemporary, and environmentally sustainable villa located on the serene shores of Koggala Lake.
            </motion.p>
            {/* <motion.a
              href="/about"
              className="inline-block bg-gradient-to-r from-teal-400 to-teal-500 hover:bg-lightGreen text-white text-2xl mb-10 py-3 px-6 rounded-md transition-transform duration-500 hover:scale-110"
              whileHover={{ scale: 1.05 }}
              aria-label="Read more about Lake House Villa"
            >
              Read More
            </motion.a> */}
          </div>

          <div className="mb-16 md:flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2">
              <LazyLoadImage
                src={villaFrontView}
                alt="Front view of the Lake House Villa, designed by a British architect"
                effect="blur"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 md:pl-8 mt-12 md:mt-0"
            >
              <h2 className="text-gray-500 font-bold mb-6 text-2xl">BUILT FOR SUSAINABILITY </h2>
              <p className="text-gray-700 mb-6">
                The Lake House is a contemporary home built using local Sri Lankan materials, designed to be as energy-efficient and low-impact as possible. It relies on natural sea and lake breezes for cooling, supplemented with ceiling fans, and most of the hot water is heated using solar power.
              </p>
            </motion.div>
          </div>
          <div className="mb-16 md:flex items-center justify-center">
            {/* Amenities Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 order-2 md:order-1 md:pr-8">
              <h2 className="text-gray-500 font-bold mb-6 text-2xl">LUXURIOUS ROOMS & AMENITIES </h2>
              <p className="text-gray-700 mb-6">
                The villa includes 4 double bedrooms with en-suite bathrooms, 3 of which have outdoor showers, and an additional twin room on request.
                The open-plan dining, sitting, and games area offers stunning views of the pool and lake.
              </p>
              <p className="text-gray-700 mb-6">
                Relax in the large swimming pool or sunbathe by the water. Private yoga lessons, massages in the garden, and table tennis are also available.
              </p>
            </motion.div>

            {/* Lake View Indoor Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 order-1 md:order-2">
              <LazyLoadImage
                src={lakeViewIndoor}
                alt="Indoor view of the Lake House Villa with lake view"
                effect="blur"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section
          id="rooms"
          className={`py-20  transition-opacity duration-1000 ease-in-out ${isVisible.rooms ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ backgroundImage: "url('/assets/images/leaf-pattern.png') repeat" }}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">ROOM TYPES</h2>
            <p className="text-darkGreen mb-10 max-w-2xl mx-auto">Enjoy luxurious accommodations with stunning views.</p>
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

        <Suspense fallback={<div className="text-center py-20">Loading gallery...</div>}>
          <section id="gallery" className={`py-20  ${isVisible.gallery ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
              <div className='w-fit mx-auto px-2 mb-8'>
                <h2 className="text-3xl font-bold text-gray-500 mb-2">GALLERY</h2>
                <p className="text-white mb-10 max-w-2xl mx-auto">Explore beautiful moments captured at The Lake House.</p>
              </div>
              <Gallery images={galleryImages} />
            </div>
          </section>
        </Suspense>

        <section
          id="booking"
          className={`py-20 bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="container py-8 mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <motion.div
                className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="mb-6">
                  <AiOutlineMail className="w-12 h-12 mx-auto" aria-hidden="true" />
                </div>
                <h2 className="text-2xl text-darkGreen font-bold mb-2">Ready to Book Your Stay?</h2>
                <p className="mb-6 text-gray-600">Reach out to us via email for any inquiries or bookings.</p>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
                  aria-label="Send us an email to book your stay"
                >
                  Get in touch!
                </a>
              </motion.div>
              <motion.div
                className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="mb-6">
                  <IoCallSharp className="w-12 h-12 mx-auto" aria-hidden="true" />
                </div>
                <h2 className="text-2xl text-darkGreen font-bold mb-2">Prefer to Speak Directly?</h2>
                <p className="mb-6 text-gray-600">Give us a call and we'll be happy to assist you with your booking.</p>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
                  aria-label="Call us now to book your stay"
                >
                  Call Us Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="booking-form"
          className={`py-20 bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible['booking-form'] ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">Book Your Stay</h2>
            <p className="text-darkGreen mb-10 max-w-2xl mx-auto">
              Fill out the form below to reserve your stay at The Lake House Villa.
            </p>
            <BookingForm />
          </div>
        </section>
      </main>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#14C2DD] text-white p-3 rounded-full shadow-lg hover:bg-darkGreen transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <IoArrowUpSharp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </>
  );
};

export default Home;
