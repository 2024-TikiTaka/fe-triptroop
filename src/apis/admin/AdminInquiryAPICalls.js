import {authRequest} from "../api";
import {getList} from "../../modules/admin/AdminModules";

// 관리자 > 회원 관리 > 회원 목록 조회
export const callAdminInquiryListAPI = ({currentPage = 1}) => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/inquiry?page=${currentPage}`)
        console.log('callAdminInquiryListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getList(result));
        }

    }
};

// 관리자 > 회원 관리 > 회원 목록 조회 검색 필터링
export const callAdminInquirySearchListAPI = ({type, keyword, currentPage = 1}) => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/inquiry?page=${currentPage}&type=${type}&keyword=${keyword}`)
        console.log('callAdminInquiryListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getList(result));
        }
    }
};
