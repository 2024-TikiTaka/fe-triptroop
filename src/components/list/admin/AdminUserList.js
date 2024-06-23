import CustomTable from "../../custom/admin/table/CustomTable";
import {useNavigate} from "react-router-dom";
// import PagingBar from "../../pagination/PagingBar";
// import {useDispatch, useSelector} from "react-redux";
// import {useState} from "react";


const AdminUserList = ({data}) => {

    const headers = ['No', '권한', '아이디', '닉네임', '성별', '고도', '상태', '가입일'];
    const rows = data && Array.isArray(data) ? data.map((item, index) => ({
        No: item.userId,
        권한: item.role === 'ADMIN' ? '관리자' : '회원',
        아이디: item.email,
        닉네임: item.nickname || ` - `,  // 닉네임이 없는 경우 빈 문자열로 설정
        성별: item.gender === 'M' ? '남자' : '여자',
        고도: item.godo,
        상태: item.status === 'SUSPENDED' ? '정지' : item.status === 'ACTIVE' ? '활동' : '탈퇴',
        가입일: item.createdAt
    })) : [];

    const navigate = useNavigate();

    const handleRowClick = (row) => {
        navigate(`/admin/users/${row.No}`);
    };


    return (
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