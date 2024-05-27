import { Outlet } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Wrapper from "../components/common/Wrapper";

function Layout() {

    return (
        <>
            <ThemeProvider
                breakpoints={[ 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs' ]}
                minBreakpoint="xs"
            >
                <Header />
                <main className="main">
                    <Wrapper>
                        <Outlet />
                    </Wrapper>
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
}
export default Layout;