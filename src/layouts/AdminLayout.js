import '../styles/admin.css';

import {Outlet} from 'react-router-dom';

import AdminHeader from '../components/common/admin/AdminHeader';
import AdminNav from '../components/common/admin/AdminNav';
import Footer from '../components/common/Footer';
import {Container} from "react-bootstrap";

function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminHeader/>
            <AdminNav/>
            <main className="admin-main">
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

export default AdminLayout;
