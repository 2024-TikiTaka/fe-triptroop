import { useDispatch } from 'react-redux';
import { Button, Form } from "react-bootstrap";
import { callLoginAPI } from "../../apis/UserAPICalls";
import { useState } from "react";

function LoginForm() {

    const dispatch = useDispatch();
    const [ form, setForm ] = useState({});
    const [ formChanged, setFormChanged ] = useState(false);

    const onChangeHandler = e => {
        setFormChanged(true);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onClickLoginHandler = () => {
        if (formChanged) {
            dispatch(callLoginAPI({ loginRequest: form }));
            setFormChanged(false);
        }
    };

    return (
        <>
            <Form className="mt-4 text-start">
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        size="lg"
                        className="fs-6"
                        onChange={onChangeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        size="lg"
                        className="fs-6"
                        onChange={onChangeHandler}
                    />
                </Form.Group>

                {/* 비밀번호 찾기 */}
                {/* <div className="mb-3 d-sm-flex justify-content-between"> */}
                {/*     <Link to={"/find"}>비밀번호 찾기</Link> */}
                {/* </div> */}

                <Button
                    size="lg"
                    className="fs-6 w-100 mb-0  blue-800"
                    onClick={onClickLoginHandler}
                >
                    로그인
                </Button>
            </Form>
        </>
    );
}


export default LoginForm;
