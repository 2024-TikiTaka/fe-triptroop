import React, { useRef, useEffect, useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { callScheduleItemRegistAPI } from "../../apis/ScheduleAPICalls";
import { useDispatch } from "react-redux";

function ScheduleItemForm() {
    const [form, setForm] = useState({
        placeId: '',
        kind: '',
        cost: '',
        planDate: new Date(),
        content: '',
        latitude: null,
        longitude: null,
    });

    const mapContainer = useRef(null);
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src =" //dapi.kakao.com/v2/maps/sdk.js?appkey=c832e4b58ba1a41ba6ae7d694e9e37e5&libraries=services,clusterer&autoload=false";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const mapOption = {
                    center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
                    level: 3
                };

                const map = new window.kakao.maps.Map(mapContainer.current, mapOption);
                const ps = new window.kakao.maps.services.Places();
                const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });


                const searchPlaces = () => {
                    console.log(!keyword);
                    if (!searchPlaces.executed) {
                        searchPlaces.executed = true;
                    }
                    if (!keyword) { // keyword 상태가 비어있는지 확인
                        alert('키워드를 입력해주세요!');
                        return;
                    }

                    ps.keywordSearch(keyword, placesSearchCB);
                };


                const placesSearchCB = (data, status, pagination) => {
                    const placesList = document.getElementById('placesList');
                    const paginationEl = document.getElementById('pagination');

                    removeAllChildNodes(placesList);
                    removeAllChildNodes(paginationEl);

                    if (status === window.kakao.maps.services.Status.OK) {
                        displayPlaces(data);
                        displayPagination(pagination);
                    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
                        // 검색 결과가 없을 때 사용자에게 메시지를 보여줍니다.
                        placesList.innerHTML = '<p>검색 결과가 없습니다.</p>';
                    } else if (status === window.kakao.maps.services.Status.ERROR) {
                        // 오류가 발생했을 때 사용자에게 메시지를 보여줍니다.
                        placesList.innerHTML = '<p>검색 중 오류가 발생했습니다.</p>';
                    }
                };
                const searchBtn = document.getElementById('searchBtn');
                searchBtn.removeEventListener('click', searchPlaces); // 기존에 등록된 이벤트 핸들러 제거
                searchBtn.addEventListener('click', searchPlaces); // 새로운 이벤트 핸들러 등록

                const displayPlaces = (places) => {
                    const listEl = document.getElementById('placesList');
                    const fragment = document.createDocumentFragment();
                    const bounds = new window.kakao.maps.LatLngBounds();

                    removeAllChildNodes(listEl);
                    removeMarker();

                    for (let i = 0; i < places.length; i++) {
                        const placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x);
                        const marker = addMarker(placePosition, i);
                        const itemEl = getListItem(i, places[i]);

                        bounds.extend(placePosition);

                        (function (marker, title) {
                            window.kakao.maps.event.addListener(marker, 'mouseover', function () {
                                displayInfowindow(marker, title);
                            });

                            window.kakao.maps.event.addListener(marker, 'mouseout', function () {
                                infowindow.close();
                            });

                            itemEl.onmouseover = function () {
                                displayInfowindow(marker, title);
                            };

                            itemEl.onmouseout = function () {
                                infowindow.close();
                            };
                        })(marker, places[i].place_name);

                        fragment.appendChild(itemEl);
                    }

                    listEl.appendChild(fragment);
                    map.setBounds(bounds);
                };

                const getListItem = (index, places) => {
                    const el = document.createElement('li');
                    let itemStr = '<span class="markerbg marker_' + (index + 1) + '"></span>' +
                        '<div class="info">' +
                        '   <h5>' + places.place_name + '</h5>';

                    if (places.road_address_name) {
                        itemStr += '    <span>' + places.road_address_name + '</span>' +
                            '   <span class="jibun gray">' + places.address_name + '</span>';
                    } else {
                        itemStr += '    <span>' + places.address_name + '</span>';
                    }

                    itemStr += '  <span class="tel">' + places.phone + '</span>' +
                        '</div>';

                    el.innerHTML = itemStr;
                    el.className = 'item';

                    return el;
                };

                const addMarker = (position, idx) => {
                    const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
                    const imageSize = new window.kakao.maps.Size(36, 37);
                    const imgOptions = {
                        spriteSize: new window.kakao.maps.Size(36, 691),
                        spriteOrigin: new window.kakao.maps.Point(0, (idx * 46) + 10),
                        offset: new window.kakao.maps.Point(13, 37)
                    };
                    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);
                    const marker = new window.kakao.maps.Marker({
                        position: position,
                        image: markerImage
                    });

                    marker.setMap(map);
                    setMarkers(prevMarkers => [...prevMarkers, marker]);
                    return marker;
                };

                const removeMarker = () => {
                    markers.forEach(marker => marker.setMap(null));
                    setMarkers([]);
                };

                const displayPagination = (pagination) => {
                    const paginationEl = document.getElementById('pagination');
                    const fragment = document.createDocumentFragment();

                    while (paginationEl.hasChildNodes()) {
                        paginationEl.removeChild(paginationEl.lastChild);
                    }

                    for (let i = 1; i <= pagination.last; i++) {
                        const el = document.createElement('a');
                        el.href = "#";
                        el.innerHTML = i;

                        if (i === pagination.current) {
                            el.className = 'on';
                        } else {
                            el.onclick = (function (i) {
                                return function () {
                                    pagination.gotoPage(i);
                                }
                            })(i);
                        }

                        fragment.appendChild(el);
                    }
                    paginationEl.appendChild(fragment);
                };

                const displayInfowindow = (marker, title) => {
                    const content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                };

                const removeAllChildNodes = (el) => {
                    while (el.hasChildNodes()) {
                        el.removeChild(el.lastChild);
                    }
                };

                document.getElementById('searchBtn').addEventListener('click', searchPlaces);
            });
        };
    }, [ markers]);


    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handlePlanDateChange = (date) => {
        setForm({
            ...form,
            planDate: date
        });
    };

    const onClickScheduleRegistHandler = () => {
        console.log("@@@@!@@@@", form);

        const formData = new FormData();
        formData.append('scheduleItemRequest', new Blob([JSON.stringify(form)], { type: 'application/json' }));
        dispatch(callScheduleItemRegistAPI({ registRequest: formData }));
    };

    return (
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">일정 계획 등록</h2>

            <Form>

                <div ref={mapContainer} style={{ width: "500px", height: "400px" }}></div>
                <div id="clickLatlng" style={{ padding: "10px 0" }}></div>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        id="keyword"
                        placeholder="키워드를 입력하세요"
                        value={keyword}
                        onChange={(e) => {setKeyword(e.target.value);console.log(keyword);console.log(!keyword)}}
                    />
                    <Button
                        id="searchBtn"
                        variant="primary"
                    >
                        검색
                    </Button>
                    <ul id="placesList"></ul>
                    <div id="pagination"></div>
                </Form.Group>

                {/*<div id="menu_wrap" className="bg_white">*/}
                {/*<div className="option">*/}
                {/*        <div>*/}
                {/*            <Form.Control type="text" id="keyword" size="15" value={keyword} onChange={(e) => setKeyword(e.target.value)} />*/}
                {/*            <Button id="searchBtn" size="sm">검색하기</Button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <hr />*/}
                {/*    */}
                {/*</div>*/}

                <Form.Group id="scheduleItem" className="mb-3">
                    <Form.Label>구분 선택</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        required
                        className="fs-6 form-select form-select-lg"
                        id="kind"
                        onChange={onChangeHandler}
                    >
                        <option>구분 선택</option>
                        <option value="ACCOMMODATION">숙소</option>
                        <option value="TOURISM">관광</option>
                        <option value="TRANSPORTATION">교통</option>
                        <option value="ETC">기타</option>
                    </Form.Select>

                    <Form.Group className="mb-3">
                        <Form.Label>내용</Form.Label>
                        <Form.Control
                            type="text"
                            id="content"
                            placeholder="내용 입력"
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>가격</Form.Label>
                        <Form.Control
                            type="number"
                            id="cost"
                            placeholder="가격 입력"
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <div className="date">
                        <h5>
                            <Badge bg="primary">계획일</Badge>
                        </h5>
                        <DatePicker
                            selected={form.planDate}
                            onChange={handlePlanDateChange}
                            locale={ko}
                            dateFormat="yyyy.MM.dd (eee)"
                            showPopperArrow={false}
                            minDate={new Date()}
                            customInput={
                                <Form.Control as="textarea" rows={1} style={{ width: "250px" }} />
                            }
                        />
                    </div>
                </Form.Group>

                <Button size="lg" className="fs-6" onClick={onClickScheduleRegistHandler}>등록</Button>
            </Form>
        </>
    );
}

export default ScheduleItemForm;
