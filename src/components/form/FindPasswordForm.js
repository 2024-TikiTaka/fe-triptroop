import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { callCheckVerificationCodeAPI, callSendVerificationCodeAPI } from "../../apis/AuthAPICalls";

function FindPasswordForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { success: signupSuccess } = useSelector(state => state.userReducer);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm();
    const [ verifiedEmail, setVerifiedEmail ] = useState(false);
    const [ verifyToken, setVerifyToken ] = useState('');


    const sendVerificationCode = async () => {
        const email = watch('email');
        if (email && !errors.email) {
            const response = await dispatch(callSendVerificationCodeAPI(email));
            const message = response.result?.message;

            if (response.success) {
                toast.info(response.message);
                setVerifyToken(response.result);
                setVerifiedEmail(false);
                toast.info(message, { toastId: 'email' });
                return true;
            } else {
                toast.error(message, { toastId: 'email' });
            }
        }
    };
    const checkVerificationCode = async () => {
        const response = await dispatch(callCheckVerificationCodeAPI(verifyToken, watch('code'), watch('email')));
        const { success } = response;

        if (success) {
            setVerifiedEmail(true);
            return true;
        } else {
            setVerifiedEmail(false);
            return false;
        }
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Col>
                    <Card className="border">
                        <Card.Header className="pb-0">
                            <p className="pt-2">이메일 인증</p>
                        </Card.Header>
                        <Card.Body>
                            {/* 이메일 */}
                            <Col>
                                <Form.Group className="mb-2" controlId="email">
                                    <Form.Label>이메일</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            className="fs-6 form-control-lg"
                                            placeholder="이메일 입력"
                                            isValid={watch('email') && !errors.email}
                                            isInvalid={watch('email') && errors.email}
                                            {...register("email", { required: '필수 항목입니다.' })}
                                        />
                                        <Button variant="outline-dark"
                                                onClick={sendVerificationCode}
                                                disabled={!watch('email') || errors.email}
                                        >
                                            전송
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                {/* 이메일 인증 번호 */}
                                <Form.Group className="mt-4 mb-3" controlId="code">
                                    <Form.Control
                                        name="code"
                                        placeholder="인증번호 입력"
                                        className="fs-6 form-control-lg"
                                        maxLength={6}
                                        isInvalid={watch('code') && !errors.code && !verifiedEmail}
                                        isValid={!errors.code && verifiedEmail}
                                        {...register("code", {
                                            required: '필수 항목입니다.',
                                            validate: { checkVerificationCode }
                                        })}
                                        disabled={!verifyToken && !verifiedEmail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        인증 번호가 올바르지 않습니다.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">
                                        이메일 인증이 완료되었습니다.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>


                {/* 이메일 */}
                <Col className="mt-3">
                    <Card className="border">
                        <Card.Header className="pb-0">
                            <p className="pt-2">비밀번호 입력</p>
                        </Card.Header>
                        <Card.Body>
                            {/* 비밀번호 */}
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호 입력"
                                    className="fs-6 form-control-lg"
                                    maxLength={20}
                                    isInvalid={errors.password}
                                    isValid={watch('password') && !errors.password}
                                    {...register("password", {
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

                            <div className="text-end mt-4">
                                <Button
                                    type="submit"
                                    className="fs-6 w-100 mb-0 blue-800"
                                    disabled={!isValid}
                                >
                                    비밀번호 변경
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Form>
        </>
    );
}

export default FindPasswordForm;