import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function ScheduleItem({ schedule }) {
    const { information, participantProfile, scheduleItemInfoResponse } = schedule;
    const navigate = useNavigate();

    const handleClickModifyItem = (item) => {
        console.log('Item for modify:', item); // 구조 확인

        navigate(`/schedules/${item.id}/item`);
    };

    const handleClickDeletedItem = (item) => {
        console.log('Item for modify:', item); // 구조 확인

        navigate(`/schedules/${item.id}/remove-item`);
    };

    return (
        <Row className="my-5">
            <Col md={6}>
                <Image src={information.scheduleImage} alt={information.title} fluid className="rounded" />
            </Col>
            <Col md={6}>
                <h2 className="mb-4">{information.title}</h2>
                <p><strong>시작일:</strong> {information.startDate}</p>
                <p><strong>종료일:</strong> {information.endDate}</p>
                <p><strong>인원:</strong> {information.count}</p>
                <p><strong>조회수:</strong> {information.views}</p>
                <hr />
                <h3 className="mb-3">참여자 정보</h3>
                <ListGroup>
                    {participantProfile.map((profile, index) => (
                        <ListGroup.Item key={index} className="border-0 mb-3">
                            <Image src={profile.profileImage} alt="Profile" roundedCircle className="mr-3" width="50" height="50" />
                            <div>
                                <p className="mb-1"><strong>닉네임:</strong> {profile.nickname}</p>
                                <p className="mb-1"><strong>MBTI:</strong> {profile.mbti}</p>
                                <p className="mb-0"><strong>평점:</strong> {profile.reviewPoint}</p>
                                <p><strong>리뷰:</strong> {profile.reviewContent}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <hr/>
            <Col md={12}>
                <h3 className="mt-5 mb-3">일정 항목</h3>
                <Row>
                    {scheduleItemInfoResponse.map((item, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text><strong>주소:</strong> {item.address}</Card.Text>
                                    <Card.Text><strong>계획일:</strong> {item.planDate}</Card.Text>
                                    <Card.Text><strong>구분:</strong> {item.kind}</Card.Text>
                                    <Card.Text><strong>가격:</strong> {item.cost}</Card.Text>
                                    <Card.Text><strong>내용:</strong> {item.content}</Card.Text>
                                    <Button variant="success" onClick={() => handleClickModifyItem(item)} className="me-2">수정</Button>
                                    <Button variant="danger" onClick={() => handleClickDeletedItem(item)}>삭제</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
}

export default ScheduleItem;
