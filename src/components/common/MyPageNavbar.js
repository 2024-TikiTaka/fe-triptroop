import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { Card, Image, ListGroup, Nav } from "react-bootstrap";
import { callProfileAPI } from "../../apis/UserAPICalls";
import { isLogin } from "../../utils/TokenUtils";
import { DefaultProfile } from "./Icons";

function MyPageNavbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (isLogin()) {
            dispatch(callProfileAPI());
        }
    }, []);


    return (
        <>
            <Card bg="light" className="mypage-nav w-100">
                <Card.Header>
                    <div className="text-center">
                        <div className="profile-image overflow-hidden border bg-white mt-3">
                            {!profileInfo ?
                                (
                                    <DefaultProfile
                                        className="avatar mx-auto d-block mb-3"

                                    />)
                                : <Image src={profileInfo?.profile.profileImage} className="avatar" />
                            }
                        </div>
                        <p className="nickname">{profileInfo?.profile.nickname}</p>
                        <p className="email">hello@gmail.com</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <ListGroup className="nav-list">
                        <ListGroup.Item active><Nav.Link>회원 정보</Nav.Link></ListGroup.Item>
                        <ListGroup.Item><Nav.Link>프로필 수정</Nav.Link></ListGroup.Item>
                        <ListGroup.Item><Nav.Link>비밀번호 수정</Nav.Link></ListGroup.Item>
                        <ListGroup.Item><Nav.Link>회원 탈퇴</Nav.Link></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
}

export default MyPageNavbar;
