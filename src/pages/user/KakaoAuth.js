import { Spinner } from "react-bootstrap";
import { useEffect } from "react";

const KakaoAuth = () => {
    // const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    useEffect(() => {
        fetch(`보내줄 주소?code=${code}`, {
            method: "POST", //
            headers: "application/x-www-form-urlencoded",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(data.result.user_id);
                console.log(data.result.jwt);
            })
            .catch((error) => {
                console.error("오류 발생", error); //
            });
    }, []);

    return (
        <div className="login-content">
            <div className="grid gap-2 text-center">

                <Spinner />

                <h3 className="my-3">로그인 중입니다.</h3>
                <p>잠시만 기다려주세요.</p>
            </div>
        </div>
    );
};

export default KakaoAuth;
