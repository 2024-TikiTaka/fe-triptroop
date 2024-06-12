import React, { useRef, useState } from "react";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { callScheduleRegistAPI } from "../../apis/ScheduleAPICalls";
import ScheduleItemForm from "./ScheduleItemForm";
import {useDispatch} from "react-redux";

function ScheduleForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [form, setForm] = useState({
        title: '',
        count: '',
        areaId: '',
        startDate: startDate,
        endDate: endDate
    });
    const imageInput = useRef();

    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const handleEndDateChange = (date) => {
        setForm({
            ...form,
            endDate: date
        });
    };

    const handleStartDateChange = (date) => {
        setForm({
            ...form,
            startDate: date
        });
    };

    const handleAreaChange = (e) => {
        setForm({
            ...form,
            areaId: e.target.value
        });
    };

    const onScheduleItemFormChange = (formData) => {
        // ScheduleItemForm에서 받은 formData로 상태 업데이트
        setForm(prevForm => ({
            ...prevForm,
            ...formData
        }));
    };

    const onClickScheduleRegistHandler = () => {
        console.log("@@@@@@@", imageInput.current.files[0]);
        console.log("@@@@!@@@@", form);

        /* 서버로 전달할 FormData 형태의 객체 설정 */
        const formData = new FormData();
        formData.append('image', imageInput.current.files[0]);
        formData.append('scheduleRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}));
        formData.append('scheduleItemRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}));

        dispatch(callScheduleRegistAPI({registRequest: formData}))
            .then(response => {
                // 요청이 성공적으로 처리될 때 실행되는 코드
                console.log("요청 성공:", response);
            })
            .catch(error => {
                // 오류가 발생한 경우 실행되는 코드
                if (error.response) {
                    // 서버가 응답을 보낸 경우
                    console.error("서버 응답 오류:", error.response.data);
                } else if (error.request) {
                    // 요청이 서버로 전송되지 않은 경우
                    console.error("요청 오류:", error.request);
                } else {
                    // 오류가 발생한 경우
                    console.error("오류:", error.message);
                }
            });
    }

    return (
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">일정 등록</h2>

            <Form>
                <Form.Group id="schedule" className="mb-3">
                    <Form.Label>썸네일을 등록해주세요.</Form.Label>
                    <Form.Control type="file" accept="image/*" ref={imageInput}/>
                    <Form.Control
                        label="제목"
                        type="text"
                        id="title"
                        placeholder="제목 입력"
                        onChange={onChangeHandler}
                    />
                    <Form.Control
                        type="text"
                        label="인원"
                        id="count"
                        placeholder="인원 수를 입력하세요"
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                <Form.Select aria-label="Default select example" required="" className="fs-6 form-select form-select-lg" id="areaId" onChange={handleAreaChange}>
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
                        selected={form.startDate}
                        onChange={handleStartDateChange}
                        locale={ko}
                        dateFormat="yyyy.MM.dd (eee)"
                        showPopperArrow={false}
                        minDate={new Date()}
                        customInput={<Form.Control as="textarea" rows={1} style={{width:"250px"}}/>}
                    />
                    <h5>
                        <Badge bg="secondary">종료일</Badge>
                    </h5>
                    <DatePicker
                        selected={form.endDate}
                        onChange={handleEndDateChange}
                        locale={ko}
                        dateFormat="yyyy.MM.dd (eee)"
                        showPopperArrow={false}
                        minDate={new Date()}
                        customInput={<Form.Control as="textarea" rows={1} style={{width:"250px"}}/>}
                    />
                </div>
                <ScheduleItemForm onFormChange={onScheduleItemFormChange} />

                <Button
                    size="lg"
                    className="fs-6"
                    onClick={onClickScheduleRegistHandler}>등록</Button>
            </Form>
        </>
    );
}

export default ScheduleForm;
