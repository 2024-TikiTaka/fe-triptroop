// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import {callAdminUserListAPI, callAdminUserSearchListAPI} from "../../../apis/admin/AdminUserAPICalls";
// import AdminUserList from "../../../components/list/admin/AdminUserList";
// import {Button, Form} from "react-bootstrap";
// import {useLocation, useNavigate} from "react-router-dom";
// import PagingBar from "../../../components/pagination/PagingBar";
// import {Search} from "react-bootstrap-icons";
//
// function AdminUsers() {
//     const dispatch = useDispatch();
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchType, setSearchType] = useState("");
//     const [searchKeyword, setSearchKeyword] = useState("");
//     const navigate = useNavigate();
//     const {getList} = useSelector((state) => state.adminUserReducer);
//
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const sort = searchParams.get("sort");
//     const type = searchParams.get("type");
//     const keyword = searchParams.get("keyword");
//     const page = searchParams.get("page");
//
//     const searchMapping = {
//         회원: "user",
//         관리자: "admin",
//         관리: "admin",
//         활동: "active",
//         정지: "suspended",
//         탈퇴: "withdrawn",
//         여자: "F",
//         여: "F",
//         남자: "M",
//         남: "M",
//     };
//
//     useEffect(() => {
//         if (page) setCurrentPage(Number(page));
//         if (type) setSearchType(type);
//         if (keyword) setSearchKeyword(keyword);
//     }, [page, type, keyword]);
//
//     const handleKeywordChange = (e) => {
//         setSearchKeyword(e.target.value);
//     };
//
//     const handleTypeChange = (e) => {
//         setSearchType(e.target.value);
//     };
//
//     const handleSearchClick = () => {
//         let translatedKeyword = searchKeyword;
//         let searchField = searchType;
//
//         if (!searchType) {
//             if (translatedKeyword === "여자" || translatedKeyword === "여") {
//                 searchField = "gender";
//                 translatedKeyword = "F";
//             } else if (translatedKeyword === "남자" || translatedKeyword === "남") {
//                 searchField = "gender";
//                 translatedKeyword = "M";
//             }
//         } else {
//             translatedKeyword = searchMapping[searchKeyword] || searchKeyword;
//         }
//
//         navigate(`/admin/users?page=1&type=${searchField}&keyword=${translatedKeyword}&sort=${sort}`);
//     };
//
//     useEffect(() => {
//         if (!type && !keyword) {
//             dispatch(callAdminUserListAPI({currentPage}));
//         } else {
//             let translatedKeyword = keyword;
//             let searchField = type;
//
//             if (!type) {
//                 if (translatedKeyword === "여자" || translatedKeyword === "여") {
//                     searchField = "gender";
//                     translatedKeyword = "F";
//                 } else if (translatedKeyword === "남자" || translatedKeyword === "남") {
//                     searchField = "gender";
//                     translatedKeyword = "M";
//                 }
//             } else {
//                 translatedKeyword = searchMapping[keyword] || keyword;
//             }
//
//             dispatch(
//                 callAdminUserSearchListAPI({
//                     type: searchField,
//                     keyword: translatedKeyword,
//                     sort,
//                     currentPage,
//                 })
//             );
//         }
//     }, [currentPage, type, keyword, sort, dispatch]);
//
//     const onClickHandleClick = () => {
//         navigate("/admin/users/regist");
//     };
//
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         navigate(
//             `/admin/users?page=${pageNumber}&type=${searchType}&keyword=${searchKeyword}&sort=${sort}`
//         );
//     };
//
//     const handleClearFilters = () => {
//         setSearchType("");
//         setSearchKeyword("");
//         setCurrentPage(1);
//         navigate("/admin/users?page=1");
//     };
//
//     const translateKeywordToKorean = (keyword) => {
//         const reverseMapping = {
//             user: "회원",
//             admin: "관리자",
//             active: "활동",
//             suspended: "정지",
//             withdrawn: "탈퇴",
//             F: "여자",
//             M: "남자",
//         };
//         return reverseMapping[keyword] || keyword;
//     };
//
//     useEffect(() => {
//         if (type && keyword) {
//             const translatedKeyword = translateKeywordToKorean(keyword);
//             setSearchKeyword(translatedKeyword);
//         }
//     }, [type, keyword]);
//
//     return (
//         <>
//             <div className="d-flex justify-content-between mb-4 align-items-center">
//                 <Form className="search-form d-flex align-items-center">
//                     <Form.Select onChange={handleTypeChange} value={searchType}>
//                         <option value="">전체</option>
//                         <option value="email">아이디</option>
//                         <option value="nickname">닉네임</option>
//                         <option value="gender">성별</option>
//                         <option value="role">권한</option>
//                         <option value="status">상태</option>
//                     </Form.Select>
//                     <div className="search-input">
//                         <input
//                             onChange={handleKeywordChange}
//                             value={searchKeyword}
//                             type="text"
//                             placeholder="검색어를 입력해주세요."
//                         />
//                         <Button className="blue-300" onClick={handleSearchClick}>
//                             <Search size="22px" fill="#FFF"/>
//                         </Button>
//                         <Button className="blue-300 filter-reset" onClick={handleClearFilters}>
//                             필터 초기화
//                         </Button>
//                     </div>
//                 </Form>
//                 <Button onClick={onClickHandleClick} className="blue-300">
//                     회원 등록
//                 </Button>
//             </div>
//             {getList ? (
//                 <div className="ad-user-list">
//                     <div className="user-list-table">
//                         <AdminUserList data={getList.data}/>
//                     </div>
//                     <PagingBar
//                         className="justify-content-center"
//                         pageInfo={getList.pageInfo}
//                         setCurrentPage={handlePageChange}
//                     />
//                 </div>
//             ) : (
//                 <div className="no-data">회원 내역이 존재 하지 않습니다.</div>
//             )}
//         </>
//     );
// }
//
// export default AdminUsers;
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminUserListAPI, callAdminUserSearchListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";
import {Button, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import PagingBar from "../../../components/pagination/PagingBar";
import {Search} from "react-bootstrap-icons";

//TODO: 응답 데이터 값이 없을때, 어떻게 화면에 보여줄 것인지 정리 후 처리 예정.
//TODO: 조회 페이지 공통 : 1) 페이징 처리 , 2) 검색 및 옵션 처리
//TODO: 조회, 상세 조회 페이지 공통 : 1) 이넘타입 등 단어 변경 적용 처리
function AdminUsers() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchType, setSearchType] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();
    const {getList} = useSelector(state => state.adminUserReducer);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sort = searchParams.get('sort');
    const type = searchParams.get('type');
    const keyword = searchParams.get('keyword');

    const searchMapping = {
        "회원": "user",
        "관리자": "admin",
        "관리": "admin",
        "활동": "active",
        "정지": "suspended",
        "탈퇴": "withdrawn",
        "여자": "F",
        "여": "F",
        "남자": "M",
        "남": "M"
    };

    const handleKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchClick = () => {
        let translateKeyword = searchKeyword;
        translateKeyword = searchMapping[searchKeyword];

        if (searchType || translateKeyword || searchType && translateKeyword) {
            dispatch(callAdminUserSearchListAPI({type: searchType, keyword: translateKeyword, currentPage}));
            console.log("클릭시 - 페이지 : ", currentPage, ", 타입 : ", searchType, ", 키워드 : ", translateKeyword)
            //console.log("클릭시 - 디스패치 : ", dispatch, ", 콜 API : ", callAdminUserSearchListAPI)
        }
    };

    useEffect(() => {
        let translatedKeyword = keyword;
        translatedKeyword = searchMapping[keyword];

        if (type || translatedKeyword || type && translatedKeyword) {
            dispatch(callAdminUserSearchListAPI({type, keyword: translatedKeyword, sort, currentPage}));
        } else {
            dispatch(callAdminUserListAPI({currentPage}))
        }
    }, [currentPage, type, keyword, sort, dispatch]);

    const onClickHandeleClick = () => {
        navigate('/admin/users/regist');
    }
    //console.log('이거 데이터 있어?? 겟인포 : ', getList)
    console.log("그냥 찍어보는 - 페이지 : ", currentPage, ", 타입 : ", type, ", 키워드 : ", keyword)
    return (
        <>
            <div className="d-flex justify-content-between mb-4 align-items-center">
                <Form className="search-form d-flex align-items-center">
                    <Form.Select onChange={handleTypeChange}>
                        <option value="email">아이디</option>
                        <option value="nickname">닉네임</option>
                        <option value="gender">성별</option>
                        <option value="role">권한</option>
                        <option value="status">상태</option>
                    </Form.Select>
                    <div className="search-input">
                        <input onChange={handleKeywordChange} type="text" placeholder="검색어를 입력해주세요."/>
                        <Button className="blue-300" onClick={handleSearchClick}><Search size="22px"
                                                                                         fill="#FFF"/></Button>
                    </div>
                </Form>
                <Button onClick={onClickHandeleClick} className="blue-300">회원 등록</Button>
            </div>
            {getList ? (
                <div className="ad-user-list">
                    <div className="user-list-table">
                        <AdminUserList data={getList.data}/>
                    </div>
                    <PagingBar className="justify-content-center" pageInfo={getList.pageInfo}
                               setCurrentPage={setCurrentPage}/>
                </div>
            ) : (
                <div className="no-data">
                    회원 내역이 존재 하지 않습니다.
                </div>
            )}
        </>
    );

}

export default AdminUsers;