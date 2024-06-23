import {authRequest} from "../api";
import {getInfo, getList, success} from "../../modules/admin/AdminUserModules";

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
// export const callAdminUserRegisterAPI = (adminUserSaveRequest) => {
//
//     return async (dispatch) => {
//         try {
//             const result = await authRequest.post(`/api/v1/admin/users`, adminUserSaveRequest);
//             console.log('callAdminUserRegisterAPI 일단 트라이 안의 result : ', result);
//             console.log('callAdminUserDetailAPI ㅠㅠ 유저아이디!!!! : ', result.data.result);
//             console.log('callAdminUserDetailAPI ㅠㅠ 메세지!!!! : ', result.data.message);
//
//             if (result.status === 200) {
//                 dispatch(success());
//             }
//             return result;
//         } catch (error) {
//             console.error('callAdminUserRegisterAPI 캐치 안의 error: ', error);
//             throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
//         }
//
//     }
// }


export const callAdminUserRegisterAPI = (adminUserSaveRequest) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            for (const key in adminUserSaveRequest) {
                formData.append(key, adminUserSaveRequest[key]);
            }

            const result = await authRequest.post(`/api/v1/admin/users`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('callAdminUserRegisterAPI 일단 트라이 안의 result : ', result);

            if (result.status === 200) {
                dispatch(success());
            }
            return result;
        } catch (error) {
            console.error('callAdminUserRegisterAPI 캐치 안의 error: ', error);
            throw error; // 예외를 다시 던져서 상위에서 처리할 수 있도록 함
        }
    }
}


