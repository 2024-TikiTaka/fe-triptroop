import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminUserListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PagingBar from "../../../components/pagination/PagingBar";
import {Search} from "react-bootstrap-icons";

//TODO: 응답 데이터 값이 없을때, 어떻게 화면에 보여줄 것인지 정리 후 처리 예정.
//TODO: 조회 페이지 공통 : 1) 페이징 처리 , 2) 검색 및 옵션 처리
//TODO: 조회, 상세 조회 페이지 공통 : 1) 이넘타입 등 단어 변경 적용 처리
function AdminUsers() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const {getList} = useSelector(state => state.adminUserReducer);

    useEffect(() => {
        dispatch(callAdminUserListAPI({currentPage}))
    }, [currentPage, dispatch]);

    const onClickHandeleClick = () => {
        navigate('/admin/users/regist');
    }
    //console.log('이거 데이터 있어?? 겟인포 : ', getList)
    return (
        <>
            <div className="d-flex justify-content-between mb-4 align-items-center">
                <Form className="search-form d-flex align-items-center">
                    <Form.Select>
                        <option value="all">전체</option>
                        <option value="email">아이디</option>
                        <option value="nickname">닉네임</option>
                        <option value="role">권한</option>
                        <option value="status">상태</option>
                    </Form.Select>
                    <div className="search-input">
                        <Search size="22px" fill="#757575"/>
                        <input type="text" placeholder="검색어를 입력해주세요."/>
                    </div>
                    <Button>검색</Button>
                </Form>
                <Button onClick={onClickHandeleClick}>회원 등록</Button>
            </div>
            {getList ? (
                <div className="ad-user-list">
                    <div className="user-list-table">
                        <AdminUserList data={getList.data}/>
                    </div>
                    <PagingBar className="justify-content-center" pageInfo={getList.pageInfo}
                               setCurrentPage={setCurrentPage}/>
                </div>
            ) : (
                <div className="no-data">
                    회원 내역이 존재 하지 않습니다.
                </div>
            )}
        </>
    );

}

export default AdminUsers;