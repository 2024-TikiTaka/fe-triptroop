import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {callCommentAPI, callTravelDetailAPI} from "../../apis/TravelCalls.";
import TravelItem from "../../components/item/TravelItem";
import TravelCommentList from "../../components/list/TravelCommentList";
import PagingBar from "../../components/pagination/PagingBar";
import KakaoMap from "./KakaoMap";

function TravelDetail() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [isTravelDetailLoaded, setIsTravelDetailLoaded] = useState(false); // 추가된 상태
    const { travelId } = useParams();
    const { travel } = useSelector(state => state.travelReducer);
    const { comment } = useSelector(state => state.commentReducer);

    useEffect(() => {
        const fetchTravelDetail = async () => {
            await dispatch(callTravelDetailAPI({ travelId }));
            setIsTravelDetailLoaded(true); // 상태 업데이트
            dispatch(callCommentAPI({ travelId, currentPage }));
        };

        fetchTravelDetail();
    }, [dispatch, travelId]);

    useEffect(() => {
        if (isTravelDetailLoaded) {
            dispatch(callCommentAPI({ travelId, currentPage }));
        }
    }, [dispatch, travelId, currentPage, isTravelDetailLoaded]);


        console.log("디테일Travel Details:", travel);
        console.log("디테일Travel Comments:", comment);

    return (
        <>
            {travel && (
                <div className="detail-div">
                    <TravelItem travel={travel} />
                </div>
            )}
            {
                <div>
                    <KakaoMap />
                </div>
            }


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