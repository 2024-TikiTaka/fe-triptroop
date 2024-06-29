import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { callScheduleApplyAPI, callScheduleDetailAPI } from "../../apis/ScheduleAPICalls";
import ScheduleItem from "../../components/item/ScheduleItem";
import Kakaomap from "../../components/map/Kakaomap";

function ScheduleDetail() {
    const dispatch = useDispatch();
    const { scheduleId } = useParams();
    const [ loading, setLoading ] = useState(true); // 로딩 상태 추가
    const { schedule } = useSelector(state => state.scheduleReducer);
    const navigate = useNavigate();

    const handleClickModify = () => {
        navigate(`/schedules/${scheduleId}/modify`);
    };

    const handleClickDeleted = () => {
        navigate(`/schedules/${scheduleId}/remove`);
    };

    const handleClickAccept = () => {
        const confirmed = window.confirm("일정 참여 신청을 하시겠습니까?");
        if (confirmed) {
            dispatch(callScheduleApplyAPI(scheduleId));
        }
    };
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
    }, [ dispatch, scheduleId ]);

    console.log("일정 Details:", schedule);

    return (
        <>
            {loading && <div>Loading...</div>} {/* 로딩 중인 경우 로딩 표시 */}
            {!loading && schedule && schedule.scheduleItemInfoResponse && ( // 로딩이 완료되고 schedule이 존재하는 경우에만 컴포넌트 렌더링
                <div className="detail-div">
                    {schedule.scheduleItemInfoResponse.map(item => (
                            <Kakaomap key={item.id} place={item} />
                        )
                    )}
                    <div>
                        <ScheduleItem schedule={schedule} />
                        <Button variant="primary" onClick={handleClickAccept}>신청</Button>
                        <Button variant="success" onClick={handleClickModify}>수정</Button>
                        <Button variant="danger" onClick={handleClickDeleted}>삭제</Button>

                    </div>


                </div>
            )}
        </>
    );
}

export default ScheduleDetail;
