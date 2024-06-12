import '../styles/admin.css';

import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import AdminHeader from '../components/common/admin/AdminHeader';
import AdminNav from '../components/common/admin/AdminNav';
import Footer from '../components/common/Footer';
import { ToastContainer } from "react-toastify";

function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <AdminNav/>
                <main className="admin-main">
                    <ToastContainer
                        position="top-right"
                        autoClose={1800}
                        limit={1}
                        closeOnClick={true}
                        pauseOnFocusLoss={false}
                    />
                    <Outlet />
                </main>
            <Footer />
        </>
    );
}

export default AdminLayout;
