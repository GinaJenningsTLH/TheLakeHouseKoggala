import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
// Import images from galleryData
import poolView from '../assets/images/Gallery/Pool-overview.jpg';
import villaFrontView from '../assets/images/Gallery/villa-front-view-2.jpg';
import sittingArea from '../assets/images/Gallery/sitting-area.jpg';
import droneView from '../assets/images/Gallery/drone-view-3.jpg';
import centerVilla from '../assets/images/Gallery/center-villa.jpg';
import entrance from '../assets/images/Gallery/entrance.jpg';
import sittingLounge from '../assets/images/Gallery/villa-sitting-lounge.jpg';
import scenery3 from '../assets/images/Gallery/scenery3.jpg';
import scenicView from '../assets/images/Gallery/scenery.jpg';
import treeView from '../assets/images/Gallery/Tree.jpg';
import servingDrinks from '../assets/images/Gallery/serving-drinks.jpg';
import villaDroneView from '../assets/images/Gallery/villa-drone-view.jpg';
const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        { src: poolView, category: 'villa', title: 'Pool View' },
        { src: villaFrontView, category: 'villa', title: 'Villa Front View' },
        { src: sittingArea, category: 'interior', title: 'Sitting Area' },
        { src: droneView, category: 'villa', title: 'Drone View' },
        { src: centerVilla, category: 'villa', title: 'Center of Villa' },
        { src: entrance, category: 'villa', title: 'Villa Entrance' },
        { src: sittingLounge, category: 'interior', title: 'Sitting Lounge' },
        { src: scenery3, category: 'views', title: 'Beautiful Scenery' },
        { src: scenicView, category: 'views', title: 'Scenic View' },
        { src: treeView, category: 'views', title: 'Tree by the Villa' },
        { src: servingDrinks, category: 'interior', title: 'Serving Drinks' },
        { src: villaDroneView, category: 'villa', title: 'Villa Drone View' }
    ];
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'villa', name: 'Villa' },
        { id: 'interior', name: 'Interior' },
        { id: 'views', name: 'Views' }
    ];
    const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(img => img.category === selectedCategory);
    const handlePrevImage = () => {
        setSelectedImage(prev => prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1);
    };
    const handleNextImage = () => {
        setSelectedImage(prev => prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1);
    };
    const handleKeyDown = (e) => {
        if (selectedImage === null)
            return;
        if (e.key === 'ArrowLeft')
            handlePrevImage();
        if (e.key === 'ArrowRight')
            handleNextImage();
        if (e.key === 'Escape')
            setSelectedImage(null);
    };
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, {}), _jsx("div", { className: "relative h-[400px] bg-cover bg-center", style: { backgroundImage: `url(${poolView})` }, children: _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-4", children: "Our Gallery" }), _jsx("p", { className: "text-xl text-gray-200", children: "Explore the beauty of The Lake House Villa" })] }) }), _jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: categories.map(category => (_jsx("button", { onClick: () => setSelectedCategory(category.id), className: `px-6 py-2 rounded-full transition-all ${selectedCategory === category.id
                                ? 'bg-gray-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-white'}`, children: category.name }, category.id))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredImages.map((image, index) => (_jsxs("div", { className: "group relative overflow-hidden rounded-lg shadow-lg cursor-pointer", onClick: () => setSelectedImage(index), children: [_jsx(LazyLoadImage, { src: image.src, alt: image.title, effect: "blur", className: "w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end", children: _jsxs("div", { className: "p-4 w-full text-white", children: [_jsx("h3", { className: "text-xl font-semibold", children: image.title }), _jsx("p", { className: "text-sm capitalize", children: image.category })] }) })] }, index))) })] }), selectedImage !== null && (_jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center", children: [_jsx("button", { className: "absolute top-4 right-4 text-white text-3xl hover:text-gray-300", onClick: () => setSelectedImage(null), children: _jsx(FontAwesomeIcon, { icon: faTimes }) }), _jsx("button", { className: "absolute left-4 text-white text-3xl hover:text-gray-300", onClick: handlePrevImage, children: _jsx(FontAwesomeIcon, { icon: faChevronLeft }) }), _jsxs("div", { className: "max-w-7xl max-h-[90vh] mx-4", children: [_jsx(LazyLoadImage, { src: filteredImages[selectedImage].src, alt: filteredImages[selectedImage].title, effect: "blur", className: "max-w-full max-h-[85vh] object-contain" }), _jsxs("div", { className: "text-white text-center mt-4", children: [_jsx("h3", { className: "text-xl font-semibold", children: filteredImages[selectedImage].title }), _jsx("p", { className: "text-sm capitalize", children: filteredImages[selectedImage].category })] })] }), _jsx("button", { className: "absolute right-4 text-white text-3xl hover:text-gray-300", onClick: handleNextImage, children: _jsx(FontAwesomeIcon, { icon: faChevronRight }) })] })), _jsx(Footer, {})] }));
};
export default Gallery;
