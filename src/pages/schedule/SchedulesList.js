import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callScheduleListAPI} from "../../apis/ScheduleAPICalls";
import PagingBar from "../../components/pagination/PagingBar";
import ScheduleList from "../../components/list/ScheduleList";

function SchedulesList() {
    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(1);
    const {schedules} = useSelector(state => state.scheduleReducer);

    useEffect(() => {
        dispatch(callScheduleListAPI({currentPage}));
    }, [currentPage]);

    return (
        <>
            {
                schedules &&
                <>
                    <ScheduleList data={schedules.data}/>
                    <PagingBar pageInfo={schedules.pageInfo} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    )
};

export default SchedulesList;