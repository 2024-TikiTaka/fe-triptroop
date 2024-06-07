import { Col, Form, Row } from "react-bootstrap";

const CustomInput = ({
                         type = "text",
                         label,
                         id,
                         className = "fs-6",
                         size = "lg",
                         placeholder,
                         onChangeHandler,
                         message,
                         isValid = false,
                         isInvalid = false,
                         required = false,

                     }) => {
    return (
        <Form.Group className="mb-3" controlId={id}>
            <Row>
                <Col>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col>
                    {message && (
                        <Form.Control.Feedback type={isInvalid ? "invalid" : "valid"} tooltip>
                            {message}
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Row>
            <Form.Control
                type={type}
                className={className}
                name={id}
                size={size}
                placeholder={placeholder}
                onChange={onChangeHandler}
                isValid={isValid}
                isInvalid={isInvalid}
                required={required}
            />
        </Form.Group>
    );
};

export default CustomInput;