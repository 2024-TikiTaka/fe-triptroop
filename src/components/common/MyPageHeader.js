import React from "react";
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import ProfileImage from "./ProfileImage";
import { BalloonFill, ThreeDots } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function MyPageHeader({ userInfo, profileInfo }) {

    const navigate = useNavigate();


    return (
        <Container className="mt-4 mb-4">
            <Row className="align-items-stretch">
                <Col md={8}>
                    <Card className="p-2 h-100">
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={4}>
                                    <div className="d-flex flex-column align-items-center">
                                        <ProfileImage
                                            src={profileInfo?.profileImage}
                                            size={"5rem"} />
                                        <h4 className="mt-2 h6">{profileInfo?.nickname}</h4>
                                        <span className="small">{userInfo?.email}</span>
                                    </div>
                                </Col>
                                <Col xs={12} md={8}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h5 className="small">소개</h5>
                                            <p>{profileInfo?.introduction}</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                <ThreeDots />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => navigate(`/settings`)}>설정</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* <div className="d-flex justify-content-end mt-3"> */}
                                    {/*     <Button variant="outline-primary" className="me-3">친구</Button> */}
                                    {/*     <Button variant="outline-dark">차단</Button> */}
                                    {/* </div> */}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="p-2 h-100">
                        <Card.Body>
                            <div style={{ height: '100px' }}>
                                <h5 className="small">고도</h5>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <BalloonFill className="fs-1" />
                                    <div className="fs-2">{userInfo?.godo}m</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MyPageHeader;