import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
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
const Home = () => {
    const [isVisible, setIsVisible] = useState({
        overview: false,
        rooms: false,
        booking: false,
        gallery: false,
    });
    const observer = useRef();
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
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsxs("main", { children: [_jsx("section", { id: "overview", className: `relative min-h-96 bg-cover bg-center py-20 transition-opacity duration-1000 ease-in-out ${isVisible.overview ? 'animate-fadeIn' : 'opacity-0'}`, style: {
                            width: "100vw",
                            backgroundImage: "url('/assets/images/tree.png')",
                            backgroundAttachment: "fixed",
                        }, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx(motion.h2, { className: "font-bold text-darkGreen mb-4", initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1 }, children: "The Lake House Villa" }), _jsx(motion.p, { className: "text-darkGreen mb-6 max-w-2xl mx-auto", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 1.5 }, children: "Built in 2010 by a British architect, the Lake House is a peaceful, architect-designed, contemporary, and environmentally sustainable villa located on the serene shores of Koggala Lake." }), _jsx(WhyBookWithUs, {}), _jsx(motion.a, { href: "/about", className: "inline-block bg-darkGreen hover:bg-lightGreen text-white py-3 px-6 rounded-md transition-transform duration-500 hover:scale-110", whileHover: { scale: 1.05 }, children: "Read More" })] }) }), _jsx("section", { id: "rooms", className: `py-20 bg-lightestGreen transition-opacity duration-1000 ease-in-out ${isVisible.rooms ? 'animate-fadeIn' : 'opacity-0'}`, style: { background: "url('/assets/images/leaf-pattern.png') repeat" }, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-h2 font-bold text-darkGreen mb-3", children: "Rooms & Suites" }), _jsx("p", { className: "text-darkGreen mb-8 max-w-2xl mx-auto", children: "Enjoy luxurious accommodations with stunning views." }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4, duration: 1 }, children: roomData.map((room, idx) => (_jsx(RoomsTypeCard, { imageSrc: room.imageSrc, altText: room.altText, title: room.title, description: room.description, link: room.link }, idx))) })] }) }), _jsx("section", { id: "gallery", className: `py-20 bg-[#cffafe] ${isVisible.gallery ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsxs("div", { className: 'w-fit mx-auto px-2', children: [_jsx("h2", { className: "text-h2 font-bold text-darkGreen mb-2", children: "Gallery" }), _jsx("p", { className: "text-darkGreen mb-8 max-w-2xl mx-auto", children: "Explore beautiful moments captured at Lake House." })] }), _jsx(Gallery, { images: galleryImages })] }) }), _jsx("section", { id: "booking", className: `py-20 bg-white transition-opacity duration-1000 ease-in-out ${isVisible.booking ? 'animate-fadeIn' : 'opacity-0'}`, children: _jsx("div", { className: "container py-5 mx-auto px-6 md:px-12 lg:px-24", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 text-center", children: [_jsxs(motion.div, { className: "bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 1 }, children: [_jsx("div", { className: "mb-4", children: _jsx(AiOutlineMail, { className: "w-12 h-12 mx-auto" }) }), _jsx("h2", { className: "text-h2 text-darkGreen font-bold mb-1", children: "Ready to Book Your Stay?" }), _jsx("p", { className: "mb-4 text-gray-600", children: "Reach out to us via email for any inquiries or bookings." }), _jsx("a", { href: "mailto:your-email@example.com", className: "inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", children: "Get in touch!" })] }), _jsxs(motion.div, { className: "bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center transition-transform duration-300", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 1 }, children: [_jsx("div", { className: "mb-4", children: _jsx(IoCallSharp, { className: "w-12 h-12 mx-auto" }) }), _jsx("h2", { className: "text-h2 text-darkGreen font-bold mb-1", children: "Prefer to Speak Directly?" }), _jsx("p", { className: "mb-4 text-gray-600", children: "Give us a call and we'll be happy to assist you with your booking." }), _jsx("a", { href: "tel:+1234567890", className: "inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md transition-transform duration-300 hover:scale-105", children: "Call Us Now" })] })] }) }) })] }), _jsx(Footer, {})] }));
};
export default Home;
