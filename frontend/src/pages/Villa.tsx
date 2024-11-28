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

import room1 from '../assets/images/room1-large.jpg';
import room2 from '../assets/images/room2-large.jpg';
import room3 from '../assets/images/room3-large.jpg';
import room4 from '../assets/images/room4-large.jpg';
import BookingForm from '../components/BookingForm';

const roomNames = [
  "Lake View Room (Indoor Shower)",
  "Lake View Room (Outdoor Shower)",
  "Courtyard Room (Indoor shower )",
  "Courtyard Room (outdoor shower )",
  "Twin Room"
];

const AllRoomsPage: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* Hero Section - Villa Promotion */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${room1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-2"> Villa Experience</h1>
          <p className="text-xl text-gray-200 mt-2">Book the entire villa with 4 luxurious rooms, 6 dedicated staff, and private lake views.</p>
          <a
            onClick={scrollToBooking}
            className="mt-6 bg-gray-500 hover:bg-gray-200 hover:text-gray-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition transform hover:scale-105 cursor-pointer"
          >
            Book the Entire Villa
          </a>
        </div>
      </div>

      {/* About the Villa */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">About Our Villa</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
        Indulge in the calm and comfort of our exquisite villa. Boasting four distinct bedrooms with direct lake views or private
garden courtyards and a further twin room is available on request. A dedicated team of six professional staff members
will be at your service. This sanctuary is ideal for families, groups, or couples in search of seclusion and privacy and
sophisticated surroundings, while being close to the action of Galle and Ahangama nearby.
        </p>
        <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
        We have designed the villa to blend seamlessly with the natural surroundings, offering a serene escape from the hustle
and bustle of everyday life. The direct access to Koggala Lake allows our guests to immerse themselves in the beauty of
the area and enjoy a range of outdoor activities such as boat trips, bird watching and sunsets. This is a perfect setting for
those seeking a peaceful and rejuvenating retreat, but with easy access to the many bars and restaurants nearby.
        </p>
      </section>

      {/* Cooling System Highlight Strip */}
      <div className="bg-[#9ABA12] text-white py-6">
        <div className="container mx-auto text-center">
          <FontAwesomeIcon icon={faLeaf} className="text-3xl mb-2" />
          <h3 className="text-2xl font-bold mb-2">Natural Cooling System</h3>
          <p className="text-lg max-w-3xl mx-auto">
            The villa is designed with a unique natural cooling system that leverages the lake breeze and eco-friendly architecture to maintain a comfortable temperature, ensuring a refreshing stay.
          </p>
        </div>
      </div>

      {/* Rooms Gallery Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-500 text-center mb-8">Our Rooms</h2>
        <div className="w-full">
          <AwesomeSlider 
            animation="foldOutAnimation"
            className="h-[300px] md:h-[500px] lg:h-[760px] custom-slider"
            bullets={false}
            organicArrows={true}
            infinite={true}
            buttons={true}
            buttonContentLeft={
              <div className="custom-arrow custom-arrow-left">
                <span>‹</span>
              </div>
            }
            buttonContentRight={
              <div className="custom-arrow custom-arrow-right">
                <span>›</span>
              </div>
            }
          >
            {[room1, room2, room3, room4].map((image, idx) => (
              <div key={idx} className="w-full h-full">
                <LazyLoadImage
                  src={image}
                  alt={`Room ${idx + 1}`}
                  effect="blur"
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-500 pt-6 mb-8">Available Rooms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {roomNames.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200"
              >
                <FontAwesomeIcon icon={faBed} className="text-gray-500 mr-2" />
                <span className="text-lg text-gray-600">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Facilities Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">Room Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faLeaf} className="text-4xl text-[#9ABA12] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Natural Cooling System</h3>
            <p className="text-gray-600 mt-2">
              Our villa captures lake breezes for a naturally cool environment, minimizing energy use.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faFan} className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Fans</h3>
            <p className="text-gray-600 mt-2">
            Ceiling fans in every room underlines the villa's natural cooling system and a commitment to the environment. 

            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faCouch} className="text-4xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Sitting and Dining Area</h3>
            <p className="text-gray-600 mt-2">
            Spacious open living areas throughout the villa provide direct views over the lake.
            </p>
          </div>
        </div>
      </section>

      {/* Villa Activities Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-500 mb-4">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* <FontAwesomeIcon icon={faSwimmer} className="text-3xl text-gray-500 mr-4" /> */}
            <span className="text-lg text-gray-800">Swimming Pool</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* <FontAwesomeIcon icon={faSpa} className="text-3xl text-gray-500 mr-4" /> */}
            <span className="text-lg text-gray-800">Masseuse (On-Request)</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* <FontAwesomeIcon icon={faTableTennis} className="text-3xl text-gray-500 mr-4" /> */}
            <span className="text-lg text-gray-800">Table Tennis</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* <FontAwesomeIcon icon={faCocktail} className="text-3xl text-gray-500 mr-4" /> */}
            <span className="text-lg text-gray-800">Bartender (BYO Alcohol)</span>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* <FontAwesomeIcon icon={faUtensils} className="text-3xl text-gray-500 mr-4" /> */}
            <span className="text-lg text-gray-800">Dining (Charged at Cost)</span>
          </div>
        </div>
      </section>

      <section
          id="booking-form"
          className="section-padding bg-lightestGreen mb-6"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">Book Your Stay</h2>
            <p className="text-darkGreen mb-10 max-w-2xl mx-auto">
            Fill out form to enquire about your stay at The Lake House
            </p>
            <BookingForm />
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default AllRoomsPage;
