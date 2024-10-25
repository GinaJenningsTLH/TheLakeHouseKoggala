import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faWifi, faSnowflake, faGlassMartini, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
const GardenViewIndoor = () => {
    const images = [
        { src: '/room1.jpg', alt: 'Room 1' },
        { src: '/room2.jpg', alt: 'Room 2' },
        { src: '/room3.jpg', alt: 'Room 3' },
        { src: '/room4.jpg', alt: 'Room 4' },
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
    return (_jsxs("div", { className: 'flex flex-col min-h-screen', children: [_jsx(Navbar, {}), _jsx("div", { className: "relative h-screen bg-cover bg-center", style: { backgroundImage: 'url(/room1.jpg)' }, children: _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "Lake View Room (Indoor Shower)" }), _jsx("p", { className: "text-lg md:text-xl text-gray-200 mt-4", children: "Experience luxury and serenity with an exquisite view of Koggala Lake." }), _jsx("a", { href: "/book", className: "mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg md:text-xl transition transform hover:scale-105", children: "Book Now" })] }) }), _jsxs("div", { className: "container mx-auto py-16 px-4", children: [_jsx("div", { className: "mb-12", children: _jsx(AwesomeSlider, { animation: "foldOutAnimation", children: images.map((image, index) => (_jsx("div", { "data-src": image.src, children: _jsx("img", { src: image.src, alt: image.alt, className: "w-full h- object-cover rounded" }) }, index))) }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16", children: [_jsxs("div", { className: 'border border-gray-300 shadow-lg rounded-lg', children: [_jsx("h2", { className: "px-4 py-3 text-2xl font-bold leading-10 bg-[#FFE8A2] rounded-t-lg", children: "Lake View Room (Indoor Shower)" }), _jsx("p", { className: "px-4 py-6 text-lg text-gray-600", children: "Our Lake View Room offers a stunning view of Koggala Lake. This room is designed to provide comfort and relaxation with its modern amenities and serene environment. Perfect for couples or solo travelers looking for a peaceful retreat." }), _jsxs("div", { className: "px-4 py-2 border-t border-gray-200 flex items-center", children: [_jsx("span", { className: "text-xl font-semibold", children: "Room Size:" }), _jsx("span", { className: "ml-2 text-lg text-gray-600", children: "30 sqm" })] })] }), _jsxs("div", { className: 'border border-gray-300 shadow-lg rounded-lg', children: [_jsx("h3", { className: "px-4 py-3 text-2xl font-bold leading-10 bg-[#FFE8A2] rounded-t-lg", children: "Room Facilities" }), _jsxs("ul", { className: "px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600", children: [_jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faBed, className: "text-darkGreen mr-2" }), "King-size bed"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faShower, className: "text-darkGreen mr-2" }), "Indoor shower"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faSnowflake, className: "text-darkGreen mr-2" }), "Air conditioning"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faWifi, className: "text-darkGreen mr-2" }), "Free Wi-Fi"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faGlassMartini, className: "text-darkGreen mr-2" }), "Mini Bar"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(FontAwesomeIcon, { icon: faConciergeBell, className: "text-darkGreen mr-2" }), "24/7 Room Service"] })] })] })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Amenities" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h4", { className: "text-xl font-bold mb-3", children: "Swimming Pool" }), _jsx("p", { className: "text-gray-600", children: "Relax in our infinity pool overlooking the lake." })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h4", { className: "text-xl font-bold mb-3", children: "Spa & Wellness" }), _jsx("p", { className: "text-gray-600", children: "Unwind with a range of wellness treatments." })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h4", { className: "text-xl font-bold mb-3", children: "Fine Dining" }), _jsx("p", { className: "text-gray-600", children: "Indulge in fresh, local cuisine with a view." })] })] })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-center", children: "Guest Reviews" }), _jsx(Slider, { ...sliderSettings, children: reviews.map((review, index) => (_jsx("div", { className: "p-4", children: _jsxs("div", { className: "bg-gray-100 p-6 rounded-lg h-48 shadow-md", children: [_jsxs("p", { className: "text-gray-600 italic", children: ["\"", review.text, "\""] }), _jsxs("p", { className: "mt-3 font-bold text-gray-700", children: ["- ", review.name] })] }) }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-center", children: "Other Rooms You May Like" }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx("img", { src: "/related-room1.jpg", alt: "Garden View Room", className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "text-xl font-bold", children: "Garden View Room" }), _jsx("p", { className: "text-gray-600 mt-2", children: "A tranquil garden view with modern amenities." }), _jsx("a", { href: "/rooms/garden-view", className: "block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105", children: "View Details" })] })] }), _jsxs("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: [_jsx("img", { src: "/related-room2.jpg", alt: "Lake View Suite", className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-6", children: [_jsx("h4", { className: "text-xl font-bold", children: "Lake View Suite" }), _jsx("p", { className: "text-gray-600 mt-2", children: "A luxurious suite with private access to the pool." }), _jsx("a", { href: "/rooms/lake-view-suite", className: "block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105", children: "View Details" })] })] })] })] })] }), _jsx(Footer, {})] }));
};
export default GardenViewIndoor;
