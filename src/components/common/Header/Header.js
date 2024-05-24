 import {isLogin} from "../../../utils/TokenUtils";
 import Button from "react-bootstrap/Button";
 import Navigation from "./Navigation";
 import './Header.css';

 function Header() {

     function Chat() {
         return (
           <div className="chat">
               <Button className="chatIcon" onClick={() => alert('채팅')}>채팅</Button>
           </div>
         );
     }

    function BeforeLogin() {
         return (
             <div className="btnBox">
                 <Button className="outline blue-900 " onClick={() => alert('회원가입 버튼 클릭 확인')}>회원가입</Button>
                 <Button className="blue-900" onClick={() => alert('로그인 버튼 클릭 확인')}>로그인</Button>
             </div>
         );
     }

     function AfterLogin() {
         return (
             <div className="btnBox">
                 <Button className="outline blue-900">마이페이지</Button>
                 <Button className="blue-900">로그아웃</Button>
             </div>
         );
     }

     return (
        <header className="header">
            <div className="wrapper">
                <button className="logo-btn"><img src="/images/logo.svg" alt="logo 이미지"/></button>
                <Navigation/>
                <Chat/>
                { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
            </div>
        </header>
    );
 }
 export default Header;