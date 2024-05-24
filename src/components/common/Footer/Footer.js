    import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-img">
                    <button className="footer-logo-btn"><img src="/images/footer_logo.svg" alt="footer logo 이미지"/></button>
                    <ul>
                        <li><img src="/images/footer_icon_miro.png" alt="footer영역의 Miro 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_notion.png" alt="footer영역의 Notion 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_figma.png" alt="footer영역의 Figma 버튼 이미지"/></li>
                        <li><img src="/images/footer_icon_github.png" alt="footer영역의 GitHub 버튼 이미지"/></li>
                    </ul>
                </div>
                <ul>
                    <li>상호 : TripTroop[트립트룹]</li>
                    <li>소재지 : 서울특별시 종로구 대일빌딩 15층 11 Room</li>
                    <li>연락처 : 02-1234-5678</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>고객센터 : 사이트 내 문의</li>
                    <li>E-mail : ttcontact@ttcontact.com</li>
                </ul>
                <p>
                    Copyright © 2024 TripTroop Final Project. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;