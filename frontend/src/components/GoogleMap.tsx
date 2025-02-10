import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      const map = new google.maps.Map(mapRef.current!, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });

      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Lake House Villa",
      });

      mapInstanceRef.current = map;
    };

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
};

export default GoogleMap; 