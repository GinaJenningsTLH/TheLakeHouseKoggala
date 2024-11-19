import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faWifi, faGlassMartini, faConciergeBell, faFan, faUtensils, faCocktail, faTableTennis, faSpa, faSwimmer } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import images directly
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';
import room4 from '../assets/images/room4.jpg';
import relatedRoom1 from '../assets/images/room1.jpg';
import relatedRoom2 from '../assets/images/room1.jpg';
import BookingForm from '../components/BookingForm';
const LakeViewIndoor = () => {
    const images = [
        { src: room1, alt: 'Room 1' },
        { src: room2, alt: 'Room 2' },
        { src: room3, alt: 'Room 3' },
        { src: room4, alt: 'Room 4' },
    ];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const reviews = [
        { text: "An absolutely serene experience. The view, the room, the service—everything was perfect!", name: "Jane Doe" },
        { text: "A peaceful retreat with excellent facilities. Highly recommend the private balcony with lake views!", name: "John Smith" },
        { text: "The perfect getaway for a weekend. Great views, great service, and a truly relaxing atmosphere.", name: "Emily Johnson" },
        { text: "Stunning views and beautiful surroundings. The staff was extremely attentive and friendly.", name: "Michael Brown" },
        { text: "We loved the peaceful setting and the amazing service. Perfect for a quiet weekend away.", name: "Sarah Davis" },
        { text: "The lake view is breathtaking, and the room was spotless. Definitely worth visiting again!", name: "Chris Wilson" },
        { text: "Highly recommend this place for anyone looking for a tranquil escape. Five-star service!", name: "Anna Taylor" },
        { text: "The best experience I've had in a long time. Beautiful rooms and exceptional service.", name: "David Lee" },
    ];
    return (_jsxs("div", { className: 'flex flex-col min-h-screen', children: [_jsx(Navbar, {}), _jsx("div", { className: "relative h-screen bg-cover bg-center", style: { backgroundImage: `url(${room1})` }, children: _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center", children: [_jsx("h1", { className: "text-4xl md:text-5xl   font-bold text-white mb-4", children: "Lake View Room (Indoor Shower)" }), _jsx("p", { className: "text-lg md:text-xl text-gray-200 mt-4", children: "Experience luxury and serenity with an exquisite view of Koggala Lake." }), _jsx("a", { href: "/book", className: "mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg md:text-xl transition transform hover:scale-105", children: "Book Now" })] }) }), _jsxs("div", { className: "container mx-auto py-16 px-4", children: [_jsx("div", { className: "mb-12", children: _jsx(AwesomeSlider, { animation: "foldOutAnimation", children: images.map((image, index) => (_jsx("div", { "data-src": image.src, children: _jsx(LazyLoadImage, { src: image.src, alt: image.alt, effect: "blur", className: "w-full h-auto object-cover rounded" }) }, index))) }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16", children: [_jsxs("div", { className: 'border border-gray-300 shadow-lg rounded-lg', children: [_jsx("h2", { className: "px-4 py-3 text-2xl font-bold text-[#5F9540] leading-10 bg-gray-200 rounded-t-lg", children: "Lake View Room (Indoor Shower)" }), _jsx("p", { className: "px-4 py-6 text-lg text-gray-600", children: "Our Lake View Room offers a stunning view of Koggala Lake. This room is designed to provide comfort and relaxation with its modern amenities and serene environment. Perfect for couples or solo travelers looking for a peaceful retreat." }), _jsxs("div", { className: "px-4 py-2 border-t border-gray-200 flex items-center", children: [_jsx("span", { className: "text-xl font-semibold", children: "Room Size:" }), _jsx("span", { className: "ml-2 text-lg text-gray-600", children: "30 sqm" })] })] }), _jsxs("div", { className: 'border border-gray-300 shadow-lg rounded-lg', children: [_jsx("h3", { className: "px-4 py-3 text-2xl font-bold text-[#5F9540] leading-10 bg-gray-200 rounded-t-lg", children: "Room Facilities" }), _jsxs("ul", { className: "px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600", children: [_jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faBed, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "King-size bed"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faShower, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "Indoor shower"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faFan, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "Ceiling Fan"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faWifi, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "Free Wi-Fi"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faGlassMartini, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "Mini Bar"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faConciergeBell, style: { color: "#669c35", }, className: "text-darkGreen mr-2" }), "24/7 Room Service"] })] })] })] }), _jsx("div", { className: "text-center mb-16", children: _jsx("a", { href: "/villa", className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-6 rounded-lg transition transform hover:scale-105 inline-block", children: "Explore Full Villa" }) }), _jsxs("section", { className: "container mx-auto py-16 px-6 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-4", children: "Activities" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8", children: [_jsxs("div", { className: "p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faSwimmer, className: "text-3xl text-[#9ABA12] mr-4" }), _jsx("span", { className: "text-lg text-gray-800", children: "Swimming Pool" })] }), _jsxs("div", { className: "p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faSpa, className: "text-3xl text-[#9ABA12] mr-4" }), _jsx("span", { className: "text-lg text-gray-800", children: "Masseuse (On-Request)" })] }), _jsxs("div", { className: "p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faTableTennis, className: "text-3xl text-[#9ABA12] mr-4" }), _jsx("span", { className: "text-lg text-gray-800", children: "Table Tennis" })] }), _jsxs("div", { className: "p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faCocktail, className: "text-3xl text-[#9ABA12] mr-4" }), _jsx("span", { className: "text-lg text-gray-800", children: "Bartender (BYO Alcohol)" })] }), _jsxs("div", { className: "p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faUtensils, className: "text-3xl text-[#9ABA12] mr-4" }), _jsx("span", { className: "text-lg text-gray-800", children: "Dining (Charged at Cost)" })] })] }), _jsx("div", { className: "text-center", children: _jsx("a", { href: "/things-to-do", className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-6 rounded-lg transition transform hover:scale-105 inline-block", children: "See More" }) })] }), _jsx("section", { id: "booking-form", className: "section-padding bg-lightestGreen mb-6", children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-4", children: "Book Your Stay" }), _jsx("p", { className: "text-darkGreen mb-10 max-w-2xl mx-auto", children: "Fill out the form below to reserve your stay at The Lake House Villa." }), _jsx(BookingForm, {})] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl text-gray-500 font-bold mb-6 text-center", children: "Other Rooms You May Like" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx(LazyLoadImage, { src: relatedRoom1, alt: "Garden View Indoor", effect: "blur", className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "font-bold text-h3 text-[#5F9540] drop-shadow-lg mb-2", children: "Garden View (Indoor Shower)" }), _jsx("p", { className: "text-gray-600 mt-2", children: "A tranquil garden view with modern amenities." }), _jsx("a", { href: "/garden-view-indoor", className: "block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105", children: "View Details" })] })] }), _jsxs("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx(LazyLoadImage, { src: relatedRoom2, alt: "Lake View Outdoor", effect: "blur", className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "font-bold text-h3 text-[#5F9540] drop-shadow-lg mb-2", children: "Lake View (Outdoor Shower)" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Experience luxury with our outdoor shower suite." }), _jsx("a", { href: "/lake-view-outdoor", className: "block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105", children: "View Details" })] })] }), _jsxs("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx(LazyLoadImage, { src: relatedRoom2, alt: "Garden View Outdoor", effect: "blur", className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "font-bold text-h3 text-[#5F9540] drop-shadow-lg mb-2", children: "Garden View (Outdoor Shower)" }), _jsx("p", { className: "text-gray-600 mt-2", children: "A garden view with outdoor shower experience." }), _jsx("a", { href: "/garden-view-outdoor", className: "block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105", children: "View Details" })] })] })] })] })] }), _jsx(Footer, {})] }));
};
export default LakeViewIndoor;
