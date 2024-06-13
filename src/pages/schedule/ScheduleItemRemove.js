import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {callScheduleItemRemoveAPI, callScheduleRemoveAPI} from "../../apis/ScheduleAPICalls";

function ScheduleItemRemove() {
    const { scheduleItemId } = useParams();
    const dispatch = useDispatch();

    const onClickDeleteHandler = () => {
        const id = Number(scheduleItemId); // scheduleId를 숫자로 변환
        if (!isNaN(id)) {
            const confirmed = window.confirm("정말로 계획을 삭제하시겠습니까?");
            if (confirmed) {
                dispatch(callScheduleItemRemoveAPI(scheduleItemId));
            }
        } else {
            console.error("Invalid scheduleItemId:", scheduleItemId);
        }
    };

    return (
        <>
            <div>
                <button onClick={onClickDeleteHandler}>계획 삭제</button>
            </div>
        </>
    );
}

export default ScheduleItemRemove;
