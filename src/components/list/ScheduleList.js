import ScheduleListItem from "../item/ScheduleListItem";

const ScheduleList = ({data}) => {

    return (
        <div className="schedule-div">
            { data && data.map(schedule => <ScheduleListItem key={schedule.scheduleId} schedule={schedule}/>)}
        </div>
    );
}

export default ScheduleList;