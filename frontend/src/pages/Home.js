import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import roomData from '../data/roomData';
// import { AiOutlineMail } from "react-icons/ai";
import { IoArrowUpSharp } from "react-icons/io5";
import '../App.css';
import galleryImages from '../data/galleryData';
// import RoomsTypeCard from '../components/RoomTypeCard';
import BookingForm from '../components/BookingForm';
import OverviewSection from '../components/OverviewSection';
import GallerySection from '../components/GallerySection';
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
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Lake House Villa - Luxury Stay by Koggala Lake" }), _jsx("meta", { name: "description", content: "Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with many amenities and stunning views." }), _jsx("meta", { name: "keywords", content: "The Lake House Villa, Koggala Lake, Luxury Villa, Sustainable Accommodation, Sri Lanka Villas, Book Lake Villa" }), _jsx("meta", { property: "og:title", content: "The Lake House Villa - Kogalla Villas" }), _jsx("meta", { property: "og:description", content: "Experience the serene beauty of Koggala Lake at the Lake House Villa. A contemporary, sustainable villa with many amenities and stunning views." }), _jsx("meta", { property: "og:image", content: "/assets/images/Gallery/villa-front-view-2.jpg" }), _jsx("meta", { property: "og:url", content: "https://yourwebsite.com/" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("link", { rel: "preload", as: "image", href: "/logo-white.webp" })] }), _jsx(Navbar, {}), _jsx(HeroSection, {}), _jsxs("main", { children: [_jsx(Suspense, { fallback: _jsx("div", { className: "loading-placeholder", children: "Loading..." }), children: _jsx(OverviewSection, {}) }), _jsx(Suspense, { fallback: _jsx("div", { className: "loading-placeholder", children: "Loading gallery..." }), children: _jsx(GallerySection, { images: galleryImages }) }), _jsx("section", { id: "booking", className: `section-padding bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsx("div", { className: " container -mt-20 mx-auto px-6 md:px-12 lg:px-24", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-center", children: [_jsxs(motion.div, { className: "bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 1 }, children: [_jsx("div", { className: "mb-6" }), _jsx("p", { className: "mb-6 text-gray-600", children: "Reach out to us via email for any enquiries or bookings." }), _jsx("a", { href: "mailto:your-email@example.com", className: "inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", "aria-label": "Send us an email to book your stay", children: "Get in touch!" })] }), _jsxs(motion.div, { className: "bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 1 }, children: [_jsx("div", { className: "mb-6" }), _jsx("p", { className: "mb-6 text-gray-600", children: "Give us a call and we'll be happy to assist you with your booking." }), _jsx("a", { href: "tel:+1234567890", className: "inline-block bg-gray-500 hover:bg-gray-200 hover:text-gray-800 text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", "aria-label": "Call us now to book your stay", children: "Call Us Now" })] })] }) }) }), _jsx("section", { id: "booking-form", className: `section-padding bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible['booking-form'] ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-4", children: "Book Your Stay" }), _jsx("p", { className: "text-darkGreen mb-10 max-w-2xl mx-auto", children: "Fill out the form below to reserve your stay at The Lake House Villa." }), _jsx(BookingForm, {})] }) })] }), showTopBtn && (_jsx("button", { onClick: scrollToTop, className: "fixed bottom-8 right-8 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-darkGreen transition-colors duration-300 z-50", "aria-label": "Scroll to top", children: _jsx(IoArrowUpSharp, { className: "w-6 h-6" }) })), _jsx(Footer, {})] }));
};
export default Home;
