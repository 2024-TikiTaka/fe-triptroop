import {Image} from "react-bootstrap";

function TravelCommentListItem ({ comments: { id, content, nickname , profileImage }}) {



    return (
        <div className="comment-div" key={id}>
            <p>{nickname}</p>
            <Image src={profileImage} alt={{nickname}}/>
            <p>{content}</p>
        </div>
    )
}

export default TravelCommentListItem;