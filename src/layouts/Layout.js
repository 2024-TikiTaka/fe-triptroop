import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ToastContainer } from "react-toastify";

function Layout() {
    return (
        <>
            <Header />
            <main className="main">
                <ToastContainer
                    position="top-right"
                    autoClose={1800}
                    limit={1}
                    closeOnClick={true}
                    pauseOnFocusLoss={false}
                />

                <Container className="py-5">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;
