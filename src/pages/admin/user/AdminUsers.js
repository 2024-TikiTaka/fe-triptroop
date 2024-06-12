import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callAdminUserListAPI} from "../../../apis/AdminAPICalls";
import AdminUserList from "../../../components/list/AdminUserList";
import {getList} from "../../../modules/AdminModules";


function AdminUsers() {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.getList);
    console.log("admin : ", getList.data);

    useEffect(() => {
        dispatch(callAdminUserListAPI())
    }, [dispatch]);

    return (
        <>
            <AdminUserList data={getList.data}/>
        </>
    );
}

export default AdminUsers;