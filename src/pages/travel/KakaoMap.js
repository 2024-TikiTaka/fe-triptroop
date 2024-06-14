import {useEffect, useState} from "react";

const KakaoMap = () => {
    const [locations, setLocations] = useState([]);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        const fetchLocations = async () => {
            try {

                const response = await fetch('/api/v1/travel/{travelId}/place');
                const data = await response.json();
                setLocations(data);
                loadKakaoMapScript(() => initMap(data));
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, []);

    const loadKakaoMapScript = (callback) => {
        if (window.kakao && window.kakao.maps) {
            callback();
        } else {
            const script = document.createElement('script');
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c832e4b58ba1a41ba6ae7d694e9e37e5&autoload=false`;
            script.async = true;
            script.onload = () => {
                window.kakao.maps.load(callback);
            };
            document.head.appendChild(script);
        }
    };

    const initMap = (locations) => {
        if (!window.kakao || !window.kakao.maps) {
            console.error("Kakao maps API is not loaded");
            return;
        }
        const container = document.getElementById('map');
        if (!container) {
            console.error("Map container not found");
            return;
        }
        const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        locations.forEach(location => {
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(location.address, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;">${location.name}</div>`
                    });

                    window.kakao.maps.event.addListener(marker, 'click', () => {
                        infowindow.open(map, marker);
                    });
                }
            });
        });

        setIsMapLoaded(true);
    };

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
            {!isMapLoaded && <p>Loading map...</p>}
        </div>
    );
};

// export default KakaoMap;