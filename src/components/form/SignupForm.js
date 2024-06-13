import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { callCheckEmailAPI, callSignupAPI } from "../../apis/UserAPICalls";

function SignupForm() {

    const dispatch = useDispatch();
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        setError,
        clearErrors,
        watch
    } = useForm();

    const checkDuplicateEmail = async (email) => {
        const result = await dispatch(callCheckEmailAPI({ email }));

        if (result?.status === 200) {
            clearErrors("email");
            return true;
        }
        if (result?.status === 409) {
            const errorMessage = result.data?.result?.message;
            setError("email",
                { message: errorMessage }
            );
            return false;
        }
    };

    const sendVerificationCode = async (email) => {
        const result = await dispatch(callCheckEmailAPI({ email }));

        if (result?.status === 200) {
            clearErrors("email");
            return true;
        }
        if (result?.status === 409) {
            const errorMessage = result.data?.result?.message;
            setError("email",
                { message: errorMessage }
            );
            return false;
        }
    };
    const onSubmit = (form) => {
        if (checkDuplicateEmail(form.email)) {
            dispatch(callSignupAPI({ signupRequest: form }));
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card className="border">
                    <Card.Body>
                        {/* 이메일 */}
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>이메일</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    size="lg"
                                    className="fs-6"
                                    placeholder="이메일 입력"
                                    isInvalid={errors.email}
                                    onBlur={checkDuplicateEmail}
                                    {...register("email", {
                                        required: '필수 항목입니다.',
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: '이메일 형식이 올바르지 않습니다.'
                                        },
                                        validate: { checkDuplicateEmail }
                                    })}
                                />
                                <Button variant="primary"
                                        onClick={sendVerificationCode}>
                                    인증
                                </Button>
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 이메일 인증 번호 */}
                        <Form.Group className="mb-3" controlId="code">
                            <Form.Control
                                name="code"
                                placeholder="인증번호 입력"
                                size="lg"
                                className="fs-6"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 비밀번호 */}
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="비밀번호 입력"
                                size="lg"
                                className="fs-6"
                                isInvalid={errors.password}
                                {...register("password", {
                                    required: '필수 항목입니다.',
                                    minLength: {
                                        value: 8,
                                        message: "8자 이상으로 작성해주세요."
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "20자 이내로 작성해주세요."
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
                                        message: "대문자, 소문자, 숫자를 모두 포함해주세요."
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
                                size="lg"
                                className="fs-6"
                                isInvalid={errors.confirmPassword}
                                {...register("confirmPassword", {
                                    required: '필수 항목입니다.',
                                    validate: (value => value === watch('password') || '비밀번호가 일치하지 않습니다.')
                                })}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 이름 */}
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>이름</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="이름 입력"
                                size="lg"
                                className="fs-6"
                                isInvalid={errors.name}
                                {...register("name", { required: '필수 항목입니다.' })}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 성별 */}
                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>성별</Form.Label>
                            <Form.Select
                                name="gender"
                                size="lg"
                                className="fs-6"
                                {...register("gender", { required: '필수 항목입니다.' })}
                                isInvalid={errors.gender}
                            >
                                <option>선택</option>
                                <option value="F">여자</option>
                                <option value="M">남자</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.gender?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* 생년월일 */}
                        <Form.Group className="mb-3" controlId="birth">
                            <Form.Label>생년월일</Form.Label>
                            <Form.Control
                                type="text"
                                name="birth"
                                label="생년월일"
                                placeholder="생년월일 입력 (8자리)"
                                size="lg"
                                className="fs-6"
                                {...register("birth", {
                                    required: '필수 항목입니다.',
                                    pattern: {
                                        value: /^\d{8}$/,
                                        message: '생년월일의 형식이 올바르지 않습니다. (ex. 19960504)'
                                    }
                                })}
                                isInvalid={errors.birth}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.birth?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-end mt-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="fs-6 w-100 mb-0 blue-800">
                                회원가입
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Form>
        </>
    );
}

export default SignupForm;