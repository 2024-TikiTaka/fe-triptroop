import React from 'react';
import Button from "react-bootstrap/Button";

function BeforeLoginButtons() {
    return (
        <div className="user-btns">
            <Button className="outline blue-900 " onClick={() => alert('회원가입 버튼 클릭 확인')}>회원가입</Button>
            <Button className="blue-900" onClick={() => alert('로그인 버튼 클릭 확인')}>로그인</Button>
        </div>
    );
}

export default BeforeLoginButtons;