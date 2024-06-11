import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import UserInfoForm from "../../components/form/UserInfoForm";

const UserInfo = () => {

  return (
    <Container>
      <Row>
        <Col lg={4} xl={3} className="vstack gap-4">
          <Card bg="light" className="w-100">
            <Card.Header>메뉴</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item active>회원 정보</ListGroup.Item>
                <ListGroup.Item>프로필 수정</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8} xl={9}>
          {/* 회원 정보 */}
          <div className="vstack gap-4">
            <UserInfoForm />

            <Card className="border">
              <Card.Header className="border-bottom">
                <h4 className="card-header-title">Update email</h4>
                <p className="mb-0">
                  Your current email address is{" "}
                  <span className="text-primary">example@gmail.com</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Label>
                    Enter your new email id
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email id"
                  />
                  <div className="text-end mt-3">
                    <Button variant="primary" type="submit">
                      Save Email
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            <Card className="border">
              <Card.Header className="border-bottom">
                <h4 className="card-header-title">Update Password</h4>
                <p className="mb-0">
                  Your current email address is{" "}
                  <span className="text-primary">example@gmail.com</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Current password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter current password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter new password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="password"
                        placeholder="Enter new password"
                      />
                      <Button variant="outline-secondary">
                        <i className="fas fa-eye-slash"></i>
                      </Button>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </Form.Group>
                  <div className="text-end">
                    <Button variant="primary" type="submit">
                      Change Password
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
