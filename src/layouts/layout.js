import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import {Outlet} from "react-router-dom";
function Layout() {


    return (
        <>
            <Header/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
export default Layout;