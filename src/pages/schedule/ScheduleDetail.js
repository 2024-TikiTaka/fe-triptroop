import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callScheduleDetailAPI } from "../../apis/ScheduleAPICalls";
import ScheduleItem from "../../components/item/ScheduleItem";
import KakaoMapSelect from "../../components/map/kakaoMapSelect";

function ScheduleDetail() {
    const dispatch = useDispatch();
    const { scheduleId } = useParams();
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const { schedule } = useSelector(state => state.scheduleReducer);

    useEffect(() => {
        console.log('useParams로부터 가져온 scheduleId:', scheduleId); // scheduleId 확인
        const fetchScheduleDetail = async () => {
            if (scheduleId) {
                await dispatch(callScheduleDetailAPI({ scheduleId }));
                setLoading(false); // API 호출이 완료되면 로딩 상태를 false로 설정
            } else {
                console.error('scheduleId 유효하지 않습니다.');
            }
        };

        fetchScheduleDetail();
    }, [dispatch, scheduleId]);

    console.log("일정 Details:", schedule);

    return (
        <>
            {loading && <div>Loading...</div>} {/* 로딩 중인 경우 로딩 표시 */}
            {!loading && schedule && schedule.scheduleItemInfoResponse && ( // 로딩이 완료되고 schedule이 존재하는 경우에만 컴포넌트 렌더링
                <div className="detail-div">
                    {schedule.scheduleItemInfoResponse.map(item => (
                        <KakaoMapSelect key={item.id} place={item} />

                    ))}
                    <ScheduleItem schedule={schedule} />
                </div>
            )}
        </>
    );
}

export default ScheduleDetail;
