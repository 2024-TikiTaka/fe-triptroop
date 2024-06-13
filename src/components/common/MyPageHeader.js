import React from "react";
import { Badge, Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';

function MyPageHeader() {

    const [ showOffcanvas, setShowOffcanvas ] = React.useState(false);
    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Row>
                                <Col xs={3}>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="assets/images/avatar/01.jpg" alt="Profile" className="rounded-circle" width="100" />
                                        <h5 className="mt-2">남나미</h5>
                                        <span>여성 / 20대</span>
                                    </div>
                                </Col>
                                <Col xs={9}>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <div className="mb-2">
                                                <Badge bg="secondary" className="me-1">레포츠</Badge>
                                                <Badge bg="secondary" className="me-1">문화</Badge>
                                                <Badge bg="secondary" className="me-1">체험</Badge>
                                                <Badge bg="secondary" className="me-1">공연/행사</Badge>
                                                <Badge bg="secondary" className="me-1">관광</Badge>
                                                <Badge bg="secondary" className="me-1">맛집</Badge>
                                            </div>
                                            <h6>소개</h6>
                                            <p>여행 같이 가실분~ 동행글 올려놨으니 확인 후 신청 ㅋㅋ ㅎㅎ</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                <ThreeDots />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/profile-management">프로필 관리</Dropdown.Item>
                                                <Dropdown.Item href="#/account">계정</Dropdown.Item>
                                                <Dropdown.Item href="#/logout">로그아웃</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">
                                        <Button variant="outline-primary" className="me-3">친구</Button>
                                        <Button variant="outline-dark">차단</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>ss
                            <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                                <h4 className="mb-0">회원의 고도는</h4>
                                <div className="ms-3">
                                    <h1 className="mb-0">50M</h1>
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