import { Col, Container, Image, Row } from "react-bootstrap";

function ProfileBox() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Image
                            src="https://i.namu.wiki/i/gOZDQxebNtnvUrysvLX6kWdeA9UgfpRkgRvzeuI0WclQ09q9FGkY12Ba5B5GcyCD8KEKtkQafSuPG49eoYDfX8yFg4qgidCo4z1QYD8OVosnPpnDAI2SbFA8bWYvxUTSIo_LbNjKiSnfWBqRz8xjWQ.webp"
                            roundedCircle
                            className="avatar"
                        />
                    </Col>
                    <Col>
                        <Row>닉네임</Row>
                        <Row>ㅇㅅㅇ</Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProfileBox;
