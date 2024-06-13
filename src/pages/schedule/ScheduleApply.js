import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {callScheduleApplyAPI} from "../../apis/ScheduleAPICalls";

function ScheduleApply() {

        const { scheduleId } = useParams();
        const dispatch = useDispatch();

        const onClickApplyHandler = () => {
            const id = Number(scheduleId); // scheduleId를 숫자로 변환
            if (!isNaN(id)) {
                const confirmed = window.confirm("일정 참여 신청을 하시겠습니까?");
                if (confirmed) {
                    dispatch(callScheduleApplyAPI(scheduleId));
                }
            } else {
                console.error("Invalid scheduleId:", scheduleId);
            }
        };

        return (
            <>
                <div>
                    <button onClick={onClickApplyHandler}>일정 참여 신청</button>
                </div>
            </>
        );


}
export default ScheduleApply;