// 테이블명 한글 매핑


const ADMIN_USER = {
    birth: "생년월일", contentCount: "작성 컨텐츠 수", createdAt: "가입일", email: "아이디",
    friendCount: "친구 수", gender: "성별", godo: "고도", inquiriesCount: "문의 개수",
    name: "이름", password: "비밀번호", phone: "전화번호", reportCount: "신고 개수",
    role: "권한", status: "상태", userId: "No",
};

const TranslateKeys = (key, context) => {
    let translations;
    switch (context) {
        case "ADMIN_USER" :
            translations = ADMIN_USER;
            break;
        case "ADMIN_INQUIRY" :
            translations = ADMIN_INQUIRY;
            break;
        default :
            translations = {};
    }
    return translations[key] || key;
};
export default TranslateKeys;