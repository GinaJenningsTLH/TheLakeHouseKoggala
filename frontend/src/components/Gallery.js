import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Gallery = ({ images }) => {
    return (_jsx(Swiper, { modules: [Navigation, Pagination, Autoplay], spaceBetween: 15, slidesPerView: 1, navigation: true, pagination: { clickable: true }, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, breakpoints: {
            320: { slidesPerView: 1 }, // Mobile View
            640: { slidesPerView: 1 }, // Tablet View
            1024: { slidesPerView: 1 }, // Desktop View
        }, className: "rounded-lg overflow-hidden", children: images.map((image, idx) => (_jsx(SwiperSlide, { children: _jsxs(motion.div, { className: "relative bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105", whileHover: { scale: 1.02 }, children: [_jsx(LazyLoadImage, { className: "w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity", src: image.src, alt: image.alt, effect: "blur" }), _jsx("div", { className: "absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-center rounded-b-lg", children: _jsx("p", { className: "text-sm", children: image.alt }) })] }) }, idx))) }));
};
export default Gallery;
