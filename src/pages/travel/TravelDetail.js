import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {callCommentAPI, callPlaceAPI, callTravelDetailAPI} from "../../apis/TravelAPICalls";
import TravelItem from "../../components/item/TravelItem";
import TravelCommentList from "../../components/list/TravelCommentList";
import PagingBar from "../../components/pagination/PagingBar";
import KakaoMapTest from "./kakaoMapTest";


function TravelDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.
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

    console.log("디테일Travel Details:", travel);
    console.log("디테일Travel Comments:", comment);
    console.log("디테일 place", place);

    return (
        <>
            {travel && (
                <div className="detail-div">
                    <TravelItem travel={travel} />
                    <button onClick={handleEditClick}>수정</button>
                </div>
            )}
            {travel && travel.place && (
                <div>
                    <KakaoMapTest place={travel.place} />
                </div>
            )}
            {comment && (
                <div>
                    <TravelCommentList data={comment.data} />
                    <PagingBar pageInfo={comment.pageInfo} setCurrentPage={setCurrentPage} />
                </div>
            )}
        </>
    );
}


export default TravelDetail;