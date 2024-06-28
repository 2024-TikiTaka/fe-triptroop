import React from "react";
import { Button } from "react-bootstrap";
import { Kakao } from "../common/Icons";

const KakaoButton = ({ ...props }) => {
    const REST_API_KEY = `${process.env.REACT_APP_KAKAO_SECRET}`;
    const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_URL}`;
    const KAKAO_DEFAULT_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleClick = () => {
        window.location.href = KAKAO_DEFAULT_URL;
    };

    return (
        <>
            <Button
                variant="light"
                size={"lg"}
                style={{ background: "#FEE500" }}
                className="fs-6 mb-0"
                onClick={handleClick}
            >
                <Kakao width={"18"} />
                <span className="ms-2">카카오로 시작하기</span>
            </Button>
        </>
    );
};

export default KakaoButton;
