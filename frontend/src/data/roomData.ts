import lakeViewIndoor from '../assets/images/lakeview(indoor).jpg';
import gardenViewRoom from '../assets/images/gardenviewroom.jpg';
import gardenViewRoom2 from '../assets/images/gardenviewroom2.jpg';

const roomData = [
  {
    imageSrc: lakeViewIndoor,
    altText: 'Lake View Room with Indoor Shower',
    title: 'Lake View Room (Indoor)',
    description: 'A serene room with a stunning view of Koggala Lake and modern amenities.',
    link: '/lake-view-indoor'
  },
  {
    imageSrc: gardenViewRoom,
    altText: 'Garden View Room',
    title: 'Garden View Room',
    description: 'Enjoy the tranquility of a lush garden with comfortable and stylish settings.',
    link: '/garden-view-indoor'
  },
  {
    imageSrc: gardenViewRoom2,
    altText: 'Garden View Room with Extra Comfort',
    title: 'Garden View Room (Deluxe)',
    description: 'An upgraded garden room offering more space and luxury features.',
    link: '/garden-view-outdoor'
  },
  // Add more rooms as needed
];

export default roomData;
