import React from 'react';
import Button from "react-bootstrap/Button";
import { PersonPlusFill, UnlockFill} from "react-bootstrap-icons";

function BeforeLogin() {
    return (
        <div className="user-btns">
            <Button className="d-none d-lg-inline-block outline blue-900" onClick={() => alert('회원가입 버튼 클릭 확인')}>회원가입</Button>
            <Button className="d-none d-lg-inline-block blue-900" onClick={() => alert('로그인 버튼 클릭 확인')}>로그인</Button>
            <Button className="d-lg-none outline blue-900"><PersonPlusFill className="blue-900"/></Button>
            <Button className="d-lg-none blue-900"><UnlockFill className="white"/></Button>
        </div>
    );

}

export default BeforeLogin;
