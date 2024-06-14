// ScheduleRejected 컴포넌트

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { callScheduleRejectedAPI } from '../../apis/ScheduleAPICalls';

function ScheduleRejected() {
    const { scheduleParticipantId } = useParams();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        cause: ''
    });

    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value,
        });
    };

    const onClickApplyHandler = () => {
        const id = Number(scheduleParticipantId);
        if (!isNaN(id)) {
            const confirmed = window.confirm("일정 참여 신청을 거절하시겠습니까?");
            if (confirmed) {
                // API 호출을 통해 일정 참여 신청을 반려하도록 dispatch
                dispatch(callScheduleRejectedAPI(id, form.cause));
            }
        } else {
            console.error("Invalid scheduleParticipantId:", scheduleParticipantId);
        }
    };

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>반려 사유</Form.Label>
                <Form.Control
                    type="text"
                    id="cause"
                    placeholder="내용 입력"
                    value={form.cause}
                    onChange={onChangeHandler}
                />
            </Form.Group>
            <Button variant="danger" onClick={onClickApplyHandler}>거절</Button>
        </div>
    );
}

export default ScheduleRejected;
