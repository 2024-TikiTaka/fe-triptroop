import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callTravelDetailAPI, callTravelModifyAPI } from "../../apis/TravelAPICalls";
import KakaomapSearch from "../map/KakaomapSearch";

function TravelModifyForm() {
    const { travelId } = useParams();
    const [ formData, setFormData ] = useState({
        categoryId: '',
        areaId: '',
        address: '',
        name: '',
        title: '',
        content: '',
        images: [],
        status: 'PUBLIC'
    });
    const [ existingImages, setExistingImages ] = useState([]);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { travel } = useSelector(state => state.travelReducer);

    useEffect(() => {
        const fetchTravelDetail = async () => {
            await dispatch(callTravelDetailAPI({ travelId }));
        };

        fetchTravelDetail();
    }, [ dispatch, travelId ]);

    useEffect(() => {
        if (travel && travelId === travel.id) {
            setFormData({
                categoryId: travel.categoryId || '',
                areaId: travel.areaId || '',
                address: travel.address || '',
                name: travel.name || '',
                title: travel.title || '',
                content: travel.content || '',
                images: [],
                status: travel.status || 'PUBLIC'
            });
            setExistingImages(travel.images || []);
        }
    }, [ travel, travelId ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const handleAreaChange = (e) => {
        setFormData({
            ...formData,
            areaId: e.target.value
        });
    };

    const handleCategoryChange = (e) => {
        setFormData({
            ...formData,
            categoryId: e.target.value
        });
    };

    const handlePlaceSelect = (place) => {
        setFormData({
            ...formData,
            address: place.address,
            name: place.name
        });
    };

    const handleStatusChange = (e) => {
        setFormData({ ...formData, status: e.target.checked ? 'PUBLIC' : 'PRIVATE' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('travelRequest', new Blob([ JSON.stringify({
            categoryId: formData.categoryId,
            areaId: formData.areaId,
            address: formData.address,
            name: formData.name,
            title: formData.title,
            content: formData.content,
            status: formData.status
        }) ], { type: 'application/json' }));

        formData.images.forEach(image => {
            data.append('image', image);
        });

        try {
            const response = await dispatch(callTravelModifyAPI({ travelId, modifyRequest: data }));
            navigate('/travels');
        } catch (error) {
            if (error.response) {
                console.error("서버 응답 오류:", error.response.data);
            } else if (error.request) {
                console.error("요청 오류:", error.request);
            } else {
                console.error("오류:", error.message);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCategory">
                    <Form.Label>카테고리</Form.Label>
                    <Form.Control as="select" name="categoryId" value={formData.categoryId} onChange={handleCategoryChange}>
                        <option value="">카테고리 선택</option>
                        <option value="1">관광지</option>
                        <option value="2">문화시설</option>
                        <option value="3">축제</option>
                        <option value="4">행사</option>
                        <option value="5">레포츠</option>
                        <option value="6">숙박</option>
                        <option value="7">쇼핑</option>
                        <option value="8">음식점</option>
                        <option value="9">여행코스</option>
                        <option value="10">체험</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridArea">
                    <Form.Label>지역</Form.Label>
                    <Form.Control as="select" name="areaId" value={formData.areaId} onChange={handleAreaChange}>
                        <option value="">지역 선택</option>
                        <option value="1">서울</option>
                        <option value="2">부산</option>
                        <option value="3">대구</option>
                        <option value="4">인천</option>
                        <option value="5">광주</option>
                        <option value="6">대전</option>
                        <option value="7">울산</option>
                        <option value="8">세종</option>
                        <option value="9">경기</option>
                        <option value="10">강원</option>
                    </Form.Control>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridPlace">
                <Form.Label>장소</Form.Label>
                <KakaomapSearch onPlaceSelect={handlePlaceSelect} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridTitle">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridContent">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" name="content" value={formData.content} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridImages">
                <Form.Label>이미지</Form.Label>
                <Form.Control type="file" accept="image/*" ref={imageInput} onChange={handleFileChange} multiple />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridStatus">
                <Form.Label>상태</Form.Label>
                <Form.Check
                    type="checkbox"
                    label={formData.status === 'PUBLIC' ? '공개 (Public)' : '비공개 (Private)'}
                    checked={formData.status === 'PUBLIC'}
                    onChange={handleStatusChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                수정
            </Button>
        </Form>
    );
}

export default TravelModifyForm;
