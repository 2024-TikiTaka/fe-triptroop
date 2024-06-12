import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callScheduleDetailAPI } from "../../apis/ScheduleAPICalls";
import ScheduleItem from "../../components/item/ScheduleItem";

function ScheduleDetail() {
    const dispatch = useDispatch();
    const { scheduleId } = useParams();
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const { schedule } = useSelector(state => state.scheduleReducer);

    useEffect(() => {
        // API 호출 전에 로딩 상태를 true로 설정
        setLoading(true);
        dispatch(callScheduleDetailAPI({ scheduleId }))
            .then(() => {
                // API 호출이 완료되면 로딩 상태를 false로 설정
                setLoading(false);
            });
    }, [scheduleId]); // scheduleId를 의존성 배열에 추가

    return (
        <>
            {loading && <div>Loading...</div>} {/* 로딩 중인 경우 로딩 표시 */}
            {!loading && schedule && ( // 로딩이 완료되고 schedule이 존재하는 경우에만 컴포넌트 렌더링
                <div className="detail-div">
                    <ScheduleItem schedule={schedule} />
                </div>
            )}
        </>
    );
}

export default ScheduleDetail;
