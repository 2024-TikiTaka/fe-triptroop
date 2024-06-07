import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callTravelDetailAPI} from "../../apis/TravelCalls.";
import TravelItem from "../../components/item/TravelItem";

function TravelDetail() {
    const dispatch = useDispatch();
    const { travelId } = useParams();
    const { travel, images} = useSelector(state => state.travelReducer.travel);

    useEffect(() => {
        dispatch(callTravelDetailAPI({ travelId }));
    }, [dispatch, travelId]);

    console.log(travel, images);  // travel 객체 출력

    return (
        <>
            {travel && (
                <div className="detail-div">
                    <TravelItem travel={travel} images={images} />
                </div>
            )}
        </>
    );
}

export default TravelDetail;