import React from 'react';
import Button from "react-bootstrap/Button";
import {Col, Image} from "react-bootstrap";
import 'react-bootstrap-icons';
import {LockFill} from "react-bootstrap-icons";

function AfterLogin() {
    return (
        <Col className="user-btns">
            <Button className="d-none d-lg-inline-block outline blue-900">마이페이지</Button>
            <Button className="d-none d-lg-inline-block blue-900">로그아웃</Button>
            <Button className="d-lg-none outline blue-900"><Image src="/images/header_icon_mypage_basic.png"/></Button>
            <Button className="d-lg-none blue-900"><LockFill/></Button>
        </Col>
    );
}

export default AfterLogin;
