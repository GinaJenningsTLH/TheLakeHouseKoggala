import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollTotop'; // Import the component
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Experiences from './pages/Experiences';
import Dining from './pages/Dining';
import Contact from './pages/Contact';
import About from './pages/About';
import LakeViewIndoor from './pages/LakeViewIndoor';
import LakeViewOutdoor from './pages/LakeViewOutdoor';
import GardenViewIndoor from './pages/GradenViewIndoor';
import GardenViewOutdoor from './pages/GardenViewOutdoor';
import ThingsToDo from './pages/ThingsToDo';
import PlacesToVisit from './pages/PlacesToVisit';
import Events from './pages/Event';
const App = () => {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), " ", _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/rooms", element: _jsx(Rooms, {}) }), _jsx(Route, { path: "/experiences", element: _jsx(Experiences, {}) }), _jsx(Route, { path: "/dining", element: _jsx(Dining, {}) }), _jsx(Route, { path: "/things-to-do", element: _jsx(ThingsToDo, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/events", element: _jsx(Events, {}) }), _jsx(Route, { path: "/places-to-visit", element: _jsx(PlacesToVisit, {}) }), _jsx(Route, { path: "/lake-view-indoor", element: _jsx(LakeViewIndoor, {}) }), _jsx(Route, { path: "/lake-view-outdoor", element: _jsx(LakeViewOutdoor, {}) }), _jsx(Route, { path: "/garden-view-indoor", element: _jsx(GardenViewIndoor, {}) }), _jsx(Route, { path: "/garden-view-outdoor", element: _jsx(GardenViewOutdoor, {}) })] })] }));
};
export default App;
