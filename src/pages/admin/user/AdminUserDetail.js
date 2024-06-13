import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callAdminUserDetailAPI} from "../../../apis/admin/AdminUserAPICalls";
import {useParams} from "react-router-dom";
import DescriptionList from "../../../components/item/admin/DescriptionList";


const displayOrder = ['userId', 'email', 'nickname', 'role', 'gender', 'name', 'birth', 'phone', 'createdAt', 'provider', 'reportCount', 'godo', 'reviewPoint', 'introduction', 'interestNames', 'mbti', 'contentCount', 'friendCount', 'inquiriesCount', 'status'];

function AdminUserDetail() {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const {getInfo} = useSelector(state => state.adminUserReducer);

    useEffect(() => {
        dispatch(callAdminUserDetailAPI({userId}));
    }, [dispatch, userId]);

    export const TranslateKeys = (data, context) => {
        return Object.keys(data).map(key => ({
            term: TranslateKeys(key, context),
            description: data[key]
        }));
    };

    // const items = getInfo && displayOrder.map((key) => ({
    //     term: defaultKeyTranslations[key] || key,
    //     description: getInfo[key]
    // }));

    console.log("items 값 : ", items);

    console.log("admin 값 : ", getInfo);
    console.log("userId 값 : ", userId);
    console.log("dispatch 값 : ", dispatch);

    // 각 행에 들어갈 항목 수를 설정합니다.
    const rowSizes = [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2]; // 행마다 들어갈 dt, dd 쌍의 수
    const dtWidth = 100; // dt의 너비


    return (
        <>
            {getInfo && <DescriptionList items={items} rowSizes={rowSizes} dtWidth={dtWidth}/>}
        </>
    );
}

export default AdminUserDetail;