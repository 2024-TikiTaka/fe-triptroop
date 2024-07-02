import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callAdminUserListAPI, callAdminUserSearchListAPI} from "../../../apis/admin/AdminUserAPICalls";
import AdminUserList from "../../../components/list/admin/AdminUserList";
import {Button, Form} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import PagingBar from "../../../components/pagination/PagingBar";
import {ArrowCounterclockwise, Search} from "react-bootstrap-icons";

function AdminUsers() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchType, setSearchType] = useState("email"); // 기본 타입을 "email"로 설정
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();
    const {getList} = useSelector(state => state.adminReducer);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sort = searchParams.get('sort');
    const type = searchParams.get('type');
    const keyword = searchParams.get('keyword');
    const page = searchParams.get('page');

    const searchMapping = {
        "회원": "user",
        "관리자": "admin",
        "관리": "admin",
        "활동": "active",
        "정지": "suspended",
        "탈퇴": "withdrawn"
    };

    useEffect(() => {
        if (page) setCurrentPage(Number(page));
        if (type) setSearchType(type);
        if (keyword) setSearchKeyword(keyword);
    }, [page, type, keyword]);

    const handleKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchClick = () => {
        let translatedKeyword = searchKeyword;
        let searchField = searchType;

        if (!searchType) {
            searchField = "email"; // 기본 타입을 "email"로 설정
        }

        if (searchField === "gender") {
            if (translatedKeyword === "여자" || translatedKeyword === "여") {
                translatedKeyword = "F";
            } else if (translatedKeyword === "남자" || translatedKeyword === "남") {
                translatedKeyword = "M";
            }
        } else {
            translatedKeyword = searchMapping[searchKeyword] || searchKeyword;
        }

        navigate(`/admin/users?page=1&type=${searchField}&keyword=${translatedKeyword}&sort=${sort}`);
    };

    useEffect(() => {
        if (!type && !keyword) {
            dispatch(callAdminUserListAPI({currentPage}));
        } else {
            let translatedKeyword = keyword;
            let searchField = type;

            if (!type) {
                searchField = "email"; // 기본 타입을 "email"로 설정
            }

            if (searchField === "gender") {
                if (translatedKeyword === "여자" || translatedKeyword === "여") {
                    translatedKeyword = "F";
                } else if (translatedKeyword === "남자" || translatedKeyword === "남") {
                    translatedKeyword = "M";
                }
            } else {
                translatedKeyword = searchMapping[keyword] || keyword;
            }

            dispatch(
                callAdminUserSearchListAPI({
                    type: searchField,
                    keyword: translatedKeyword,
                    sort,
                    currentPage,
                })
            );
        }
    }, [currentPage, type, keyword, sort, dispatch]);

    const onClickHandleClick = () => {
        navigate("/admin/users/regist");
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/admin/users?page=${pageNumber}&type=${searchType}&keyword=${searchKeyword}&sort=${sort}`);
    };

    const handleClearFilters = () => {
        setSearchType(""); // 초기화 시 기본 타입을 "email"로 설정
        setSearchKeyword("");
        setCurrentPage(1);
        navigate("/admin/users?page=1");
    };

    const translateKeywordToKorean = (keyword) => {
        const reverseMapping = {
            user: "회원",
            admin: "관리자",
            active: "활동",
            suspended: "정지",
            withdrawn: "탈퇴",
            delete: "삭제",
            F: "여자",
            M: "남자",
        };
        return reverseMapping[keyword] || keyword;
    };

    useEffect(() => {
        if (type && keyword) {
            const translatedKeyword = translateKeywordToKorean(keyword);

            setSearchKeyword(translatedKeyword);
        }
    }, [type, keyword]);

    return (
        <>
            <div className="d-flex justify-content-between mb-4 align-items-center">
                <Form className="search-form d-flex align-items-center">
                    <Form.Select onChange={handleTypeChange} value={searchType}>
                        <option value="email">아이디</option>
                        <option value="nickname">닉네임</option>
                        <option value="gender">성별</option>
                        <option value="role">권한</option>
                        <option value="status">상태</option>
                    </Form.Select>
                    <div className="search-input">
                        <input
                            onChange={handleKeywordChange}
                            value={searchKeyword}
                            type="text"
                            placeholder="검색어를 입력해주세요."
                        />
                        <Button className="blue-300" onClick={handleSearchClick}>
                            <Search size="22px" fill="#FFF"/>
                        </Button>
                        <Button className="blue-700 filter-reset" onClick={handleClearFilters}>
                            <ArrowCounterclockwise size="22px" fill="#FFF"/>
                        </Button>
                    </div>
                </Form>
                <Button onClick={onClickHandleClick} className="blue-700 ">
                    회원 등록
                </Button>
            </div>
            {getList ? (
                <div className="ad-user-list">
                    <div className="user-list-table">
                        <AdminUserList data={getList.data}/>
                    </div>
                    <PagingBar
                        className="justify-content-center"
                        pageInfo={getList.pageInfo}
                        setCurrentPage={handlePageChange}
                    />
                </div>
            ) : (
                <div className="no-data">회원 내역이 존재 하지 않습니다.</div>
            )}
        </>
    );
}

export default AdminUsers;
