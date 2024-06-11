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
import MyPageNavbar from "../../components/common/MyPageNavbar";
import React from "react";

const UserInfo = () => {

    return (
        <>


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
        </>
    );
};

export default UserInfo;
