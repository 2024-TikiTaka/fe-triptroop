 import Wrapper from "./Wrapper";
 import DesktopNavbar from "../components/common/Header/DesktopNavbar";
 import MobileNavbar from "../components/common/Header/MobileNavbar";

 function Header() {

     return (
        <header>
            <Wrapper>
                <DesktopNavbar/>
                <MobileNavbar/>
            </Wrapper>
        </header>
    );
 }
 export default Header;
