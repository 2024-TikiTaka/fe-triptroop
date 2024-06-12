import axios from 'axios';
import { getAccessTokenHeader, getRefreshTokenHeader, isLogin, saveToken, } from '../utils/TokenUtils';

const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const DEFAULT_URL = `http://${SERVER_IP}:${SERVER_PORT}`;

/* 미인증 요청 */
export const request = async (method, url, headers, data) => {
    return await axios({
        method,
        url: `${DEFAULT_URL}${url}`,
        headers,
        data,
    }).catch(error => {
        return error.response;
    });
};

/* 인증 요청 */
export const authRequest = isLogin() && axios.create({
    baseURL: DEFAULT_URL,
});

authRequest.interceptors.request.use(config => {
    config.headers['Access-Token'] = getAccessTokenHeader();
    return config;
});

authRequest.interceptors.response.use(
    /* SUCCESS */
    response => {
        return response;
    },
    /* ERROR */
    async error => {
        const { config, response } = error;

        if (response?.status === 401) {
            const originRequest = config;
            const response = await postRefreshToken();

            if (response?.status === 200) {
                // 토큰 재발급에 성공했을 때
                saveToken(response.headers);
                // 실패했던 요청을 다시 요청
                originRequest.headers['Access-Token'] = getAccessTokenHeader();
                return axios(originRequest);
            }
            // } else if (response?.status >= 500) {
            //     console.error("토큰 재발급 중 서버에 오류가 발생하였습니다.");
            //     return;
        }

        return Promise.reject(error);
    }
);

/* refresh token 전달하여 토큰 재발급 요청하는 api */
export async function postRefreshToken() {
    return await request('POST', '/api/v1/token/issue', {
        'Refresh-Token': getRefreshTokenHeader(),
    });
}
