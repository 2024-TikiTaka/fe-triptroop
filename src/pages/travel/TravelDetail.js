import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callTravelDetailAPI} from "../../apis/TravelCalls.";
import TravelItem from "../../components/item/TravelItem";

function TravelDetail() {
    const dispatch = useDispatch();
    const { travelId } = useParams();
    const { travel} = useSelector(state => state.travelReducer);

    useEffect(() => {
        dispatch(callTravelDetailAPI({ travelId }));
    }, [dispatch, travelId]);

    console.log(travel);  // travel 객체 출력

    return (
        <>
            {travel && (
                <div className="detail-div">
                    <TravelItem travel={travel} />
                </div>
            )}
        </>
    );
}

export default TravelDetail;