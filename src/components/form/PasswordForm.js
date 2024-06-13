import React from 'react';
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function PasswordForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {

    };
    
    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">비밀변호 재설정</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3">
                        <Form.Group className="mb-3" controlId="currentPassword">
                            <Form.Label>기존 비밀번호</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="비밀번호를 입력하세요."
                                    // isInvalid={errors.email}
                                    //                                     // onBlur={checkDuplicateEmail}
                                    //                                     // {...register("password", {
                                    //                                     //     required: '필수 항목입니다.',
                                    //                                     //     validate: {}
                                    // })}
                                />

                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                {/* {errors.email?.message} */}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newPassword">
                            <Form.Label>새 비밀번호</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="새로운 비밀번호"
                                />

                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="새로운 비밀번호 확인"
                                />

                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                {/* {errors.email?.message} */}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Col xs={12} className="text-end">
                            <Button
                                type="submit"
                                variant="primary"
                            >
                                비밀번호 변경
                            </Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}


export default PasswordForm;
