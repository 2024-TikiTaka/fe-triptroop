import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {callCommentAPI, callTravelDeleteAPI, callTravelDetailAPI} from "../../apis/TravelAPICalls";
import TravelItem from "../../components/item/TravelItem";
import TravelCommentList from "../../components/list/TravelCommentList";
import PagingBar from "../../components/pagination/PagingBar";
import KakaoMapTest from "./kakaoMapTest";


function TravelDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [isTravelDetailLoaded, setIsTravelDetailLoaded] = useState(false);
    const { travelId } = useParams();
    const { travel, place } = useSelector((state) => state.travelReducer);
    const { comment } = useSelector((state) => state.commentReducer);

    useEffect(() => {
        console.log('useParams로부터 가져온 travelId:', travelId);

        const fetchTravelDetail = async () => {
            if (travelId) {
                await dispatch(callTravelDetailAPI({ travelId }));
                setIsTravelDetailLoaded(true);
            } else {
                console.error('travelId가 유효하지 않습니다.');
            }
        };

        fetchTravelDetail();
    }, [dispatch, travelId]);

    useEffect(() => {
        if (isTravelDetailLoaded) {
            dispatch(callCommentAPI({ travelId, currentPage }));
        }
    }, [dispatch, travelId, currentPage, isTravelDetailLoaded]);

    const handleEditClick = () => {
        navigate(`/travels/modify/${travelId}`);
    };

    const handleDeleteClick = async () => {
        const success = await dispatch(callTravelDeleteAPI({ travelId }));
        if (success) {
            navigate('/travels'); // 삭제 성공 시 이동
        }
    };

    console.log("디테일Travel Details:", travel);
    console.log("디테일Travel Comments:", comment);
    console.log("디테일 place", place);

    return (
        <>
            {travel && (
                <div className="detail-div">
                    <TravelItem travel={travel}/>
                    <button onClick={handleEditClick}>수정</button>
                    <button onClick={handleDeleteClick}>삭제</button>
                </div>
            )}
            {travel && travel.place && (
                <div>
                    <KakaoMapTest place={travel.place}/>
                </div>
            )}
            {comment && (
                <div>
                    <TravelCommentList data={comment.data}/>
                    <PagingBar pageInfo={comment.pageInfo} setCurrentPage={setCurrentPage}/>
                </div>
            )}
        </>
    );
}

export default TravelDetail;

