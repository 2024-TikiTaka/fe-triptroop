import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Kakaomap = ({ place }) => {
    const { kakao } = window;
    const [ position, setPosition ] = useState();

    useEffect(() => {

        if (place && place.address) {
            const geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(place.address, (result, status) => {

                if (status === kakao.maps.services.Status.OK) {
                    setPosition({
                        lng: result[0].x,
                        lat: result[0].y,
                    });
                } else {
                    console.error('Failed to search address:', status);
                    console.error('Result:', result);
                }
            });
        }
    }, [ place ]);

    return (
        <div className="my-3">
            <Map
                center={position || { lat: 0, lng: 0 }}
                style={{ width: '100%', height: '300px' }}
                level={3}
                scrollwheel={false}
            >
                {position ? (
                    <MapMarker
                        position={position}
                        clickable={true}
                    >
                        <div style={{ color: '#000' }}>{place.name}</div>
                    </MapMarker>
                ) : (
                    <div>Loading map...</div>
                )}
            </Map>
        </div>
    );
};

export default Kakaomap;
