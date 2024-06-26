import React, { useEffect, useState } from "react";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Button, Col, Form, InputGroup, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function KakaomapSearch({ onPlaceSelect }) {
    const { kakao } = window;
    const [ keyword, setKeyword ] = useState('');
    const [ map, setMap ] = useState();
    const [ info, setInfo ] = useState();
    const [ markers, setMarkers ] = useState([]);
    const [ places, setPlaces ] = useState([]);

    useEffect(() => {
        if (!map) return;
    }, [ map ]);

    const searchPlaces = (e) => {
        e.preventDefault();
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return;
        }

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(keyword, (data, status) => {

            if (status === kakao.maps.services.Status.OK) {

                setPlaces(data);

                const bounds = new kakao.maps.LatLngBounds();
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
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
                return;
            } else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다.');
                return;
            }
        });
    };

    const handlePlaceClick = (place) => {
        const position = {
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
        };
        setMarkers([ { position, content: place.place_name } ]);
        setInfo({ content: place.place_name, address: place.road_address_name || place.address_name });

        if (map) {
            const moveLatLon = new kakao.maps.LatLng(position.lat, position.lng);
            map.setCenter(moveLatLon);
        }

        // 부모 컴포넌트로 장소 정보 전달
        onPlaceSelect({
            name: place.place_name,
            address: place.road_address_name || place.address_name
        });
    };

    return (
        <div className="my-3">
            <Row xs={12}>
                <Form.Group className="mb-3">
                    <Form.Label>장소</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="키워드를 입력하세요"
                        />
                        <Button onClick={searchPlaces}>검색</Button>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row xs={12} style={{ height: "350px" }}>
                <Col xs={5}
                     className="overflow-auto"
                     style={{ height: "100%" }}
                     hidden={places.length <= 0}>
                    <div>
                        <ListGroup variant="flush">
                            {
                                !places ? (
                                    <ListGroupItem>
                                        검색 결과가 없습니다.
                                    </ListGroupItem>
                                ) : (
                                    places.map((place) => (
                                        <ListGroupItem key={place.id}
                                                       onClick={() => handlePlaceClick(place)}>
                                            {place.place_name}
                                        </ListGroupItem>
                                    ))
                                )

                            }
                        </ListGroup>
                    </div>
                </Col>
                <Col xs={places.length > 0 ? 7 : 12} style={{ height: "100%" }}>
                    <Map
                        center={{
                            lat: 37.566826,
                            lng: 126.9786567,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        level={5}
                        onCreate={setMap}
                    >
                        {markers.map((marker, index) => (
                            <MapMarker
                                key={`marker-${index}`}
                                position={marker.position}
                                onClick={() => setInfo(marker)}
                            >
                                {info && info.content === marker.content && (
                                    <div style={{ color: "#000" }}>{marker.content}</div>
                                )}
                            </MapMarker>
                        ))}
                    </Map>
                </Col>
            </Row>
            <Row xs={12} className="mt-3">
                {info && (
                    <div>
                        <h4>{info.content}</h4>
                        <p>{info.address}</p>
                    </div>
                )}
            </Row>
        </div>
    );
}

export default KakaomapSearch;

