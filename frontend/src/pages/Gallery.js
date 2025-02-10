import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
// Import all images from GalleryMain folder
import centerVillaTree from '../assets/images/GalleryMain/center-villa-tree.webp';
import centreVillaTreeDry from '../assets/images/GalleryMain/centre-villa-tree-dry.webp';
import drinksAreaView from '../assets/images/GalleryMain/drinks-area-view.webp';
import foodServed from '../assets/images/GalleryMain/food-served.webp';
import gardenLakeView from '../assets/images/GalleryMain/garden-and-lake-view.webp';
import jettyLakeView from '../assets/images/GalleryMain/jetty-with-lake-view.webp';
import lakeViewRoom from '../assets/images/GalleryMain/lake-view-from-room.webp';
import lakeViewGarden from '../assets/images/GalleryMain/lake-view-with-garden.webp';
import outdoorShower from '../assets/images/GalleryMain/outdoor-shower-room.webp';
import poolDrinksArea from '../assets/images/GalleryMain/pool-view-with-drinks-area.webp';
import poolGardenVilla from '../assets/images/GalleryMain/pool-view-with-garden-and-villa.webp';
import roomFrontView from '../assets/images/GalleryMain/room-front-view.webp';
import roomSideView from '../assets/images/GalleryMain/room-side-view.webp';
import poolSideView from '../assets/images/GalleryMain/side-view-of-pool.webp';
import sittingAreaInside from '../assets/images/GalleryMain/sitting-area-inside-view.webp';
import roomSideViewSlightly from '../assets/images/GalleryMain/slightly-side-room-view.webp';
import srilankanFood from '../assets/images/GalleryMain/Srilankan-food-prepared.webp';
import staffCenter from '../assets/images/GalleryMain/staff-center-of-villa.webp';
import staffServing from '../assets/images/GalleryMain/staff-serving-drinks.webp';
import villaEntrance from '../assets/images/GalleryMain/the-lake-house-entrance.webp';
import treeCentre from '../assets/images/GalleryMain/tree-centre-of-the-villa.webp';
import villaSunbeams from '../assets/images/GalleryMain/villa-with-sunbeams-view.webp';
import lobbyinsidesitting from '../assets/images/GalleryMain/lobby-inside-sitting.webp';
import entrancewithgarden from '../assets/images/GalleryMain/entrance-with-garden.webp';
import sideviewsittingarea from '../assets/images/GalleryMain/side-view-sitting-area.webp';
import tabletennis from '../assets/images/GalleryMain/table-tennis-outside.webp';
import villasittingview from '../assets/images/GalleryMain/view-from-villa-sitting-area.webp';
import villapoolview from '../assets/images/GalleryMain/vila-pool-lake-view.webp';
import villasideviewland from '../assets/images/GalleryMain/villa-side-view-land.webp';
import sunbeamsvilla from '../assets/images/GalleryMain/sunbeams-villa.webp';
import villatreefullgrown from '../assets/images/GalleryMain/villa-center-tree-fully-grown.webp';
import villaentranceview from '../assets/images/GalleryMain/villa-entrance-side-view.webp';
import sunbeamlake from '../assets/images/GalleryMain/villa-sunbeam-lake-view.webp';
import peacock from '../assets/images/GalleryMain/peacock.webp';
import birdtree from '../assets/images/GalleryMain/bird-on-tree.webp';
import dronshot2 from '../assets/images/GalleryMain/drone-shot-2.webp';
import dronshot3 from '../assets/images/GalleryMain/drone-shot-3.webp';
import droneshot from '../assets/images/GalleryMain/drone-shot.webp';
import ptBoatForLake from '../assets/images/GalleryMain/pt-boat-for-lake.webp';
import ptEntranceViewInside from '../assets/images/GalleryMain/pt-entrance-view-inside.webp';
import ptEntrance from '../assets/images/GalleryMain/pt-entrance.webp';
import ptJettyAndGarden from '../assets/images/GalleryMain/pt-jetty-and-garden.webp';
import ptJettyLakeView from '../assets/images/GalleryMain/pt-jetty-lake-view.webp';
import ptLakeHouseGate from '../assets/images/GalleryMain/pt-lake-house-gate.webp';
import ptLobbyView from '../assets/images/GalleryMain/pt-lobby-view.webp';
import ptPoolAndLakeView from '../assets/images/GalleryMain/pt-pool-and-lake-view.webp';
import ptPoolAndVillaView from '../assets/images/GalleryMain/pt-pool-and-villa-view.webp';
import ptPoolSideView from '../assets/images/GalleryMain/pt-pool-side-view.webp';
import ptSidePoolView from '../assets/images/GalleryMain/pt-side-pool-view.webp';
import ptSittingAreaView from '../assets/images/GalleryMain/pt-sitting-area-view.webp';
import ptVillaCenterView from '../assets/images/GalleryMain/pt-villa-center-view.webp';
import ptlakeboatview from '../assets/images/GalleryMain/pt-lake-boat-view.webp';
import ptshowerview from '../assets/images/GalleryMain/pt-shower.webp';
import pttuk from '../assets/images/GalleryMain/pt-tuk.webp';
import ptview2 from '../assets/images/GalleryMain/pt-view-2.webp';
import ptcraft from '../assets/images/GalleryMain/pt-craft.webp';
import ptdoorview from '../assets/images/GalleryMain/pt-doorview.webp';
import ptflowerred from '../assets/images/GalleryMain/pt-flower-red.webp';
import ptsittingchair from '../assets/images/GalleryMain/pt-sitting-chairs.webp';
import pttennis from '../assets/images/GalleryMain/pt-tennis-table.webp';
import ptvillaside from '../assets/images/GalleryMain/pt-villa-side.webp';
const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const landscapeImages = [
        // Villa Views
        { src: villaEntrance, category: 'villa', title: 'Villa Entrance' },
        { src: villaSunbeams, category: 'villa', title: 'Villa with Sunbeams' },
        { src: centerVillaTree, category: 'villa', title: 'Center Villa Tree' },
        { src: centreVillaTreeDry, category: 'villa', title: 'Villa Tree View' },
        { src: treeCentre, category: 'villa', title: 'Tree Centre View' },
        { src: poolDrinksArea, category: 'pool', title: 'Pool with Drinks Area' },
        { src: poolGardenVilla, category: 'pool', title: 'Pool with Garden and Villa' },
        { src: poolSideView, category: 'pool', title: 'Side View of Pool' },
        { src: roomFrontView, category: 'rooms', title: 'Room Front View' },
        { src: roomSideView, category: 'rooms', title: 'Room Side View' },
        { src: roomSideViewSlightly, category: 'rooms', title: 'Room View' },
        { src: lakeViewRoom, category: 'rooms', title: 'Lake View from Room' },
        { src: outdoorShower, category: 'rooms', title: 'Outdoor Shower Room' },
        { src: gardenLakeView, category: 'lake', title: 'Garden and Lake View' },
        { src: jettyLakeView, category: 'lake', title: 'Jetty with Lake View' },
        { src: lakeViewGarden, category: 'lake', title: 'Lake View with Garden' },
        { src: sittingAreaInside, category: 'villa', title: 'Indoor Sitting Area' },
        { src: staffCenter, category: 'villa', title: 'Villa Staff Center' },
        { src: drinksAreaView, category: 'dining', title: 'Drinks Area' },
        { src: foodServed, category: 'dining', title: 'Food Service' },
        { src: srilankanFood, category: 'dining', title: 'Sri Lankan Cuisine' },
        { src: staffServing, category: 'dining', title: 'Drink Service' },
        { src: lobbyinsidesitting, category: 'villa', title: 'Lobby Inside Sitting' },
        { src: entrancewithgarden, category: 'villa', title: 'Entrance with Garden' },
        { src: sideviewsittingarea, category: 'villa', title: 'Side View Sitting Area' },
        { src: tabletennis, category: 'villa', title: 'Table Tennis Outside' },
        { src: villasittingview, category: 'villa', title: 'Villa from Sitting Area' },
        { src: villapoolview, category: 'villa', title: 'Villa Pool View' },
        { src: villasideviewland, category: 'villa', title: 'Villa Side View Land' },
        { src: dronshot2, category: 'villa', title: 'Drone Shot 2' },
        { src: dronshot3, category: 'villa', title: 'Drone Shot 3' },
        { src: droneshot, category: 'villa', title: 'Drone Shot' },
        { src: sunbeamsvilla, category: 'villa', title: 'Sunbeams Villa' },
        { src: villatreefullgrown, category: 'villa', title: 'Villa Center Tree Fully Grown' },
        { src: villaentranceview, category: 'villa', title: 'Villa Entrance View' },
        { src: sunbeamlake, category: 'lake', title: 'Villa Sunbeam Lake View' },
        { src: peacock, category: 'villa', title: 'Peacock' },
        { src: birdtree, category: 'villa', title: 'Bird on Tree' },
    ];
    const portraitImages = [
        { src: ptBoatForLake, category: 'lake', title: 'Boat on the Lake' },
        { src: ptEntranceViewInside, category: 'interior', title: 'Villa Entrance Interior' },
        { src: ptEntrance, category: 'villa', title: 'Villa Entrance View' },
        { src: ptJettyAndGarden, category: 'lake', title: 'Jetty and Garden View' },
        { src: ptJettyLakeView, category: 'lake', title: 'Jetty Lake View' },
        { src: ptLakeHouseGate, category: 'villa', title: 'Lake House Gate' },
        { src: ptLobbyView, category: 'villa', title: 'Lobby View' },
        { src: ptPoolAndLakeView, category: 'pool', title: 'Pool and Lake View' },
        { src: ptPoolAndVillaView, category: 'pool', title: 'Pool and Villa View' },
        { src: ptPoolSideView, category: 'pool', title: 'Pool Side View' },
        { src: ptSidePoolView, category: 'pool', title: 'Side Pool View' },
        { src: ptSittingAreaView, category: 'villa', title: 'Sitting Area View' },
        { src: ptVillaCenterView, category: 'villa', title: 'Villa Center View' },
        { src: ptlakeboatview, category: 'lake', title: 'Lake Boat View' },
        { src: ptshowerview, category: 'villa', title: 'Shower View' },
        { src: pttuk, category: 'villa', title: 'Tuk Tuk View' },
        { src: ptview2, category: 'villa', title: 'View 2' },
        { src: ptdoorview, category: 'villa', title: 'Door View' },
        { src: ptflowerred, category: 'villa', title: 'Flower Red' },
        { src: ptsittingchair, category: 'villa', title: 'Sitting Chair' },
        { src: pttennis, category: 'villa', title: 'Table Tennis' },
        { src: ptvillaside, category: 'villa', title: 'Villa Side' },
        { src: ptcraft, category: 'villa', title: 'Craft' },
    ];
    const allImages = [...landscapeImages, ...portraitImages];
    const filteredImages = selectedCategory === 'all'
        ? allImages
        : allImages.filter(img => img.category === selectedCategory);
    const categories = [
        { id: 'all', name: 'All' },
    ];
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
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, {}), _jsx("div", { className: "relative h-[400px] bg-cover bg-center", style: { backgroundImage: `url(${poolGardenVilla})` }, children: _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center", children: [_jsx("h1", { className: "text-5xl font-bold text-white mb-4", children: "Our Gallery" }), _jsx("p", { className: "text-xl text-gray-200", children: "Explore the beauty of The Lake House Villa" })] }) }), _jsxs("div", { className: "container mx-auto py-8 px-4", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: categories.map(category => (_jsx("button", { onClick: () => setSelectedCategory(category.id), className: `px-6 py-2 rounded-full transition-all ${selectedCategory === category.id
                                ? 'bg-gray-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-white'}`, children: category.name }, category.id))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: landscapeImages
                            .filter(img => selectedCategory === 'all' || img.category === selectedCategory)
                            .map((image, index) => (_jsxs("div", { className: "group relative overflow-hidden rounded-lg shadow-lg cursor-pointer", onClick: () => setSelectedImage(index), children: [_jsx(LazyLoadImage, { src: image.src, alt: image.title, effect: "blur", className: "w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" })] }, `landscape-${index}`))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6", children: portraitImages
                            .filter(img => selectedCategory === 'all' || img.category === selectedCategory)
                            .map((image, index) => (_jsxs("div", { className: "group relative overflow-hidden rounded-lg shadow-lg cursor-pointer", onClick: () => setSelectedImage(landscapeImages.length + index), children: [_jsx(LazyLoadImage, { src: image.src, alt: image.title, effect: "blur", className: "w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" })] }, `portrait-${index}`))) })] }), selectedImage !== null && (_jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center", children: [_jsx("button", { className: "absolute top-4 right-4 text-white text-3xl hover:text-gray-300", onClick: () => setSelectedImage(null), children: _jsx(FontAwesomeIcon, { icon: faTimes }) }), _jsx("button", { className: "absolute left-4 text-white text-3xl hover:text-gray-300", onClick: handlePrevImage, children: _jsx(FontAwesomeIcon, { icon: faChevronLeft }) }), _jsx("div", { className: "max-w-7xl max-h-[90vh] mx-4", children: _jsx(LazyLoadImage, { src: filteredImages[selectedImage].src, alt: filteredImages[selectedImage].title, effect: "blur", className: "max-w-full max-h-[85vh] object-contain" }) }), _jsx("button", { className: "absolute right-4 text-white text-3xl hover:text-gray-300", onClick: handleNextImage, children: _jsx(FontAwesomeIcon, { icon: faChevronRight }) })] })), _jsx(Footer, {})] }));
};
export default Gallery;
