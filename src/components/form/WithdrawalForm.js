import React from 'react';
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";

function WithdrawalForm({ userInfo }) {

    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">회원 탈퇴</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>비밀번호</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="비밀번호를 입력하세요."
                                    // isInvalid={errors.email}
                                    // onBlur={checkDuplicateEmail}
                                    // {...register("password", {
                                    //     required: '필수 항목입니다.',
                                    //     validate: {}
                                    // })}
                                />
                                {/* <Button variant="primary" */}
                                {/*         // onClick={sendVerificationCode}> */}
                                {/*     인증 */}
                                {/* </Button> */}
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
                                탈퇴하기
                            </Button>
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}


export default WithdrawalForm;
