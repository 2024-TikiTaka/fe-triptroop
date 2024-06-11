import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import React from "react";

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Container className="py-5">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;
