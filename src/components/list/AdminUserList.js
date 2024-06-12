import AdminUserItem from "../item/admin/AdminUserItem";

const AdminUserList = ({data}) => {

    return (
        <div className="admin-user-div">
            { data && data.map(adminuser => <AdminUserItem key={adminuser.sId} adminuser={adminuser}/>)}
        </div>
    );
}

export default AdminUserList;