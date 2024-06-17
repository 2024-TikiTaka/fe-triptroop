import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callScheduleRemoveAPI } from "../../apis/ScheduleAPICalls";

function ScheduleRemove() {
    const { scheduleId } = useParams();
    const dispatch = useDispatch();

    const onClickDeleteHandler = () => {
        const id = Number(scheduleId); // scheduleId를 숫자로 변환
        if (!isNaN(id)) {
            const confirmed = window.confirm("정말로 일정을 삭제하시겠습니까?");
            if (confirmed) {
                dispatch(callScheduleRemoveAPI(scheduleId));
            }
        } else {
            console.error("Invalid scheduleId:", scheduleId);
        }
    };

    return (
        <>
            <div>
                <button onClick={onClickDeleteHandler}>일정 삭제</button>
            </div>
        </>
    );
}

export default ScheduleRemove;
