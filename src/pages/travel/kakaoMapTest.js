import { MapMarker, Map } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from "react";

const KakaoMapTest = ({ place }) => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=6556106b6de66f55df4233e7cdcd7cdd&libraries=services,clusterer`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                if (place && place.address) {
                    console.log('Searching for address:', place.address);
                    console.log('Place name:', place.name);
                    const geocoder = new window.kakao.maps.services.Geocoder();
                    geocoder.addressSearch(place.address, (result, status) => {
                        console.log('Geocoder result:', result); // 검색 결과 확인
                        console.log('Geocoder status:', status); // 상태 확인
                        if (status === window.kakao.maps.services.Status.OK) {
                            const lat = parseFloat(result[0].y);
                            const lng = parseFloat(result[0].x);
                            setPosition({ lat, lng });
                        } else {
                            console.error('Failed to search address:', status);
                            console.error('Result:', result);
                        }
                    });
                } else {
                    console.error('Invalid place or address:', place);
                }
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, [place]);

    return (
        <div>
            <Map
                center={position || { lat: 0, lng: 0 }}
                style={{ width: '100%', height: '400px' }}
                level={3}
            >
                {position ? (
                    <MapMarker
                        position={position}
                        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
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

export default KakaoMapTest;
