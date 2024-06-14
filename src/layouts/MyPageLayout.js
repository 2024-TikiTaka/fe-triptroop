import '../styles/sub.css';

import React from "react";
import { Outlet } from 'react-router-dom';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container } from "react-bootstrap";

function MyPageLayout() {
    return (
        <>
            <Header />
            <main className="main mypage-main">
                <Container fluid={"md"}>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default MyPageLayout;
