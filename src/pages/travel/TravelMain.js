import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { callTravelListAPI } from "../../apis/TravelAPICalls";
import TravelCardList from "../../components/item/TravelListItem";
import PagingBar from "../../components/pagination/PagingBar";


function TravelMain() {

    const dispatch = useDispatch();
    const [ currentPage, setCurrentPage ] = useState(1);
    const { travels } = useSelector(state => state.travelReducer);
    const [ showInsertForm, setShowInsertForm ] = useState(false);
    const navegate = useNavigate();
    useEffect(() => {
        dispatch(callTravelListAPI({ currentPage }));
    }, [ currentPage ]);


    function handleInsertButtonClick() {
        // 등록 버튼을 클릭했을 때 실행되는 함수
        // setShowInsertForm(true); // 등록 폼 표시
        navegate('regist');
    }

    return (
        <>
            {/* 등록 버튼 */}
            <Button onClick={handleInsertButtonClick}>여행지 등록</Button>

            {
                travels &&
                <>
                    {/*<JobPostingsStatus /> /!* JobPostingsStatus 컴포넌트 추가 *!/*/}
                    <TravelCardList data={travels.data} />
                    <PagingBar pageInfo={travels.pageInfo} setCurrentPage={setCurrentPage} />
                </>
            }
        </>
    );
}

export default TravelMain;