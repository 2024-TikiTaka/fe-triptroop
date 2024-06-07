import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import LoginForm from "../../components/form/LoginForm";
import { reset } from "../../modules/UserModules";

function Login() {
    const navigate = useNavigate();
    const { success } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (success === true) {
            navigate('/');
            dispatch(reset());
        }
    }, [ success ]);

    const onClickSignupHandler = () => {
        navigate('/signup');
    };

    return (
        <>
            <div className="auth-content">
                <LoginForm />
                <Button
                    onClick={onClickSignupHandler}>
                    회원가입
                </Button>
            </div>
        </>
    );
}

export default Login;
