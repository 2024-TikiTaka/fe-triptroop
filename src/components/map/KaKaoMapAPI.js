import React, {useEffect, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";

function KaKaoMapAPI({onPlaceSelect}) {
    const [keyword, setKeyword] = useState('');
    const [info, setInfo] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c832e4b58ba1a41ba6ae7d694e9e37e5&libraries=services,clusterer`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    setMap(new window.kakao.maps.Map(document.getElementById("map"), {
                        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                        level: 3,
                    }));
                });
            }
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const searchPlaces = (e) => {
        e.preventDefault();  // 기본 동작인 새로고침을 막음
        if (!keyword.trim()) {
            alert('키워드를 입력해주세요!');
            return;
        }

        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(keyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                setPlaces(data);
                const bounds = new window.kakao.maps.LatLngBounds();
                let newMarkers = [];

                data.forEach(place => {
                    const position = {
                        lat: parseFloat(place.y),
                        lng: parseFloat(place.x),
                    };
                    newMarkers.push({
                        position,
                        content: place.place_name,
                    });
                    bounds.extend(new window.kakao.maps.LatLng(position.lat, position.lng));
                });

                setMarkers(newMarkers);
                map.setBounds(bounds);
            } else {
                alert('검색 결과가 없습니다.');
            }
        });
    };

    const handlePlaceClick = (place) => {
        const position = {
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
        };
        setMarkers([{position, content: place.place_name}]);
        setInfo({content: place.place_name, address: place.road_address_name || place.address_name});

        if (map) {
            const moveLatLon = new window.kakao.maps.LatLng(position.lat, position.lng);
            map.setCenter(moveLatLon);
        }

        // 부모 컴포넌트로 장소 정보 전달
        onPlaceSelect({
            name: place.place_name,
            address: place.road_address_name || place.address_name
        });
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="키워드를 입력하세요"
                />
                <button onClick={searchPlaces}>검색</button>
            </div>
            <div style={{display: 'flex'}}>
                <div>
                    <ul>
                        {places.map((place) => (
                            <li key={place.id} onClick={() => handlePlaceClick(place)}>
                                {place.place_name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="map" style={{width: "500px", height: "400px"}}>
                    <Map
                        center={{
                            lat: 37.566826,
                            lng: 126.9786567,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        level={3}
                        onCreate={setMap}
                    >
                        {markers.map((marker, index) => (
                            <MapMarker
                                key={`marker-${index}`}
                                position={marker.position}
                                onClick={() => setInfo(marker)}
                            >
                                {info && info.content === marker.content && (
                                    <div style={{color: "#000"}}>{marker.content}</div>
                                )}
                            </MapMarker>
                        ))}
                    </Map>
                </div>
            </div>
            {info && (
                <div>
                    <h4>{info.content}</h4>
                    <p>{info.address}</p>
                </div>
            )}
        </div>
    );
}

export default KaKaoMapAPI;

