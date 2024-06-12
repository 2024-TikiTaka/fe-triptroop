import CustomTable from "../item/CustomTable";

const AdminUserList = ({data}) => {
    const headers = ['No', '권한', '아이디', '닉네임', '성별', '고도', '상태', '가입일'];
    // const rows = data && Array.isArray(data) ? data.map((item, index) => ({
    //     No: index + 1,
    //     권한: item.role,
    //     아이디: item.email,
    //     닉네임: item.nickname,
    //     성별: item.gender,
    //     고도: item.godo,
    //     상태: item.status,
    //     가입일: item.createdAt
    // })) : [];
    const rows = data && data.map((data) => ({}));

    const handleRowClick = (row) => {
        alert(`You clicked on ${row.name}'s row.`);
    };


    return (
        <div className="admin-user-div">
            <h2>관리자 목록</h2>
            {data && data.map(getList => <CustomTable key={getList.result.id} headers={headers} rows={getList}
                                                      onRowClick={handleRowClick}/>)}
        </div>
    );

}

export default AdminUserList;
;