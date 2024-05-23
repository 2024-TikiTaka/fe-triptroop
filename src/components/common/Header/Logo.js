import Button from "react-bootstrap/Button";
import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

function Logo() {
    return (
        <>
            <Col xs={3}>
                <a href="#" className="logo-btn"><Image src="/images/logo.svg" fluid/></a>
            </Col>
        </>
    );
}

export default Logo;