import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';
import Footer from '../components/Footer';
const roomsData = [
    {
        title: 'Lake View Room',
        description: 'A serene room with a stunning view of the lake.',
        image: '/lake-view-room.jpg',
        price: '$200 per night',
    },
    {
        title: 'Garden Room',
        description: 'Relax in the midst of a beautiful garden.',
        image: '/garden-room.jpg',
        price: '$180 per night',
    },
    {
        title: 'Luxury Suite',
        description: 'Our most comfortable room with private pool access.',
        image: '/luxury-suite.jpg',
        price: '$350 per night',
    },
];
const Rooms = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto py-20", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-8", children: "Our Rooms & Suites" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: roomsData.map((room) => (_jsx(RoomCard, { ...room }, room.title))) })] }), _jsx(Footer, {})] }));
};
export default Rooms;
