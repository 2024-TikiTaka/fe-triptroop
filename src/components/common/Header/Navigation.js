import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div className="nav">
            <img src="./logo.svg" alt="logo" />
            <ul className="">
                <li>
                    <NavLink to="/">여행지 소개</NavLink>
                </li>
                <li>
                    <NavLink to="/travels">일정</NavLink>
                </li>
                <li>
                    <NavLink to="/travels">동행글</NavLink>
                </li>
                <li>
                    <NavLink to="/companions">문의하기</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;