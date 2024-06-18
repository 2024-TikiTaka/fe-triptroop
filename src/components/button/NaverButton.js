import React from "react";
import { Button } from "react-bootstrap";
import { Naver } from "../common/Icons";

const NaverButton = () => {
    // const REST_API_KEY = `${process.env.REACT_APP_KAKAO_SECRET}`;
    // const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_URL}`;
    // const NAVER_DEFAULT_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    //
    // const handleClick = () => {
    //     window.location.href = NAVER_DEFAULT_URL;
    // };
    return (
        <>
            <Button
                variant="light"
                size={"lg"}
                style={{ background: "#03c75a" }}
                className="fs-6 mb-0"
                // onClick={handleClick}
            >
                <Naver width={"18"} fill={"#fff"} />
                <span className="ms-2 text-white">네이버로 시작하기</span>
            </Button>
        </>
    );
};

export default NaverButton;
