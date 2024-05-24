import React from "react";
import {Col, Image} from "react-bootstrap";

function Logo() {
    return (
        <Col>
            <button className="logo-btn"><Image src="/images/logo.svg" fluid/></button>
        </Col>
    );
}

export default Logo;
