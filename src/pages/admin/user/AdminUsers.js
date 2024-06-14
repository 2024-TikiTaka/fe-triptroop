import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callAdminUserListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";


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