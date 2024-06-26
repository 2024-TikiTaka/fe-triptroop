import TravelCommentListItem from "../item/TravelCommentListItem";
import React from "react";
import { Row } from "react-bootstrap";
import '../../styles/travel.css';


function TravelCommentList({ data }) {

    return (
        <>
            <Row xs={12}>
                {data.map(travelComments =>
                    <TravelCommentListItem key={travelComments.id} comments={travelComments} />)
                }
            </Row>
        </>
    );
}

export default TravelCommentList;