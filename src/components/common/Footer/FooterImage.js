import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";

function FooterImage() {
    return (
        <>
            <Container className="footer-img">
                <Row className="gy-lg-4 gy-md-2 gy-sm-2 gy-xs-2">
                    <Col xl={4} lg={2} md={2} sm={2} xs={2}  >
                        <button className="footer-logo-btn">
                            <Image src="/images/footer_logo.svg" fluid/>
                        </button>
                    </Col>
                    <Col xl={8} lg={10} md={10} sm={10} xs={10} className="link-list">
                        <a href="https://miro.com/app/board/uXjVKOTCUZ4=/?share_link_id=810277987377">
                            <Image src="/images/footer_icon_miro.png" fluid/>
                        </a>
                        <a href="https://www.notion.so/TikiTaka-236e800b56904eb08c2e172741c97b61">
                            <Image src="/images/footer_icon_notion.png" fluid/>
                        </a>
                        <a href="https://www.figma.com/file/m8ssGV3WWCHJBqa2XwBtZE?embed_host=notion&kind=file&mode=dev&node-id=0%3A1&t=5CSVOgmOO6rWhjHG-1&type=design&viewer=1">
                            <Image src="/images/footer_icon_figma.png" fluid/>
                        </a>
                        <a href="https://github.com/2024-TikiTaka">
                            <Image src="/images/footer_icon_github.png" fluid/>
                        </a>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default FooterImage;