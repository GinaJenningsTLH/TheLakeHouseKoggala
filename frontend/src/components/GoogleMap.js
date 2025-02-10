import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
const GoogleMap = ({ center, zoom }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current)
            return;
        const initMap = async () => {
            const map = new google.maps.Map(mapRef.current, {
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
    return _jsx("div", { ref: mapRef, className: "w-full h-full rounded-lg" });
};
export default GoogleMap;
