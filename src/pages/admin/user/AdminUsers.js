import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callAdminUserListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";

//TODO: 응답 데이터 값이 없을때, 어떻게 화면에 보여줄 것인지 정리 후 처리 예정.
//TODO: 조회 페이지 공통 : 1) 페이징 처리 , 2) 검색 및 옵션 처리
//TODO: 조회, 상세 조회 페이지 공통 : 1) 이넘타입 등 단어 변경 적용 처리
function AdminUsers() {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.adminUserReducer.getList);

    useEffect(() => {
        dispatch(callAdminUserListAPI())
    }, [dispatch]);

    return (
        <>
            {admin && (
                <>
                    <AdminUserList data={admin}/>
                </>
            )}
        </>
    );
}

export default AdminUsers;