import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callScheduleListAPI, callScheduleSearchListAPI, callScheduleSortListAPI} from "../../apis/ScheduleAPICalls";
import PagingBar from "../../components/pagination/PagingBar";
import ScheduleList from "../../components/list/ScheduleList";
import {Outlet, useLocation} from "react-router-dom";

function SchedulesList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { schedules } = useSelector(state => state.scheduleReducer);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sort = searchParams.get('sort');
    const keyword = searchParams.get('keyword');

    useEffect(() => {
        if (keyword) {
            dispatch(callScheduleSearchListAPI({ keyword, currentPage }));
        } else if (sort) {
            dispatch(callScheduleSortListAPI({ sort, currentPage }));
        } else {
            dispatch(callScheduleListAPI({ currentPage }));
        }
    }, [currentPage, sort, keyword, dispatch]);

    return (
        <>
            {schedules && (
                <>
                    <ScheduleList data={schedules.data} />
                    <PagingBar pageInfo={schedules.pageInfo} setCurrentPage={setCurrentPage} />
                </>
            )}
        </>
    );
}

export default SchedulesList;