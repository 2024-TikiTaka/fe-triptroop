import { Button, Col } from "react-bootstrap";
import React from "react";
import ProfileImage from "../common/ProfileImage";

function TravelCommentListItem({ comments: { id, content, nickname, profileImage } }) {
    return (
        <>
            {/* 댓글 */}
            <Col xs={12}>
                <div className="bg-light rounded p-3" key={id}>
                    <div>
                        <div className="mb-3">
                            <div className="float-start me-3">
                                <ProfileImage src={profileImage} />
                            </div>
                            <div>
                                <h6 className="m-0">{nickname}</h6>
                                {/* <span className="me-3 small">2 days ago</span> */}
                            </div>
                        </div>
                    </div>

                    <p>{content}</p>
                </div>
            </Col>
            <Col xs={12}>
                {/* 댓글 등록*/}
                <div className="mt-3">
                    <div>
                        <div className="d-flex mt-3">
                            <textarea className="form-control mb-0" placeholder="Add a comment..." rows="2"
                                      spellCheck="false"></textarea>
                            <Button>등록</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default TravelCommentListItem;