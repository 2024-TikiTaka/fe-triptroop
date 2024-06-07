import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, } from "react-bootstrap";
import { callLoginAPI } from "../../apis/UserAPICalls";

import CustomInput from "../custom/CustomInput";

function LoginForm() {

    const dispatch = useDispatch();
    const [ form, setForm ] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({ loginRequest: form }));
    };

    return (
        <>
            <h2 className="fs-1 fw-bold text-center mb-5">로그인</h2>

            <Form onSubmit={handleSubmit}>
                <CustomInput
                    label="이메일"
                    id="email"
                    onChangeHandler={onChangeHandler}
                    // message={!emailValid ? "Email already in use" : "사용가능한 이메일 입니다."}
                    // isInvalid={!emailValid}
                    // isValid={emailValid}
                />
                <CustomInput
                    type="password"
                    label="비밀번호"
                    id="password"
                    onChangeHandler={onChangeHandler}
                    // message={!emailValid ? "Email already in use" : "사용가능한 이메일 입니다."}
                    // isInvalid={!emailValid}
                    // isValid={emailValid}
                />

                <Button
                    type={"submit"}
                    size="lg"
                    className="fs-6"
                    onClick={onClickLoginHandler}>로그인</Button>
            </Form>
        </>
    );
}


export default LoginForm;
