import React, { lazy, Suspense, useEffect, useState } from 'react';
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
import GardenViewIndoor from './pages/GardenViewIndoor';
import GardenViewOutdoor from './pages/GardenViewOutdoor';
import ThingsToDo from './pages/ThingsToDo';
import PlacesToVisit from './pages/PlacesToVisit';
import Events from './pages/Event';
import AllRoomsPage from './pages/Villa';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Rates from './pages/Rates';
import Privacy from './pages/Privacy';

// Lazy load the CookieConsentBanner
const CookieConsentBanner = lazy(() => 
  new Promise<{ default: React.FC }>(resolve => {
    setTimeout(() => {
      resolve(import('./components/CookieConsent'));
    }, 2000);
  })
);

const App: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Wait for initial page load before showing cookie banner
    window.addEventListener('load', () => {
      setShowCookieBanner(true);
    });

    return () => {
      window.removeEventListener('load', () => {
        setShowCookieBanner(true);
      });
    };
  }, []);

  return (
    <>
      <Router basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/things-to-do" element={<ThingsToDo/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/villa" element={<AllRoomsPage/>}/>
          <Route path="/places-to-visit" element={<PlacesToVisit/>}/>
          <Route path="/lake-view-indoor" element={<LakeViewIndoor/>}/>
          <Route path="/lake-view-outdoor" element={<LakeViewOutdoor/>}/>
          <Route path="/garden-view-indoor" element={<GardenViewIndoor/>}/>
          <Route path="/garden-view-outdoor" element={<GardenViewOutdoor/>}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/privacy" element={<Privacy />} />
          
        </Routes>
      </Router>
      
      {showCookieBanner && (
        <Suspense fallback={null}>
          <CookieConsentBanner />
        </Suspense>
      )}
    </>
  );
};

export default App;
