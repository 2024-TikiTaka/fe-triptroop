import React from "react";
import { Github } from "react-bootstrap-icons";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Figma, Miro, Notion } from "./Icons";

function Footer() {
    return (
        <footer>
            <Container fluid={"sm"}>
                <Row>
                    <Col>
                        <div className="footer-img">
                            <Col xs={5}>
                                <button className="footer-logo-btn">
                                    <Image src="/images/footer_logo.svg" fluid />
                                </button>
                            </Col>
                            <Col xs={7} className="link-list">
                                <Link to={"https://miro.com/app/board/uXjVKOTCUZ4=/?share_link_id=810277987377"}>
                                    <Miro height={"35"} />
                                </Link>
                                <Link to={"https://www.notion.so/TikiTaka-236e800b56904eb08c2e172741c97b61"}>
                                    <Notion height={"35"} />
                                </Link>
                                <Link to={"https://www.figma.com/file/m8ssGV3WWCHJBqa2XwBtZE?embed_host=notion&kind=file&mode=dev&node-id=0%3A1&t=5CSVOgmOO6rWhjHG-1&type=design&viewer=1"}>
                                    <Figma height={"35"} />
                                </Link>
                                <Link to={"https://github.com/2024-TikiTaka"}>
                                    <Github color={"white"} size={"35"} />
                                </Link>
                            </Col>
                        </div>
                        <div className="footer-list">
                            <Col xl>
                                <Nav>
                                    <Nav.Item>
                                        <span>TripTroop [트립트룹]</span>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <span>서울특별시 종로구 대일빌딩 15층 11강의실</span>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <span>02-1234-5678</span>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <span>triptroop.official@gmail.com</span>
                                    </Nav.Item>
                                    {/* <Nav.Item> */}
                                    {/*     <span>고객센터 : 사이트 내 문의</span> */}
                                    {/* </Nav.Item> */}
                                    <Nav.Item>
                                        <Nav.Link href="#">이용약관</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#">개인정보처리방침</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <p>Copyright © 2024 TripTroop Final Project. All Rights Reserved.</p>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
