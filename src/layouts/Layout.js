import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Container from "react-bootstrap/Container";

function Layout() {

    return (
        <>
            <Header />
            <main className="main">
                <Container fluid>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;