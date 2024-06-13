import '../styles/sub.css';

import React from "react";
import { Outlet } from 'react-router-dom';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default Layout;
