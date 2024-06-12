import {authRequest} from "./api";
import {getList} from "../modules/AdminModules";

export const callAdminUserListAPI = () => {

    return async (dispatch) => {
        const result = await authRequest.get(`/api/v1/admin/users`)
        console.log('callAdminUserListAPI result : ', result);

        if (result.status === 200) {
            dispatch(getList(result));
        }

    }
};