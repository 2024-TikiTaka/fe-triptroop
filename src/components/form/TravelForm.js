import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import KaKaoMapAPI from "../map/KaKaoMapAPI";
import { callTravelInsertAPI } from "../../apis/TravelAPICalls";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const TravelRegistration = () => {
    const [formData, setFormData] = useState({
        categoryId: '',
        areaId: '',
        placeId: '',
        title: '',
        content: '',
        images: []
    });

    const imageInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('travelRequest', new Blob([JSON.stringify({
            categoryId: formData.categoryId,
            areaId: formData.areaId,
            address: formData.address,
            name: formData.name,
            title: formData.title,
            content: formData.content,
        })], { type: 'application/json' }));

        if (formData.images.length > 0) {
            for (let i = 0; i < formData.images.length; i++) {
                data.append('images', formData.images[i]);
            }
        } else if (imageInput.current.files.length > 0) {
            for (let i = 0; i < imageInput.current.files.length; i++) {
                data.append('images', imageInput.current.files[i]);
            }
        }

        try {
            const response = await dispatch(callTravelInsertAPI({ registRequest: data }));
            console.log("요청 성공:", response);
            navigate('/travels'); // 등록 성공 후 이동할 페이지로 navigate를 사용합니다.
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>카테고리:</label>
                <select name="categoryId" value={formData.categoryId} onChange={handleCategoryChange}>
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
                </select>
            </div>
            <div>
                <label>지역:</label>
                <select name="areaId" value={formData.areaId} onChange={handleAreaChange}>
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
                </select>
            </div>
            <div>
                <label>장소:</label>
                <KaKaoMapAPI onPlaceSelect={handlePlaceSelect} />
            </div>
            <div>
                <label>제목:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div>
                <label>내용:</label>
                <textarea name="content" value={formData.content} onChange={handleChange} />
            </div>
            <div>
                <label>이미지:</label>
                <Form.Control type="file" accept="image/*" ref={imageInput} onChange={handleFileChange} multiple />
            </div>
            <button type="submit">등록</button>
        </form>
    );
};

export default TravelRegistration;
