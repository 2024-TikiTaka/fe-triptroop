// 관리자 화면별 제목 내용

const getHeaderText = (location_path) => {

    const hasId = /\d+$/.test(location_path); // 경로 끝에 숫자가 있는지 확인
    if (location_path.includes('/regist')) {
        switch (location_path) {
            case '/admin/users/regist':
                return '회원 등록';
            case '/admin/inquires/regist':
                return '문의 답변 등록';
            case '/admin/categories/regist':
                return '카테고리 등록';
            case '/admin/notices/regist':
                return '공지 등록';
            default:
                break;
        }
    }

    switch (true) {
        case location_path.startsWith('/admin/users'):
            return hasId ? '회원 상세 정보' : '회원 목록 조회';
        case location_path.startsWith('/admin/inquires'):
            return hasId ? '문의 상세 정보' : '문의 목록 조회';
        case location_path.startsWith('/admin/categories'):
            return hasId ? '카테고리 상세 정보' : '카테고리 목록 조회';
        case location_path.startsWith('/admin/notices'):
            return hasId ? '공지 상세 정보' : '공지 목록 조회';
        default:
            return '메인 화면';
    }
};

export default getHeaderText;
