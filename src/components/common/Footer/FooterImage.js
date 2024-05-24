import React from 'react';
import {Col, Image} from "react-bootstrap";

function FooterImage() {
    return (
        <div className="footer-img">
            <Col xs={5}>
                <button className="footer-logo-btn">
                    <Image src="/images/footer_logo.svg" fluid/>
                </button>
            </Col>
            <Col xs={7} className="link-list">
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
        </div>
    );
}

export default FooterImage;