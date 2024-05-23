 import {isLogin} from "../../../utils/TokenUtils";
 import Navigation from "./Navigation";
 import Wrapper from "../../../layouts/Wrapper";
 import AfterLoginButtons from "./AfterLoginButtons";
 import BeforeLoginButtons from "./BeforeLoginButtons";
 import Logo from "./Logo";

 function Header() {

    function BeforeLogin() {
         return (
             <>
                 <BeforeLoginButtons/>
             </>
         );
     }

     function AfterLogin() {
         return (
             <>
                 <AfterLoginButtons/>
             </>
         );
     }

     return (
        <header className="header">
            <Wrapper>
                <Logo/>
                <Navigation/>
                { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
            </Wrapper>
        </header>
    );
 }
 export default Header;