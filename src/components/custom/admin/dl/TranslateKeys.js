import {ADMIN_INQUIRY, ADMIN_USER} from "./Translates";
// 테이블명 한글 매핑

const TranslateKey = (key, context) => {
    let translations;
    console.log('key : ' + key);
    console.log('context : ' + context);
    switch (context) {
        case "admin_user" :
            translations = ADMIN_USER;
            break;
        case "admin_inquiry" :
            translations = ADMIN_INQUIRY;
            break;
        default :
            translations = {};
    }
    return translations[key] || key;
};
export const TranslateKeys = (data, context) => {
    if (!data || typeof data !== 'object') {
        return {};
    }
    return Object.keys(data).reduce((acc, key) => {
        acc[key] = TranslateKey(key, context);
        return acc;
    }, {});
};