import React, { useState, useEffect } from "react";
import { Badge, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import KaKaoMapAPI from "../map/KaKaoMapAPI";

function ScheduleItemForm({ onFormChange }) {
    const [form, setForm] = useState({
        address: '',
        name: '',
        kind: '',
        cost: '',
        planDate: new Date(),
        content: ''
    });

    const onChangeHandler = e => {
        const updatedForm = {
            ...form,
            [e.target.id]: e.target.value,
        };
        setForm(updatedForm);
    };

    const handlePlanDateChange = (date) => {
        const updatedForm = {
            ...form,
            planDate: date
        };
        setForm(updatedForm);
    };

    const handlePlaceSelect = (place) => {
        const updatedForm = {
            ...form,
            address: place.address,
            name: place.name
        };
        setForm(updatedForm);
    };

    // useEffect to call onFormChange when form changes
    useEffect(() => {
        onFormChange(form);
    }, [form, onFormChange]); // Ensure onFormChange is stable or use a callback version

    return (
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">일정 계획 등록</h2>

            <KaKaoMapAPI onPlaceSelect={handlePlaceSelect} />
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
        </>
    );
}

export default ScheduleItemForm;
