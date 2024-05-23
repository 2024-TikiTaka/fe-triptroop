import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function FooterList() {
    return (
        <>
            <Container className="footer-list">
                <Row>
                    <Col xl>
                        <span>상호 : TripTroop[트립트룹]</span>
                        <span>소재지 : 서울특별시 종로구 대일빌딩 15층 11 Room</span>
                        <span>연락처 : 02-1234-5678</span>
                        <span>E-mail : ttcontact@ttcontact.com</span>
                        <span>고객센터 : 사이트 내 문의</span>
                        <span>이용약관</span>
                        <span>개인정보처리방침</span>
                    </Col>
                    <Col xl={12}>
                        <p>
                            Copyright © 2024 TripTroop Final Project. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FooterList;