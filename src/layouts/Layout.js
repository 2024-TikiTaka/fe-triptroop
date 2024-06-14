import '../styles/sub.css';

import React from "react";
import { Outlet } from 'react-router-dom';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container } from "react-bootstrap";

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;
