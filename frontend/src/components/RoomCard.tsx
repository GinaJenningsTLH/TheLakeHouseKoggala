interface RoomCardProps {
    title: string;
    description: string;
    image: string;
    price: string;
  }
  
  const RoomCard: React.FC<RoomCardProps> = ({ title, description, image, price }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <h3 className="font-bold text-h3 text-gray-500 drop-shadow-lg mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="mt-4 text-lg font-semibold">{price}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href="/book" className="bg-darkGreen hover:bg-green-700 text-white py-2 px-4 rounded-full">
            Book Now
          </a>
        </div>
      </div>
    );
  };
  
  export default RoomCard;
  