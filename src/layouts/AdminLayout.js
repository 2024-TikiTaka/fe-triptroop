import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { ToastContainer } from "react-toastify";

function AdminLayout() {
    return (
        <>
            <Header />
            <main className="admin-main">
                <ToastContainer
                    position="top-right"
                    autoClose={1800}
                    limit={1}
                    closeOnClick={true}
                    pauseOnFocusLoss={false}
                />

                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default AdminLayout;
