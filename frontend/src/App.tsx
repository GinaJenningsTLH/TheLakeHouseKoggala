import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/things-to-do" element={<ThingsToDo/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/places-to-visit" element={<PlacesToVisit/>}/>
        <Route path="/lake-view-indoor" element={<LakeViewIndoor/>}/>
        <Route path="/lake-view-outdoor" element={<LakeViewOutdoor/>}/>
        <Route path="/garden-view-indoor" element={<GardenViewIndoor/>}/>
        <Route path="/garden-view-outdoor" element={<GardenViewOutdoor/>}/>
      </Routes>
    </Router>
  );
};

export default App;
