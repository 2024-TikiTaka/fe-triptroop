import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import { callLoginAPI } from "../../apis/UserAPICalls";

import CustomInput from "../custom/CustomInput";
import CustomDivider from "../custom/CustomDivider";
import { Kakao, Naver } from "../common/Icons";


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
            <Form onSubmit={handleSubmit} className="mt-4 text-start">
                <CustomInput
                    label="이메일"
                    id="email"
                    onChangeHandler={onChangeHandler}
                />
                <CustomInput
                    type="password"
                    label="비밀번호"
                    id="password"
                    onChangeHandler={onChangeHandler}
                />
                {/* 비밀번호 찾기 */}
                {/* <div className="mb-3 d-sm-flex justify-content-between"> */}
                {/*     <Link to={"/find"}>비밀번호 찾기</Link> */}
                {/* </div> */}

                <Button
                    type="submit"
                    size="lg"
                    className="fs-6 w-100 mb-0  blue-800"
                    onClick={onClickLoginHandler}
                >
                    로그인
                </Button>
                <div className="mt-3 text-center">
                    <Link to={"/signup"}>회원이 아니신가요?</Link>
                </div>

            </Form>

            {/* Divider */}
            <CustomDivider text={"또는"} />

            {/* Social Login Button */}
            <div className="d-grid gap-3">
                <Button variant="light" className="mb-0 flex-row justify-content-center">
                    <Kakao width={"18"} />
                    <span className="ms-2">카카오 아이디로 로그인</span>
                </Button>
                <Button variant="light" className="mb-0 flex-row justify-content-center">
                    <Naver width={"18"} />
                    <span className="ms-2">네이버 아이디로 로그인</span>
                </Button>
            </div>
        </>
    );
}


export default LoginForm;
