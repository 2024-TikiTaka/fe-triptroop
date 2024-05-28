import React from 'react';
import { Github } from "react-bootstrap-icons";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

function Wrapper({ children }) {
    return (
        <Container>
            <div className="wrapper">
                {children}
            </div>
        </Container>
    );
}

export default Wrapper;