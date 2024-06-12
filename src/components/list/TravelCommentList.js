import TravelCommentListItem from "../item/TravelCommentListItem";


function TravelCommentList({data}) {

    return (
        <div className="comment-div">
            { data && data.map(travelComments =>
                <TravelCommentListItem key={travelComments.id} comments={travelComments}/>)
            }

        </div>
    )
}

export default TravelCommentList;