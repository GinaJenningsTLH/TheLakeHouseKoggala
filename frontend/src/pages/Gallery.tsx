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

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    // Villa Views
    { src: villaEntrance, category: 'villa', title: 'Villa Entrance' },
    { src: villaSunbeams, category: 'villa', title: 'Villa with Sunbeams' },
    { src: centerVillaTree, category: 'villa', title: 'Center Villa Tree' },
    { src: centreVillaTreeDry, category: 'villa', title: 'Villa Tree View' },
    { src: treeCentre, category: 'villa', title: 'Tree Centre View' },
    
    // Pool Views
    { src: poolDrinksArea, category: 'pool', title: 'Pool with Drinks Area' },
    { src: poolGardenVilla, category: 'pool', title: 'Pool with Garden and Villa' },
    { src: poolSideView, category: 'pool', title: 'Side View of Pool' },
    
    // Room Views
    { src: roomFrontView, category: 'rooms', title: 'Room Front View' },
    { src: roomSideView, category: 'rooms', title: 'Room Side View' },
    { src: roomSideViewSlightly, category: 'rooms', title: 'Room View' },
    { src: lakeViewRoom, category: 'rooms', title: 'Lake View from Room' },
    { src: outdoorShower, category: 'rooms', title: 'Outdoor Shower Room' },
    
    // Lake Views
    { src: gardenLakeView, category: 'lake', title: 'Garden and Lake View' },
    { src: jettyLakeView, category: 'lake', title: 'Jetty with Lake View' },
    { src: lakeViewGarden, category: 'lake', title: 'Lake View with Garden' },
    
    // Interior & Dining
    { src: sittingAreaInside, category: 'interior', title: 'Indoor Sitting Area' },
    { src: staffCenter, category: 'interior', title: 'Villa Staff Center' },
    { src: drinksAreaView, category: 'dining', title: 'Drinks Area' },
    { src: foodServed, category: 'dining', title: 'Food Service' },
    { src: srilankanFood, category: 'dining', title: 'Sri Lankan Cuisine' },
    { src: staffServing, category: 'dining', title: 'Drink Service' }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'villa', name: 'Villa' },
    { id: 'pool', name: 'Pool' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'lake', name: 'Lake Views' },
    { id: 'interior', name: 'Interior' },
    { id: 'dining', name: 'Dining' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${poolGardenVilla})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200">Explore the beauty of The Lake House Villa</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <LazyLoadImage
                src={image.src}
                alt={image.title}
                effect="blur"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <button 
            className="absolute left-4 text-white text-3xl hover:text-gray-300"
            onClick={handlePrevImage}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="max-w-7xl max-h-[90vh] mx-4">
            <LazyLoadImage
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              effect="blur"
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p className="text-sm capitalize">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 text-white text-3xl hover:text-gray-300"
            onClick={handleNextImage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;