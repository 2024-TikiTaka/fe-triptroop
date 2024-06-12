import { authRequest, request } from './api';

export async function callKakaoAuthAPI({ code }) {
    return await request('POST', '/api/v1/oauth/kakao/code?code=' + code,
        { "Content-Type": "application/x-www-form-urlencoded", }
    );
}

