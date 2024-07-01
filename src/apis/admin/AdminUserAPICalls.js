import {authRequest} from "../api";
import {getInfo, getList, remove, success} from "../../modules/admin/AdminUserModules";

// 관리자 > 회원 관리 > 회원 목록 조회
export const callAdminUserListAPI = ({currentPage = 1}) => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/users?page=${currentPage}`)
        console.log('callAdminUserListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getList(result));
        }

    }
};

// 관리자 > 회원 관리 > 회원 목록 조회 검색 필터링
export const callAdminUserSearchListAPI = ({type, keyword, currentPage = 1}) => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/users?page=${currentPage}&type=${type}&keyword=${keyword}`)
        console.log('callAdminUserListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getList(result));
        }
    }
};


// 관리자 > 회원 관리 > 회원 상세 조회
export const callAdminUserDetailAPI = ({userId}) => {

    return async (dispatch) => {
        try {
            const result = await authRequest.get(`/api/v1/admin/users/${userId}`)
            console.log('callAdminUserDetailAPI result : ', result);

            if (result.status === 200) {
                dispatch(getInfo(result));
            }
        } catch (error) {
            console.error('callAdminUserDetailAPI error: ', error);
            throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
        }

    }
};


//관리자 > 회원 관리 > 회원 등록
export const callAdminUserRegisterAPI = (formData) => {
    return async (dispatch) => {
        try {
            const result = await authRequest.post(`/api/v1/admin/users`, formData);
            console.log('회원 등록 API 트라이 안의 result : ', result);

            if (result.status === 200) {
                dispatch(success(result));
            } else {
                alert('회원 등록에 실패 했습니다.')
            }
            return result;
        } catch (error) {
            console.error('회원 등록 API 캐치 안의 error: ', error);
            throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
        }
    }
}

//관리자 > 회원 관리 > 회원 삭제
export const callAdminUserDeleteAPI = ({userId}) => {

    return async (dispatch) => {
        try {
            console.log(`api 호출 메소드 안에서 Deleting user with ID: ${userId}`);
            const result = await authRequest.delete(`/api/v1/admin/users/${userId}`);
            console.log('callAdminUserDeleteAPI 안의 result : ', result);

            if (result.status === 200) {
                dispatch(remove(result));
            } else {
                alert('회원 삭제에 실패 했습니다.')
            }
            return result;
        } catch (error) {
            console.error('callAdminUserDeleteAPI 안의 error: ', error);
            throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
        }
    }
}

