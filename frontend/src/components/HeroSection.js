import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowDownCircle } from "react-icons/io5";
import '../styles/critical.css';
import sittingView from '../assets/images/Gallery/sitting-area.webp';
const HeroSection = () => {
    // Preload hero image
    React.useEffect(() => {
        const img = new Image();
        img.src = sittingView;
    }, []);
    const scrollToNextSection = () => {
        document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (_jsxs("section", { className: "hero-section", style: {
            backgroundImage: `url(${sittingView})`,
            contentVisibility: 'auto',
            containIntrinsicSize: '100vh'
        }, children: [_jsx("div", { className: "hero-overlay" }), _jsxs("div", { className: "hero-content", children: [_jsx(motion.h1, { className: "hero-title", initial: { opacity: 0, x: -200 }, animate: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1, ease: "easeOut" }
                        }, children: "THE LAKE HOUSE" }), _jsx(motion.button, { onClick: scrollToNextSection, className: "absolute bottom-12 text-white hover:text-gray-500 transition-colors duration-300", initial: { opacity: 0, y: 20 }, animate: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                ease: "easeOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 0.5
                            }
                        }, "aria-label": "Scroll to next section", children: _jsx(IoArrowDownCircle, { style: { width: '4rem', height: '4rem' } }) })] })] }));
};
export default HeroSection;
