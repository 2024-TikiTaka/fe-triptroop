import {useDispatch} from "react-redux";
import React from "react";
import {useNavigate} from "react-router-dom";
import DynamicForm from "../../../components/custom/admin/form/DynamicForm";
import {rowSizes} from "../../../components/custom/admin/dl/generateRowSizes";
import {fields} from "../../../components/custom/admin/form/InputData";

function AdminUserRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // fields 수정은 InputData.js 에서 처리
    // context = {}
    // rowSizes 수정은 generateRowSizes.js 에서 처리
    return (
        <div>
            <h2>회원 등록</h2>
            <DynamicForm fields={fields} context={'admin_user'} rowSizes={rowSizes}/>
        </div>
    );
}

export default AdminUserRegister;