
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callTravelListAPI} from "../../apis/TravelCallsAPI";
import TravelList from "../../components/list/TravelList";
import PagingBar from "../../components/pagination/PagingBar";
import JobPostingsStatus from "./TravelNavber";


function TravelMain() {

    const dispatch = useDispatch();
    const [currentPage , setCurrentPage] = useState(1);
    const {travels} = useSelector(state => state.travelReducer);

    useEffect(() => {
        dispatch(callTravelListAPI({currentPage}));
    }, [currentPage]);
    return (
        <>

            {
                travels &&
                <>
                    <JobPostingsStatus /> {/* JobPostingsStatus 컴포넌트 추가 */}
                    <TravelList data={travels.data}/>
                    <PagingBar pageInfo={travels.pageInfo} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    )
}

export default TravelMain;