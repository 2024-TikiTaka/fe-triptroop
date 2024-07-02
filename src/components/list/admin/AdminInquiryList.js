import CustomTable from "../../custom/admin/table/CustomTable";
import {useNavigate} from "react-router-dom";


const AdminInquiryList = ({data}) => {

    const headers = ['No', '작성자', '문의구분', '내용', '작성일', '처리상태'];
    const rows = data && Array.isArray(data) ? data.map((item, index) => ({
        No: item.inquiryId,
        작성자: item.nickname || ` - `,  // 닉네임이 없는 경우 빈 문자열로 설정
        //신고구분: item.inquiryKind === '' ? '' : '',
        문의구분: item.inquiryKind,
        내용: item.content,
        //처리상태: item.status === '' ? '' : item.status === '' ? '' : '',
        작성일: item.createdAt,
        처리상태: item.status
    })) : [];

    const navigate = useNavigate();

    const handleRowClick = (row) => {
        navigate(`/admin/inquiry/${row.No}`);
    };


    return (
        <div className="admin-inquiry-div">
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

export default AdminInquiryList;