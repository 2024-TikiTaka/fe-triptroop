import React from 'react';
import Button from "react-bootstrap/Button";

function AfterLoginButtons() {
    return (
        <div className="user-btns">
            <Button className="outline blue-900">마이페이지</Button>
            <Button className="blue-900">로그아웃</Button>
        </div>
    );
}

export default AfterLoginButtons;