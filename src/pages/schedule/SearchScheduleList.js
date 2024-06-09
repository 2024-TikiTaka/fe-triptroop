import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {callScheduleSearchListAPI} from "../../apis/ScheduleAPICalls";
import ScheduleList from "../../components/list/ScheduleList";
import PagingBar from "../../components/pagination/PagingBar";

function SearchScheduleList() {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('keyword')
    const {schedules} = useSelector(state => state.scheduleReducer);
    const[currentPage,setCurrentPage]= useState(1);

    useEffect(() => {
        dispatch(callScheduleSearchListAPI({title, currentPage}))
    }, [title,currentPage]);

    return (
        <>
        <h3>[{title} 검색 결과 </h3>
            {schedules
                &&
                <>
                    <ScheduleList data={schedules.data}/>
                    <PagingBar pageInfo={schedules.pageInfo} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    );
}

export default SearchScheduleList;