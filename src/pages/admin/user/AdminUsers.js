import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminUserListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PagingBar from "../../../components/pagination/PagingBar";

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
    console.log('이거 데이터 있어?? 겟인포 : ', getList)
    return (
        <>
            <h1>어드민유저스 </h1>
            {getList && (
                <div className="ad-user-list">
                    <h2>회원 목록</h2>
                    <div className="d-flex justify-content-between">
                        <div>검색바</div>
                        <Button onClick={onClickHandeleClick}>회원 등록</Button>
                    </div>
                    <AdminUserList data={getList.data}/>
                    <PagingBar pageInfo={getList.pageInfo} setCurrentPage={setCurrentPage}/>
                </div>
            )}
        </>
    );
}

export default AdminUsers;