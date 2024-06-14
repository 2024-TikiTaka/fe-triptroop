import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callScheduleAcceptAPI } from '../../apis/ScheduleAPICalls';

function ScheduleParticipantsListItem({ participant }) {
    const { scheduleParticipantId, nickname, mbti, profileImage, reviewPoint, reviewContent } = participant;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickAccept = () => {
        const confirmed = window.confirm("일정 참여 신청을 승인하시겠습니까?");
        if (confirmed) {
            dispatch(callScheduleAcceptAPI(scheduleParticipantId));
        }
    };

    const handleClickReject = () => {
        navigate(`/schedules/${scheduleParticipantId}/rejected`);
    };

    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
                <Card.Body>
                    <Image src={profileImage} alt="Profile" roundedCircle className="mr-3" width="50" height="50" />
                    <div>
                        <Card.Title>{nickname}</Card.Title>
                        <Card.Text>
                            <strong>MBTI:</strong> {mbti}<br />
                            <strong>평점:</strong> {reviewPoint}<br />
                            <strong>리뷰:</strong> {reviewContent || '리뷰 없음'}
                        </Card.Text>
                    </div>
                    <div className="mt-3">
                        <Button variant="success" onClick={handleClickAccept}>승인</Button>{' '}
                        <Button variant="danger" onClick={handleClickReject}>거절</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ScheduleParticipantsListItem;
