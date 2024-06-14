// 관리자 화면별 제목 내용

export const getHeaderText = (location) => {
    switch (location.pathname) {
        case '/admin/users':
            return '회원 관리';
        case '/admin/inquires':
            return '문의 관리';
        case '/admin/categories':
            return '카테고리 관리';
        case '/admin/notices':
            return '공지 관리';
        default:
            return '메인 화면';
    }
}