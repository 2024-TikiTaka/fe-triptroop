import React, { useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import KakaomapSearch from "../map/KakaomapSearch";
import { useDispatch } from "react-redux";
import { callScheduleItemUpdateAPI } from "../../apis/ScheduleAPICalls";
import { useParams } from "react-router-dom";

function ScheduleItemUpdateForm() {
    const { scheduleItemId } = useParams();

    const [ form, setForm ] = useState({
        address: '',
        name: '',
        kind: '',
        cost: '',
        planDate: new Date(),
        content: ''
    });
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value,
        });
    };

    const handlePlanDateChange = (date) => {
        setForm({
            ...form,
            planDate: date
        });
    };

    const handlePlaceSelect = (place) => {
        setForm({
            ...form,
            address: place.address,
            name: place.name
        });
    };

    const onClickScheduleItemUpdateHandler = async (e) => {
        e.preventDefault(); // 기본 동작 방지

        try {
            // 요청 전에 데이터 유효성 검사
            if (!form.kind || !form.content || !form.cost || !form.planDate) {
                console.error("필수 항목을 모두 입력해주세요.");
                return;
            }

            const response = await dispatch(callScheduleItemUpdateAPI(scheduleItemId, form));
            console.log("요청 성공:", response);
            // 요청 성공 후 추가 작업 수행
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
            <h2 className="fs-1 fw-bold text-center mb-5">일정 계획 수정</h2>

            <KakaomapSearch onPlaceSelect={handlePlaceSelect} />
            <Form onSubmit={onClickScheduleItemUpdateHandler}>
                <Form.Group id="scheduleItem" className="mb-3">
                    <Form.Label>구분 선택</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        required
                        className="fs-6 form-select form-select-lg"
                        id="kind"
                        value={form.kind}
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
                            value={form.content}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>가격</Form.Label>
                        <Form.Control
                            type="number"
                            id="cost"
                            placeholder="가격 입력"
                            value={form.cost}
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
                                <Form.Control rows={1} style={{ width: "250px" }} />
                            }
                        />
                    </div>
                </Form.Group>
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

export default ScheduleItemUpdateForm;
