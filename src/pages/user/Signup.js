import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { reset } from "../../modules/UserModules";

import SignupForm from "../../components/form/SignupForm";
import LoginForm from "../../components/form/LoginForm";


function Signup() {

    const { success } = useSelector(state => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (success === true) {
            navigate(`/login`);
            dispatch(reset());
        }
    }, [ success ]);

    return (
        <>
            <div className="auth-content">
                <SignupForm />
            </div>
        </>
    );
}

export default Signup;