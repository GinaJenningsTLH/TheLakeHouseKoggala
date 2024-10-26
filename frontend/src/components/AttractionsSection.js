import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import kayakingImg from '../assets/kayaking.jpg';
import turtleHatcheryImg from '../assets/turtle-hatchery.jpg';
import museumImg from '../assets/museum.jpg';
const attractions = [
    {
        name: 'Koggala Kayaking',
        description: 'Explore the beautiful Koggala Lake by kayak (Nov - Apr).',
        image: kayakingImg,
    },
    {
        name: 'Turtle Hatchery',
        description: 'Visit the nearby turtle hatchery and learn about conservation efforts.',
        image: turtleHatcheryImg,
    },
    {
        name: 'Martin Wickramasinghe Museum',
        description: 'Discover the cultural heritage of Sri Lanka at this famous museum.',
        image: museumImg,
    },
];
const AttractionsSection = () => {
    return (_jsx("section", { className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Nearby Attractions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: attractions.map((attraction) => (_jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden", children: [_jsx("img", { className: "w-full h-48 object-cover", src: attraction.image, alt: attraction.name, loading: "lazy" // Lazy load images for better performance
                             }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-bold text-xl mb-2", children: attraction.name }), _jsx("p", { className: "text-gray-700", children: attraction.description })] })] }, attraction.name))) })] }) }));
};
export default AttractionsSection;
