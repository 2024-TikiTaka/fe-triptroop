import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callAdminUserListAPI} from "../../../apis/AdminAPICalls";
import AdminUserList from "../../../components/list/AdminUserList";


function AdminUsers() {
    const dispatch = useDispatch();
    const {admin} = useSelector(state => state.adminReducer);
    //console.log("admin.getList 값 : ", admin.data);

    useEffect(() => {
        dispatch(callAdminUserListAPI())
    }, [dispatch]);

    return (
        <>
            {admin && (
                <>
                    <AdminUserList data={admin.data}/>
                </>
            )}
        </>
    );
}

export default AdminUsers;