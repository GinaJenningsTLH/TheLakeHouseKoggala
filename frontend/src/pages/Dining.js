import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import diningHero from '../assets/images/GalleryMain/staff-serving-drinks.webp';
import bbq2 from '../assets/images/Dining/food-served.webp';
import bbq3 from '../assets/images/Dining/seafood-bbq.png';
import bbq4 from '../assets/images/Dining/Srilankan-food-prepared.webp';
import bbq5 from '../assets/images/Dining/fruits.webp';
import bbq6 from '../assets/images/Dining/watermelon.webp';
import bbq7 from '../assets/images/Dining/vegetables.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Dining = () => {
    const diningImages = [bbq2, bbq3, bbq4, bbq5, bbq6, bbq7];
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("section", { className: "relative bg-cover bg-center h-[500px] md:h-96 lg:h-96 text-white", style: { backgroundImage: `url(${diningHero})` }, children: [_jsx("div", { className: "bg-black bg-opacity-50 absolute inset-0" }), _jsxs("div", { className: "relative container mx-auto h-full flex flex-col items-center justify-center text-center", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-5xl font-bold mb-4", children: "Savour Every Moment" }), _jsx(motion.p, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "text-lg", children: "Enjoy a diverse selection of fresh, locally sourced seafood, vegetables, and produce." })] })] }), _jsx("section", { className: "pt-16 bg-white", children: _jsxs("div", { className: "container mx-auto text-center", children: [_jsx(motion.h2, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-4xl font-bold text-gray-500 mb-8", children: "Fresh Food" }), _jsx("div", { className: "flex flex-col md:flex-row items-center justify-center gap-12", children: _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay: 0.2 }, className: " infographic-card min-h-[100px] flex flex-col items-center", children: [_jsx("p", { className: 'text-gray-700', children: "100% fresh, locally sourced ingredients for every dish." }), _jsx("p", { className: 'mx-2 text-gray-700', children: "We have a wonderful chef who takes great pride in delighting our guests.  What\u2019s even better is that he will prepare your food at only the cost of the ingredients.  There is no additional mark up of \u201Cmenu\u201D price \u2013 unlike hotels and many other villas" })] }) })] }) }), _jsx("section", { className: "py-10 bg-gray-200", children: _jsx("div", { className: "container mx-auto px-6 md:px-12", children: _jsx(Swiper, { modules: [Navigation, Pagination, Autoplay], spaceBetween: 15, slidesPerView: 1, navigation: true, pagination: { clickable: true }, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, breakpoints: {
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }, className: "rounded-lg overflow-hidden", children: diningImages.map((imgSrc, index) => (_jsx(SwiperSlide, { children: _jsx(motion.div, { className: "relative bg-gray-800 rounded-xl shadow-lg transition-transform duration-300", whileHover: { scale: 1.02 }, children: _jsx("img", { src: imgSrc, alt: `Dining Image ${index + 1}`, className: "w-full h-64 object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity" }) }) }, index))) }) }) }), _jsx("section", { className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto text-center", children: [_jsx(motion.h2, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-4xl font-bold text-gray-500 mb-8", children: "How is Dining at The Lake House?" }), _jsx("p", { className: "mb-8 text-gray-700", children: "Whether you select from our carefully chosen Lake House offerings or have specific preferences, we ensure your culinary experience is exceptional. Inform our chef of your choice each morning, and he will arrange for the freshest ingredients to be delivered promptly, catering to your dining desires. We don\u2019t think you will find better food elsewhere!" })] }) }), _jsx(Footer, {})] }));
};
export default Dining;
