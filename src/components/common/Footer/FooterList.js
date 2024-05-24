import React from 'react';
import {Col, Nav} from "react-bootstrap";

function FooterList() {
    return (
        <div className="footer-list">
            <Col xl>
                <Nav className="">
                    <Nav.Item>
                        <span>TripTroop [트립트룹]</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span>서울특별시 종로구 대일빌딩 15층 11 Room</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span>02-1234-5678</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span>E-mail : ttcontact@ttcontact.com</span>
                    </Nav.Item>
                    <Nav.Item>
                        <span>고객센터 : 사이트 내 문의</span>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">이용약관</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">개인정보처리방침</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col xl={12} className="mt-3">
                <p>
                    Copyright © 2024 TripTroop Final Project. All Rights Reserved.
                </p>
            </Col>
        </div>
    );
}

export default FooterList;