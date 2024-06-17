import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";

function ScheduleListItem({ schedule: { scheduleId, sido, count, startDate, endDate, title, views, imageUrl } }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const onEnterKeyHandler = (e) => {
        if (e.key === 'Enter') navigate(`/schedules/search?keyword=${title}`);
    };

    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="schedule-card h-100" onClick={() => navigate(`/schedules/${scheduleId}`)}>
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <strong>지역: </strong> {sido} <br />
                        <strong>인원 수: </strong> {count} <br />
                        <strong>시작 날짜: </strong> {startDate} <br />
                        <strong>종료 날짜: </strong> {endDate} <br />
                        <strong>조회수: </strong> {views}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ScheduleListItem;
