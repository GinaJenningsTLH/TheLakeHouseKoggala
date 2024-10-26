import React from 'react';
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

const AttractionsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nearby Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={attraction.image}
                alt={attraction.name}
                loading="lazy" // Lazy load images for better performance
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{attraction.name}</h3>
                <p className="text-gray-700">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
