import React from 'react';
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callChangePasswordAPI, callCheckPasswordAPI } from "../../apis/UserAPICalls";

function PasswordForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { success: changePasswordSuccess } = useSelector(state => state.userReducer);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm();

    const onSubmit = async () => {

        if (isValid) {
            const currentPassword = watch('currentPassword');
            const newPassword = watch('newPassword');
            const response = await (callChangePasswordAPI({ currentPassword, newPassword }));
            console.log(response);
        }
    };

    return (
        <>
            <Card className="border">
                <Card.Header className="border-bottom">
                    <h3 className="card-header-title my-1">비밀번호 재설정</h3>
                </Card.Header>
                <Card.Body>
                    <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-2" controlId="currentPassword">
                            <Form.Label>기존 비밀번호</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="password"
                                    name="currentPassword"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="비밀번호 입력"
                                    isValid={watch('currentPassword') && !errors.currentPassword}
                                    {...register("currentPassword", { required: "비밀번호를 입력해주세요." })}
                                />
                            </InputGroup>
                            {/* <Form.Control.Feedback type="invalid"> */}
                            {/*     /!* {errors.email?.message} *!/ */}
                            {/* </Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="newPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="비밀번호 입력"
                                className="fs-6 form-control-lg"
                                maxLength={20}
                                {...register("newPassword", {
                                    required: '필수 항목입니다.',
                                    minLength: {
                                        value: 8,
                                        message: "8자 이상으로 작성해주세요."
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,20}$/,
                                        message: "8-20자의 대문자, 소문자, 숫자를 포함해야 합니다."
                                    }
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 비밀번호 확인 */}
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                label="비밀번호 확인"
                                placeholder="비밀번호 확인 입력"
                                className="fs-6 form-control-lg"
                                maxLength={20}
                                isInvalid={errors.confirmPassword}
                                isValid={watch('confirmPassword') && !errors.confirmPassword}
                                {...register("confirmPassword", {
                                    required: '필수 항목입니다.',
                                    validate: (value => value === watch('password') || '비밀번호가 일치하지 않습니다.')
                                })}
                            />
                            {errors.confirmPassword && <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword.message}
                            </Form.Control.Feedback>}
                        </Form.Group>

                        <Col xs={12} className="text-end">
                            <Button
                                type="submit"
                                variant="primary">
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
