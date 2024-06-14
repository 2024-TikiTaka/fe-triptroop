import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";

function ScheduleListItem({schedule : { scheduleId,sido,count,startDate,endDate,title,views,imageUrl}}) {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const onEnterKeyHandler = e => {
        if (e.key === 'Enter') navigate(`/schedules/search?keyword=${title}`)
    };
    return (
//         <div>
//             <input className="input-style" type="text" placeholder="검색" onChange={e => setSearch(e.target.value)}
//                    onKeyUp={onEnterKeyHandler} value={search}
//             />
//         </div>
// ,
    <div
        className="schedule-div"
        onClick={() => navigate(`/schedules/${scheduleId}`)}
    >


        <img src={imageUrl} alt={title}/>
        <h5>{title}</h5>
            <h5>{sido}</h5>
            <h5>{count}</h5>
            <h5>{startDate}</h5>
            <h5>{endDate}</h5>
            <h5>{views}</h5>

        </div>
    )

}

export default ScheduleListItem;