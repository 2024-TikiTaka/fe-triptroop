import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import { Chat, Person } from "react-bootstrap-icons";
import { Button, Container, Dropdown, Image, Navbar } from "react-bootstrap";

import { isLogin } from "../../../utils/TokenUtils";
import { reset } from "../../../modules/UserModules";
import { callLogoutAPI } from "../../../apis/UserAPICalls";
import ChatBox from "../../box/ChatBox";

function AdminHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.userReducer);
    const [showChat, setShowChat] = useState(false);

    const getHeaderText = () => {
        switch (location.pathname) {
            case '/users':
                return '회원 관리';
            case '/inquires':
                return '문의 관리';
            case '/categories':
                return '카테고리 관리';
            case '/notices':
                return '공지 관리';
            default:
                return '메인 화면';
        }
    }

    useEffect(() => {
        if (success === true) {
            navigate(`/`);
            dispatch(reset());
        }
    }, [success]);

    function AfterLogin() {
        return (
            <>
                <Button variant="light" onClick={() => setShowChat(!showChat)}>
                    <Chat size="20px" /> 채팅
                </Button>
                <Dropdown className="ms-3">
                    <Dropdown.Toggle role="button" variant="light" data-bs-auto-close="outside">
                        <Person size="22px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-animation dropdown-menu-end shadow" aria-labelledby="profileDropdown">
                        <Dropdown.Item as="div" className="px-3 mb-3">
                            <div className="d-flex align-items-center">
                                <div className="avatar me-3">
                                    <Image
                                        src="https://zrr.kr/Aat7" roundedCircle
                                        className="avatar mx-auto d-block mb-3"
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </div>
                                <div>
                                    <a className="h6 mt-2 mt-sm-0">Lori Ferguson</a>
                                    <p className="small m-0">example@gmail.com</p>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => navigate(`/mypage`)}>마이페이지 </Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate(`/likes`)}>좋아요</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate(`/settings`)}>설정</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => dispatch(callLogoutAPI())}>로그아웃</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <ChatBox show={showChat} handleClose={() => setShowChat(false)} />
            </>
        );
    }

    return (
        <Navbar className="admin-header" fixed="top" expand="md">
            <Container fluid>
                <h2>{getHeaderText()}</h2>
                {isLogin() && AfterLogin()}
            </Container>
        </Navbar>
    );
}

export default AdminHeader;
