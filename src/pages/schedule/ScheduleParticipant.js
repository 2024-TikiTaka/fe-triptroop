import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callScheduleParticipantsAPI} from '../../apis/ScheduleAPICalls';
import SchedulesParticipantsList from '../../components/list/ScheduleParticipantsList';
import {useParams} from 'react-router-dom';

const ScheduleParticipant = () => {
    const {scheduleId} = useParams();
    const dispatch = useDispatch();
    const {participants} = useSelector(state => state.scheduleParticipantReducer);

    useEffect(() => {
        // API 호출을 통해 데이터를 가져옴
        dispatch(callScheduleParticipantsAPI({scheduleId}));
    }, []);

    // participants가 null이거나 undefined이면 "Loading..." 표시
    if (!participants) {
        return <p>Loading...</p>;
    }

    // participants.data가 존재하고 데이터가 비어있지 않을 때 SchedulesParticipantsList를 렌더링, 그렇지 않으면 "No participants found." 메시지 출력
    return (
        <>
            {
                participants &&
                <>
                    <SchedulesParticipantsList data={participants}/>
                </>
            }
        </>

    );
};

export default ScheduleParticipant;
