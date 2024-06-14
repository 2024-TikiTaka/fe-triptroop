import React, { useEffect, useRef, useState } from "react";
import { Form, Badge, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { useDispatch, useSelector } from "react-redux";
import { callScheduleDetailAPI, callScheduleUpdateAPI } from "../../apis/ScheduleAPICalls";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {authRequest} from "../../apis/api";

function ScheduleUpdateForm() {
    const { scheduleId } = useParams();
    const [scheduleForm, setScheduleForm] = useState({
        title: "",
        count: "",
        areaId: "",
        startDate: new Date(),
        endDate: new Date(),
        status: "PUBLIC"
    });
    const [images, setImages] = useState([]);
    const imageInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { schedule } = useSelector(state => state.scheduleReducer);

    useEffect(() => {
        const fetchScheduleDetail = async () => {
            await dispatch(callScheduleDetailAPI({ scheduleId }));
        };
        fetchScheduleDetail();
    }, [dispatch, scheduleId]);

    useEffect(() => {
        if (schedule && scheduleId == schedule.id) {
            setScheduleForm({
                title: schedule.title || "",
                count: schedule.count || "",
                areaId: schedule.areaId || "",
                startDate: new Date(schedule.startDate) || new Date(),
                endDate: new Date(schedule.endDate) || new Date(),
                status: schedule.status || "PUBLIC"
            });
        }
    }, [schedule, scheduleId]);

    const toggleStatus = () => {
        const newStatus = scheduleForm.status === "PUBLIC" ? "PRIVATE" : "PUBLIC";
        setScheduleForm({
            ...scheduleForm,
            status: newStatus
        });
    };

    const onChangeHandler = (e) => {
        setScheduleForm({
            ...scheduleForm,
            [e.target.id]: e.target.value
        });
    };

    const handleEndDateChange = (date) => {
        setScheduleForm({
            ...scheduleForm,
            endDate: date
        });
    };

    const handleStartDateChange = (date) => {
        setScheduleForm({
            ...scheduleForm,
            startDate: date
        });
    };

    const handleAreaChange = (e) => {
        setScheduleForm({
            ...scheduleForm,
            areaId: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        // 직렬화된 JSON 데이터 추가
        const jsonBlob = new Blob([JSON.stringify({
            areaId: scheduleForm.areaId,
            count: scheduleForm.count,
            startDate: scheduleForm.startDate,
            endDate: scheduleForm.endDate,
            title: scheduleForm.title,
            status: scheduleForm.status
        })], { type: 'application/json' });

        formData.append('scheduleUpdateRequest', jsonBlob);

        // 이미지 추가
        images.forEach(image => {
            formData.append('image', image);
        });

        try {
            const accessToken = localStorage.getItem("accessToken");

            const response = await authRequest.put(
                `http://localhost:8080/api/v1/schedules/${scheduleId}/modify`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            console.log("수정 성공:", response.data);
            navigate(`/schedules/${scheduleId}`);
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
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">일정 수정</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group id="schedule" className="mb-3">
                    <Form.Label>썸네일을 등록해주세요.</Form.Label>
                    <Form.Control type="file" accept="image/*" ref={imageInput} onChange={handleImageChange} />
                    <Form.Control
                        type="text"
                        id="title"
                        placeholder="제목 입력"
                        value={scheduleForm.title}
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        type="text"
                        id="count"
                        placeholder="인원 수를 입력하세요"
                        value={scheduleForm.count}
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Select
                    aria-label="Default select example"
                    required=""
                    className="fs-6 form-select form-select-lg"
                    id="areaId"
                    value={scheduleForm.areaId}
                    onChange={handleAreaChange}
                >
                    <option>지역 선택</option>
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
                </Form.Select>
                <div>
                    <h5>
                        <Badge bg="primary">시작일</Badge>
                    </h5>
                    <DatePicker
                        selected={scheduleForm.startDate}
                        onChange={handleStartDateChange}
                        locale={ko}
                        dateFormat="yyyy.MM.dd (eee)"
                        showPopperArrow={false}
                        minDate={new Date()}
                        customInput={
                            <Form.Control as="textarea" rows={1} style={{ width: "250px" }} />
                        }
                    />
                    <h5>
                        <Badge bg="secondary">종료일</Badge>
                    </h5>
                    <DatePicker
                        selected={scheduleForm.endDate}
                        onChange={handleEndDateChange}
                        locale={ko}
                        dateFormat="yyyy.MM.dd (eee)"
                        showPopperArrow={false}
                        minDate={new Date()}
                        customInput={
                            <Form.Control as="textarea" rows={1} style={{ width: "250px" }} />
                        }
                    />
                    <Button
                        className="fs-6 me-2"
                        variant={scheduleForm.status === "PUBLIC" ? "primary" : "danger"}
                        onClick={toggleStatus}
                    >
                        {scheduleForm.status === "PUBLIC" ? "공개" : "비공개"}
                    </Button>
                </div>

                <Button
                    size="lg"
                    className="fs-6"
                    type="submit"
                >
                    수정
                </Button>
            </Form>
        </>
    );
}

export default ScheduleUpdateForm;
