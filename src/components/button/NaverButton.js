import React from "react";
import { Button } from "react-bootstrap";
import { Naver } from "../common/Icons";

const NaverButton = () => {
    const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    const NAVER_REDIRECT_URI = `${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
    const NAVER_AUTHORIZATION_URI = `${process.env.REACT_APP_NAVER_AUTHORIZATION_URI}?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;

    const handleClick = () => {
        window.location.href = NAVER_AUTHORIZATION_URI;
    };
    
    return (
        <>
            <Button
                variant="light"
                size={"lg"}
                style={{ background: "#03c75a" }}
                className="fs-6 mb-0"
                onClick={handleClick}
            >
                <Naver width={"18"} fill={"#fff"} />
                <span className="ms-2 text-white">네이버로 시작하기</span>
            </Button>
        </>
    );
};

export default NaverButton;
