 import {isLogin} from "../../utils/TokenUtils";
 import Button from "react-bootstrap/Button";
 import Navigation from "./Navigation";
 import Wrapper from "../../layouts/Wrapper";

 function Header() {

    function BeforeLogin() {
         return (
             <div className="user-btns">
                 <Button className="outline blue-900 " onClick={() => alert('회원가입 버튼 클릭 확인')}>회원가입</Button>
                 <Button className="blue-900" onClick={() => alert('로그인 버튼 클릭 확인')}>로그인</Button>
             </div>
         );
     }

     function AfterLogin() {
         return (
             <div className="user-btns">
                 <Button className="outline blue-900">마이페이지</Button>
                 <Button className="blue-900">로그아웃</Button>
             </div>
         );
     }

     return (
        <header className="header">
            <Wrapper>
                <button className="logo-btn"><img src="/images/logo.svg" alt="logo 이미지"/></button>
                <Navigation/>
                { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
            </Wrapper>
        </header>
    );
 }
 export default Header;