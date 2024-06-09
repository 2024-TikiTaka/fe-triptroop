import Schedules from "../item/Schedules";

const ScheduleList = ({data}) => {

    return (
        <div className="schedule-div">
            { data && data.map(schedule => <Schedules key={schedule.scheduleId} schedule={schedule}/>)}
        </div>
    );
}

export default ScheduleList;