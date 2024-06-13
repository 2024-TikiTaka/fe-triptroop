import axios from 'axios';
import { getAccessTokenHeader, getRefreshTokenHeader, saveToken } from '../utils/TokenUtils';

const SERVER_IP = process.env.REACT_APP_RESTAPI_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_RESTAPI_SERVER_PORT;

const DEFAULT_URL = `http://${SERVER_IP}:${SERVER_PORT}`;

/* 미인증 요청 */
export const request = async (method, url, headers = {}, data) => {
    try {
        const response = await axios({
            method,
            url: `${DEFAULT_URL}${url}`,
            headers,
            data,
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

/* 인증 요청 */
export const authRequest = axios.create({
    baseURL: DEFAULT_URL,
});

authRequest.interceptors.request.use(config => {
    config.headers['Access-Token'] = getAccessTokenHeader();
    return config;
});

authRequest.interceptors.response.use(
    response => response,
    async error => {
        const { config, response } = error;

        if (response?.status === 401) {
            const originalRequest = config;
            const refreshResponse = await postRefreshToken();

            if (refreshResponse?.status === 200) {
                // 토큰 재발급 성공
                saveToken(refreshResponse.headers);
                originalRequest.headers['Access-Token'] = getAccessTokenHeader();
                return axios(originalRequest);
            }
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
