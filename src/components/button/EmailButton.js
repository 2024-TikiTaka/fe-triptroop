import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Envelope } from "react-bootstrap-icons";

const EmailButton = ({ ...props }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

    return (
        <>
            <Button
                variant="outline-dark"
                size={"lg"}
                className="fs-6 mb-0"
                onClick={handleClick}
            >
                <Envelope size={"18"} />
                <span className="ms-2">이메일로 가입하기</span>
            </Button>
        </>
    );
};

export default EmailButton;
