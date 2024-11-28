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
import villaFrontView from '../assets/images/Gallery/villa-front-view-2.jpg';
import lakeViewIndoor from '../assets/images/lakeview(indoor).jpg';
import galleryImages from '../data/galleryData';
import RoomsTypeCard from '../components/RoomTypeCard';
import BookingForm from '../components/BookingForm';
import { Link } from 'react-router-dom';

const Gallery = lazy(() => import('../components/Gallery'));
const WhyBookWithUs = lazy(() => import('../components/WhyBookWithUs'));

// Animation Variants for Reusability
const fadeInUp = {
  initial: { opacity: 0, y: 20 }, 
  animate: { opacity: 1, y: 0 },
};

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
        <meta property="og:image" content="/assets/images/Gallery/villa-front-view-2.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preload" as="image" href="/logo-white.png" />
      </Helmet>

      <Navbar />
      <HeroSection />

      <main>
        <section
          id="overview"
          className="py-16 px-4 md:px-6 transition-opacity duration-1000 ease-in-out"
        >
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

        {/* <section
          id="rooms"
          className={`section-padding transition-opacity duration-1000 ease-in-out ${isVisible.rooms ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ backgroundImage: "url('/assets/images/leaf-pattern.png') repeat" }}
        >
          <div className="py-20 bg-gray-100 mx-auto px-10 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">OUR ROOMS</h2>
            <p className="text-darkGreen mb-10 max-w-2xl mx-auto">Enjoy a variety of luxurious accommodation with stunning views over the landscape or lake. </p>
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
        </section> */}

        <Suspense fallback={<div className="text-center pt-16">Loading gallery...</div>}>
          <section id="gallery" className={`section-padding ${isVisible.gallery ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="container bg-gray-100 pt-6  pb-16 mx-auto px-6 md:px-12 lg:px-24 text-center">
              <div className='w-fit mx-auto px-2 mb-2'>
                <h2 className="text-3xl font-bold text-gray-500 mb-2">GALLERY</h2>
                <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Explore our gallery of selected images.
                </p>
              </div>
              <Gallery images={galleryImages} />
              <Link to="/gallery">
              <p className='text-center text-gray-500 underline underline-offset-1 pt-10'>
              <a href='/gallery' className=''>View more images</a></p>
              </Link>
            </div>
           
          </section>
        </Suspense>

        <section
          id="booking"
          className={`section-padding bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`}
        >
          <div className=" container -mt-20 mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <motion.div
                className="bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="mb-6">
                  {/* <AiOutlineMail className="w-12 h-12 mx-auto" aria-hidden="true" /> */}
                </div>
                {/* <h2 className="text-2xl text-gray-500 font-bold mb-2">Ready to Book Your Stay?</h2> */}
                <p className="mb-6 text-gray-600">Reach out to us via email for any enquiries or bookings.</p>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
                  aria-label="Send us an email to book your stay"
                >
                  Get in touch!
                </a>
              </motion.div>
              <motion.div
                className="bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="mb-6">
                  {/* <IoCallSharp className="w-12 h-12 mx-auto" aria-hidden="true" /> */}
                </div>
                {/* <h2 className="text-2xl text-gray-500 font-bold mb-2">Prefer to Speak Directly?</h2> */}
                <p className="mb-6 text-gray-600">Give us a call and we'll be happy to assist you with your booking.</p>
                <a
                  href="tel:+1234567890"
                  className="inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105"
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
          className={`section-padding bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible['booking-form'] ? 'animate-fadeIn' : 'opacity-0'}`}
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
          className="fixed bottom-8 right-8 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-darkGreen transition-colors duration-300 z-50"
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
