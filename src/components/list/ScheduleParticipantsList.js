// SchedulesParticipantsList.js
import React from 'react';
import ScheduleParticipantsListItem from '../item/ScheduleParticipantsListItem';

function SchedulesParticipantsList({ data }) {
    return (
        <div>
            {data && data.map(participant => (
                <ScheduleParticipantsListItem key={participant.scheduleParticipantId} participant={participant} />
            ))}
        </div>
    );
}

export default SchedulesParticipantsList;
