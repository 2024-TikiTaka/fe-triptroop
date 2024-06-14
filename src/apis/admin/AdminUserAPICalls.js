import {authRequest} from "../api";
import {getInfo, getList} from "../../modules/admin/AdminUserModules";

// 관리자 > 회원 관리 > 회원 목록 조회
export const callAdminUserListAPI = () => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/users`)
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
            // console.log('callAdminUserDetailAPI ㅠㅠ 유저아이디!!!! : ', result.userId);

            if (result.status === 200) {
                dispatch(getInfo(result));
            }
        } catch (error) {
            console.error('callAdminUserDetailAPI error: ', error);
        }

    }
};


//관리자 > 회원 관리 > 회원 등록
export const callAdminUserRegisterAPI = () => {
}

