import React from "react";
import { Col } from "react-bootstrap";

function AuthContent({ title, children }) {
    return (
        <>
            <div className="auth-content">
                <h2 className="fs-2 mb-5 text-center">{title}</h2>

                <Col xl={4} lg={6} md={8} sm={10} xs={11} className="m-auto">
                    {children}
                </Col>
            </div>
        </>
    );
}
export default AuthContent;
 