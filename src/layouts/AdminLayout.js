import '../styles/admin.css';

import { Outlet } from 'react-router-dom';

import AdminHeader from '../components/common/admin/AdminHeader';
import AdminNav from '../components/common/admin/AdminNav';
import Footer from '../components/common/Footer';

function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <AdminNav/>
                <main className="admin-main">
                    <Outlet />
                </main>
            <Footer />
        </>
    );
}

export default AdminLayout;
