
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callTravelListAPI} from "../../apis/TravelAPICalls";
import TravelList from "../../components/list/TravelList";
import PagingBar from "../../components/pagination/PagingBar";
import JobPostingsStatus from "./TravelNavber";
import {useNavigate} from "react-router-dom";



function TravelMain() {

    const dispatch = useDispatch();
    const [currentPage , setCurrentPage] = useState(1);
    const {travels} = useSelector(state => state.travelReducer);
    const [showInsertForm, setShowInsertForm] = useState(false);
    const navegate = useNavigate();
    useEffect(() => {
        dispatch(callTravelListAPI({currentPage}));
    }, [currentPage]);



    function handleInsertButtonClick() {
        // 등록 버튼을 클릭했을 때 실행되는 함수
        // setShowInsertForm(true); // 등록 폼 표시
        navegate('regist')
    }

    return (
        <>
            {/* 등록 버튼 */}
            <button onClick={handleInsertButtonClick}>여행지 등록</button>


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