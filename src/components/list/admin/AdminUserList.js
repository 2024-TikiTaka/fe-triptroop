import CustomTable from "../../custom/admin/table/CustomTable";
import {useNavigate} from "react-router-dom";
// import PagingBar from "../../pagination/PagingBar";
// import {useDispatch, useSelector} from "react-redux";
// import {useState} from "react";


const AdminUserList = ({data}) => {

    // const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(1);
    // const {adminUsers} = useSelector(state => state.adminUserReducer);

    const headers = ['No', '권한', '아이디', '닉네임', '성별', '고도', '상태', '가입일'];
    const rows = data && Array.isArray(data) ? data.map((item, index) => ({
        No: index + 1,
        권한: item.role,
        아이디: item.email,
        닉네임: item.nickname || '',  // 닉네임이 없는 경우 빈 문자열로 설정
        성별: item.gender,
        고도: item.godo,
        상태: item.status,
        가입일: item.createdAt,
        userId: item.userId // 사용자의 아이디
    })) : [];

    // console.log("rows.map(row => row.userId) 값 Map 사용시: ", rows.map(row => row.권한))
    // rows.forEach(row => { console.log(`No: ${row.No}, 권한: ${row.권한}, 아이디: ${row.아이디}`); });
    //
    // useEffect(() => {
    //     dispatch(callAdminUserListAPI({currentPage}))
    // }, [currentPage, dispatch]);

    const navigate = useNavigate();

    const handleRowClick = (row) => {
        // navigate(`/admin/users/${row.No}`);
        navigate(`/admin/users/${row.userId}`);
    };


    return (
        // <div className="admin-user-div">
        //     {adminUsers && adminUsers.data && (
        //         <>
        //             <CustomTable key={rows.No} headers={headers} rows={rows}
        //                          onRowClick={handleRowClick}/>
        //             <PagingBar pageInfo={adminUsers.pageInfo} setCurrentPage={setCurrentPage}/>
        //         </>
        //     )}
        // </div>
        <div className="admin-user-div">
            {rows.length > 0 ? (
                <>
                    <CustomTable key={rows.No} headers={headers} rows={rows}
                                 onRowClick={handleRowClick}/>
                </>
            ) : (
                <div>데이터가 없습니다.</div> // 데이터가 없을 때 표시할 내용
            )}
        </div>
    );

}

export default AdminUserList;
;