import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ScheduleForm from "../../components/form/ScheduleForm";
import ScheduleItemForm from "../../components/form/ScheduleItemForm";
import ScheduleUpdateForm from "../../components/form/ScheduleUpdateForm";
import ScheduleItemUpdateForm from "../../components/form/ScheduleItemUpdateForm";

function ScheduleItemUpdate () {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { success } = useSelector(state => state.scheduleReducer);

    useEffect(() => {
        if(success === true) navigate('/schedules');
    }, [success]);


    return (
        <>
            <div className="schedule-button-div">
                <button onClick={ () => navigate(-1) }>돌아가기</button>
            </div>
            <ScheduleItemUpdateForm/>
        </>
    );
}

export default ScheduleItemUpdate;