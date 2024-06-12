import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Badge, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { callScheduleRegistAPI } from "../../apis/ScheduleAPICalls";
import ScheduleItemForm from "./ScheduleItemForm";

function ScheduleForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [scheduleForm, setScheduleForm] = useState({
        title: '',
        count: '',
        areaId: '',
        startDate: startDate,
        endDate: endDate
    });
    const [scheduleItemForm, setScheduleItemForm] = useState({
        address: '',
        name: '',
        kind: '',
        cost: '',
        planDate: new Date(),
        content: ''
    });
    const imageInput = useRef();

    const dispatch = useDispatch();

    const onChangeHandler = e => {
        setScheduleForm({
            ...scheduleForm,
            [e.target.id]: e.target.value,
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

    const onScheduleItemFormChange = (formData) => {
        setScheduleItemForm(formData);
    };

    const onClickScheduleRegistHandler = () => {
        const formData = new FormData();
        formData.append('image', imageInput.current.files[0]);
        formData.append('scheduleRequest', new Blob([JSON.stringify(scheduleForm)], { type: 'application/json' }));
        formData.append('scheduleItemRequest', new Blob([JSON.stringify(scheduleItemForm)], { type: 'application/json' }));

        dispatch(callScheduleRegistAPI({ registRequest: formData }))
            .then(response => {
                console.log("요청 성공:", response);
            })
            .catch(error => {
                if (error.response) {
                    console.error("서버 응답 오류:", error.response.data);
                } else if (error.request) {
                    console.error("요청 오류:", error.request);
                } else {
                    console.error("오류:", error.message);
                }
            });
    };

    return (
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">일정 등록</h2>

            <Form>
                <Form.Group id="schedule" className="mb-3">
                    <Form.Label>썸네일을 등록해주세요.</Form.Label>
                    <Form.Control type="file" accept="image/*" ref={imageInput} />
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

                <Form.Select
                    aria-label="Default select example"
                    required=""
                    className="fs-6 form-select form-select-lg"
                    id="areaId"
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
                </div>
                <ScheduleItemForm onFormChange={onScheduleItemFormChange} />

                <Button
                    size="lg"
                    className="fs-6"
                    onClick={onClickScheduleRegistHandler}
                >
                    등록
                </Button>
            </Form>
        </>
    );
}

export default ScheduleForm;
