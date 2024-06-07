import {useNavigate} from "react-router-dom";

function Schedules({schedule : { scheduleId,sido,count,startDate,endDate,title,views,imageUrl}}) {

    const navigate = useNavigate();

    return (
        <div
            className="schedule-div"
            onClick={()=>navigate(`/schedules/${scheduleId}`)}
        >
            <img src={imageUrl} alt ={title}/>
            <h5>{title}</h5>
            <h5>{sido}</h5>
            <h5>{count}</h5>
            <h5>{startDate}</h5>
            <h5>{endDate}</h5>
            <h5>{views}</h5>

        </div>
    )

}

export default Schedules;