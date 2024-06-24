import React from "react";
import DynamicForm from "../../../components/custom/admin/form/DynamicForm";
import {rowSizes} from "../../../components/custom/admin/dl/generateRowSizes";
import {fields} from "../../../components/custom/admin/form/InputData";

function AdminUserRegister() {


    return (
        <div>
            <DynamicForm fields={fields} context={'admin_user'} rowSizes={rowSizes}/>
        </div>
    );
}

export default AdminUserRegister;