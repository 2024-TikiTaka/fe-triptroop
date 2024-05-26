import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Wrapper({ children}) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xl={11}>
                    <div className="wrapper">
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Wrapper;