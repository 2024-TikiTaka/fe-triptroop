import CustomTable from "../../custom/table/CustomTable";
import {useNavigate} from "react-router-dom";

const AdminUserList = ({data}) => {

    const headers = ['No', '권한', '아이디', '닉네임', '성별', '고도', '상태', '가입일'];
    const rows = data && Array.isArray(data) ? data.map((item, index) => ({
        No: index + 1,
        권한: item.role,
        아이디: item.email,
        닉네임: item.nickname || '',  // 닉네임이 없는 경우 빈 문자열로 설정
        성별: item.gender,
        고도: item.godo,
        상태: item.status,
        가입일: item.createdAt
    })) : [];

    // console.log("rows.map(row => row.userId) 값 Map 사용시: ", rows.map(row => row.권한))
    // rows.forEach(row => { console.log(`No: ${row.No}, 권한: ${row.권한}, 아이디: ${row.아이디}`); });

    const navigate = useNavigate();

    const handleRowClick = (row) => {
        navigate(`/admin/users/${row.No}`);
    };


    return (
        <div className="admin-user-div">
            {data && <CustomTable key={rows.No} headers={headers} rows={rows}
                                  onRowClick={handleRowClick}/>}
        </div>
    );

}

export default AdminUserList;
;