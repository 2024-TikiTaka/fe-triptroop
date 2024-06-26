import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callAdminUserDetailAPI} from "../../../apis/admin/AdminUserAPICalls";
import {useParams} from "react-router-dom";
import DescriptionList from "../../../components/custom/admin/dl/DescriptionList";
import {TranslateKeys} from "../../../components/custom/admin/dl/TranslateKeys";


const displayOrder = ['email', 'nickname', 'role', 'gender', 'name', 'birth', 'phone', 'createdAt', 'provider', 'reportCount', 'godo', 'reviewPoint', 'introduction', 'interestNames', 'mbti', 'contentCount', 'friendCount', 'inquiriesCount', 'status'];

function AdminUserDetail() {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const {getInfo} = useSelector(state => state.adminUserReducer);

    useEffect(() => {
        dispatch(callAdminUserDetailAPI({userId}));
    }, [dispatch, userId]);

    const mappedAdmin = TranslateKeys(getInfo, 'admin_user');


    //console.log("items 값 : ", items);
    // console.log("getInfo 값 : ", getInfo);
    // console.log("userId 값 : ", userId);
    // console.log("dispatch 값 : ", dispatch);
    // console.log("mappedAdmin 값 : ", mappedAdmin);

    // const items = getInfo && displayOrder.map((key) => ({}))
    const items = getInfo && displayOrder.map((key) => ({
        term: mappedAdmin[key] || key,
        description: getInfo[key]
    }))


    // 각 행에 들어갈 항목 수를 설정합니다.
    const rowSizes = [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2]; // 행마다 들어갈 dt, dd 쌍의 수
    const dtWidth = 175; // dt의 너비


    return (
        <>
            {getInfo && <DescriptionList items={items} rowSizes={rowSizes} dtWidth={dtWidth}/>}
        </>
    );
}

export default AdminUserDetail;