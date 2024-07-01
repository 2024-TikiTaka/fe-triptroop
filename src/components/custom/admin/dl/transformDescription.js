// transformDescription.js

// 변환 매핑 객체: 키값에 따른 변환 값을 정의
const transformMap = {
    권한: {
        ADMIN: '관리자',
        USER: '회원'
    },
    성별: {
        M: '남자',
        F: '여자'
    },
    상태: {
        ACTIVE: '활동',
        SUSPENDED: '정지',
        WITHDRAWN: '탈퇴',
        DELETE: '삭제'
    },
    생년월일: {
        '1900-01-01': ' - '
    }
    // 다른 키값에 대한 변환 값을 추가할 수 있음
};

// 변환 함수: 매핑된 값을 반환하거나 기본 값을 반환
const transformDescription = (dt, dd) => {
    if (transformMap[dt] && transformMap[dt][dd]) {
        return transformMap[dt][dd];
    }
    return dd || ' - ';
};

// 함수 내보내기
export default transformDescription;
