import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
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
            <Col md={12}>
                <h3 className="mt-5 mb-3">일정 항목</h3>
                {scheduleItemInfoResponse.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h4>{item.name}</h4>
                        <p><strong>주소:</strong> {item.address}</p>
                        <p><strong>계획일:</strong> {item.planDate}</p>
                        <p><strong>구분:</strong> {item.kind}</p>
                        <p><strong>가격:</strong> {item.cost}</p>
                        <p><strong>내용:</strong> {item.content}</p>
                        <Button variant="success" onClick={() => handleClickModifyItem(item)}>수정</Button>
                        <Button variant="danger" onClick={() => handleClickDeletedItem(item)}>삭제</Button>
                    </div>
                ))}
            </Col>
        </Row>
    );
}

export default ScheduleItem;
