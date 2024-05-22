import React from 'react';
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div className="footer-div">
            <div className="wrapper">
                <div className="foo-logo">

                    <ul>
                        <li><img src="/images/footer_icon_miro.png" alt="footer영역의 Miro 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_notion.png" alt="footer영역의 Notion 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_figma.png" alt="footer영역의 Figma 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_github.png" alt="footer영역의 GitHub 버튼 이미지"/></li>
                    </ul>
                </div>
                <p>
                    상호 : 트립트룹 ㅣ 소재지 : 서울특별시 종로구 대일빌딩 15층 11 Room l 연락처 : 02-1234-5678 ㅣ 이용약관 ㅣ 개인정보처리방침 ㅣ 고객센터 : 사이트 내
                    문의 l E-mail : ttcontact@ttcontact.con
                </p>
                <p>
                    Copyright © 2024 TripTroop Final Project. All Rights Reserved.
                </p>
                <div className="footer-buttons">
                    <Button variant="outline-primary " onClick={() => alert('CustomButton clicked!')}>Contact Us</Button>
                    <Button variant="secondary" onClick={() => alert('Another action')}>Learn More</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;