import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faWifi, faConciergeBell, faLeaf, faFan, faCouch, faUtensils, faSwimmer, faSpa, faTableTennis, faCocktail } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';
import room4 from '../assets/images/room4.jpg';

const roomNames = [
  "Lake View Room (Indoor Shower)",
  "Lake View Room (Outdoor Shower)",
  "Garden View Room (Indoor Shower)",
  "Garden View Room (Outdoor Shower)"
];

const AllRoomsPage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* Hero Section - Villa Promotion */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${room1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-2">Exclusive Villa Experience</h1>
          <p className="text-xl text-gray-200 mt-2">Book the entire villa with 4 luxurious rooms, 6 dedicated staff, and private lake views.</p>
          <a
            href="/book-villa"
            className="mt-6 bg-[#9ABA12] hover:bg-[#7B940E] text-white py-3 px-8 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            Book the Entire Villa
          </a>
        </div>
      </div>

      {/* About the Villa */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">About Our Villa</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Discover ultimate luxury and relaxation with our exclusive villa. With 4 unique rooms offering lake and garden views,
          and 6 staff members ready to attend to your every need, this is the perfect retreat for families, groups, or couples seeking privacy and elegance.
        </p>
        <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
          Nestled in a pristine natural setting, our villa combines modern luxury with eco-conscious design. Located near Koggala Lake, guests can indulge in
          spectacular sunsets, cooling breezes, and lush surroundings.
        </p>
      </section>

      {/* Cooling System Highlight Strip */}
      <div className="bg-[#9ABA12] text-white py-6">
        <div className="container mx-auto text-center">
          <FontAwesomeIcon icon={faLeaf} className="text-3xl mb-2" />
          <h3 className="text-2xl font-bold mb-2">Natural Cooling System</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Our villa is designed with a unique natural cooling system that leverages the lake breeze and eco-friendly architecture to maintain a comfortable temperature, ensuring a refreshing stay.
          </p>
        </div>
      </div>

      {/* Rooms Gallery Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-8">Our Rooms</h2>
        <AwesomeSlider animation="foldOutAnimation">
          {[room1, room2, room3, room4].map((image, idx) => (
            <div key={idx} data-src={image}>
              <LazyLoadImage
                src={image}
                alt={`Room ${idx + 1}`}
                effect="blur"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </AwesomeSlider>
        <div className="mt-8 text-center">
  <h3 className="text-2xl font-semibold text-gray-800 pt-6 mb-8">Available Rooms</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {roomNames.map((name, index) => (
      <div
        key={index}
        className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200"
      >
        <FontAwesomeIcon icon={faBed} className="text-[#9ABA12] mr-2" />
        <span className="text-lg text-gray-600">{name}</span>
      </div>
    ))}
  </div>
</div>
      </section>

      {/* Villa Facilities Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#9ABA12] mb-4">Room Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faLeaf} className="text-4xl text-[#9ABA12] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Natural Cooling System</h3>
            <p className="text-gray-600 mt-2">
              Our villa captures lake breezes for a naturally cool environment, minimizing energy use.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faFan} className="text-4xl text-[#9ABA12] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Fans</h3>
            <p className="text-gray-600 mt-2">
              Ceiling fans in every room complement the villa's natural cooling system.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faCouch} className="text-4xl text-[#9ABA12] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Sitting and Dining Area</h3>
            <p className="text-gray-600 mt-2">
              Spacious areas designed for relaxation and intimate gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Villa Activities Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#9ABA12] mb-4">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={faSwimmer} className="text-3xl text-[#9ABA12] mr-4" />
            <span className="text-lg text-gray-800">Swimming Pool</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={faSpa} className="text-3xl text-[#9ABA12] mr-4" />
            <span className="text-lg text-gray-800">Masseuse (On-Request)</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={faTableTennis} className="text-3xl text-[#9ABA12] mr-4" />
            <span className="text-lg text-gray-800">Table Tennis</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={faCocktail} className="text-3xl text-[#9ABA12] mr-4" />
            <span className="text-lg text-gray-800">Bartender (BYO Alcohol)</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            <FontAwesomeIcon icon={faUtensils} className="text-3xl text-[#9ABA12] mr-4" />
            <span className="text-lg text-gray-800">Dining (Charged at Cost)</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllRoomsPage;
