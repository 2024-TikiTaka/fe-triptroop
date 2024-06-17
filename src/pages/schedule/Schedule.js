import ScheduleListItem from "../../components/item/ScheduleListItem";

const Schedule = ({data}) => {

    return (
        <div className="schedule-div">
            { data && data.map(schedule => <ScheduleListItem key={schedule.scheduleId} schedule={schedule}/>)}
        </div>
    );
}


export default Schedule;
