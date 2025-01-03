import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState, Suspense, lazy } from 'react';
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
const Gallery = lazy(() => import('../components/Gallery'));
const WhyBookWithUs = lazy(() => import('../components/WhyBookWithUs'));
// Animation Variants for Reusability
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};
const Home = () => {
    const observer = useRef(null);
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
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Lake House Villa - Luxury Stay by Koggala Lake" }), _jsx("meta", { name: "description", content: "Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with luxurious amenities and stunning views." }), _jsx("meta", { name: "keywords", content: "The Lake House Villa, Koggala Lake, Luxury Villa, Sustainable Accommodation, Sri Lanka Villas, Book Lake Villa" }), _jsx("meta", { property: "og:title", content: "The Lake House Villa - Kogalla Villas" }), _jsx("meta", { property: "og:description", content: "Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with luxurious amenities and stunning views." }), _jsx("meta", { property: "og:image", content: "/assets/images/Gallery/villa-front-view-2.jpg" }), _jsx("meta", { property: "og:url", content: "https://yourwebsite.com/" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" })] }), _jsx(Navbar, {}), _jsx(HeroSection, {}), _jsxs("main", { children: [_jsxs("section", { id: "overview", className: `section-padding transition-opacity duration-1000 ease-in-out ${isVisible.overview ? 'animate-fadeIn' : 'opacity-0'}`, children: [_jsxs("div", { className: " px-6 md:px-12 lg:px-24 text-center", children: [_jsx(motion.h1, { className: "font-bold text-gray-500 mb-6 text-4xl md:text-4xl", variants: fadeInUp, initial: "initial", animate: "animate", children: "THE LAKE HOUSE" }), _jsx(motion.p, { className: "text-darkGreen mb-8 max-w-2xl mx-auto text-lg md:text-2xl", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 1.5 }, children: "Constructed in 2010 and designed by a British architect, The Lake House stands as a tranquil, modern and environmentally conscious villa nestled along the calm waters of Koggala Lake." })] }), _jsxs("div", { className: "mb-16 md:flex items-center justify-center", children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 }, className: "md:w-1/2", children: _jsx(LazyLoadImage, { src: villaFrontView, alt: "Front view of the Lake House Villa", effect: "blur", className: "rounded-lg shadow-lg w-full h-auto", loading: "lazy" }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "md:w-1/2 md:pl-8 mt-12 md:mt-0", children: [_jsx("h2", { className: "text-gray-500 font-bold mb-6 mx-auto  text-center text-2xl", children: "BUILT FOR SUSTAINABILITY" }), _jsx("p", { className: "text-gray-700 mb-6 mx-10", children: "We have designed our villa using local materials which adds to the authenticity of the architecture. It also dramatically reduces the carbon footprint. Additionally, reliance on natural ventilation and solar power aligns with the villa's commitment to environmental responsibility. This approach minimises the villa\u2019s impact on the surrounding ecosystem and offers a unique and eco-friendly experience for all our guests." })] })] }), _jsxs("div", { className: "mb-16 md:flex items-center justify-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "md:w-1/2 order-2 md:order-1 md:pr-8", children: [_jsx("h2", { className: "text-gray-500 text-center font-bold mb-6 text-2xl", children: "LUXURIOUS ROOMS & AMENITIES" }), _jsx("p", { className: "text-gray-700 mx-10 mb-6 ", children: "The villa includes four double bedrooms with en-suite bathrooms, three of which have outdoor showers.  An additional twin room is available on request. Our guests are offered the choice of renting the entire estate, or individual rooms offering tailored elegance for every lifestyle." }), _jsx("p", { className: "text-gray-700 mx-10 mb-6", children: "The villa amenities are truly inviting and well-suited for a relaxing and rejuvenating stay. The combination of indoor and outdoor living spaces ensures a wonderful experience with nature surrounding you. The open-plan dining and sitting area with panoramic views, offers a seamless connection to the natural surroundings and Koggala Lake.  The emphasis we have made on outdoor showers, private garden, and a dedicated massage room further enhances the feeling of tranquillity. These thoughtful touches align with the villa's sustainable ethos." })] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 }, className: "md:w-1/2 order-1 md:order-2", children: _jsx(LazyLoadImage, { src: lakeViewIndoor, alt: "Indoor view of the Lake House Villa with lake view", effect: "blur", className: "rounded-lg shadow-lg w-full h-auto", loading: "lazy" }) })] })] }), _jsx("section", { id: "rooms", className: `section-padding transition-opacity duration-1000 ease-in-out ${isVisible.rooms ? 'animate-fadeIn' : 'opacity-0'}`, style: { backgroundImage: "url('/assets/images/leaf-pattern.png') repeat" }, children: _jsxs("div", { className: "py-20 bg-gray-100 mx-auto px-10 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-4", children: "OUR ROOMS" }), _jsx("p", { className: "text-darkGreen mb-10 max-w-2xl mx-auto", children: "Enjoy a variety of luxurious accommodation with stunning views over the landscape or lake. " }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4, duration: 1 }, children: roomData.map((room, idx) => (_jsx(RoomsTypeCard, { imageSrc: room.imageSrc, altText: room.altText, title: room.title, description: room.description, link: room.link }, idx))) })] }) }), _jsx(Suspense, { fallback: _jsx("div", { className: "text-center py-20", children: "Loading gallery..." }), children: _jsx("section", { id: "gallery", className: `section-padding ${isVisible.gallery ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsxs("div", { className: 'w-fit mx-auto px-2 mb-8', children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-2", children: "GALLERY" }), _jsx("p", { className: "text-white mb-10 max-w-2xl mx-auto", children: "Explore our gallery of selected images." })] }), _jsx(Gallery, { images: galleryImages })] }) }) }), _jsx("section", { id: "booking", className: `section-padding bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsx("div", { className: "container py-8 mx-auto px-6 md:px-12 lg:px-24", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-center", children: [_jsxs(motion.div, { className: "bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 1 }, children: [_jsx("div", { className: "mb-6", children: _jsx(AiOutlineMail, { className: "w-12 h-12 mx-auto", "aria-hidden": "true" }) }), _jsx("h2", { className: "text-2xl text-gray-500 font-bold mb-2", children: "Ready to Book Your Stay?" }), _jsx("p", { className: "mb-6 text-gray-600", children: "Reach out to us via email for any inquiries or bookings." }), _jsx("a", { href: "mailto:your-email@example.com", className: "inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", "aria-label": "Send us an email to book your stay", children: "Get in touch!" })] }), _jsxs(motion.div, { className: "bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 1 }, children: [_jsx("div", { className: "mb-6", children: _jsx(IoCallSharp, { className: "w-12 h-12 mx-auto", "aria-hidden": "true" }) }), _jsx("h2", { className: "text-2xl text-gray-500 font-bold mb-2", children: "Prefer to Speak Directly?" }), _jsx("p", { className: "mb-6 text-gray-600", children: "Give us a call and we'll be happy to assist you with your booking." }), _jsx("a", { href: "tel:+1234567890", className: "inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", "aria-label": "Call us now to book your stay", children: "Call Us Now" })] })] }) }) }), _jsx("section", { id: "booking-form", className: `section-padding bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible['booking-form'] ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-4", children: "Book Your Stay" }), _jsx("p", { className: "text-darkGreen mb-10 max-w-2xl mx-auto", children: "Fill out the form below to reserve your stay at The Lake House Villa." }), _jsx(BookingForm, {})] }) })] }), showTopBtn && (_jsx("button", { onClick: scrollToTop, className: "fixed bottom-8 right-8 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-darkGreen transition-colors duration-300 z-50", "aria-label": "Scroll to top", children: _jsx(IoArrowUpSharp, { className: "w-6 h-6" }) })), _jsx(Footer, {})] }));
};
export default Home;
