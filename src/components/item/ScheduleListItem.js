import { useNavigate } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

function ScheduleListItem({ schedule: { scheduleId, sido, count, startDate, endDate, title, views, imageUrl } }) {
    const navigate = useNavigate();

    const cardStyle = {
        height: '350px', // 원하는 높이로 설정
        marginBottom: '20px' // 하단 마진 조정
    };

    const imgStyle = {
        height: '200px', // 이미지 높이 설정
        objectFit: 'cover' // 이미지 비율 유지하면서 카드에 맞추기
    };

    return (
        <Col  md={4} lg={12} className="mb-4">
            <Card className="schedule-card h-100" onClick={() => navigate(`/schedules/${scheduleId}`)} style={cardStyle}>
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={title}
                    style={imgStyle}
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
