import {Button, Col, Row} from "react-bootstrap";
import {DefaultProfile} from "../common/Icons";

function TravelCommentListItem({comments: {id, content, nickname, profileImage}}) {
    return (
        <>
            {/* 댓글 */}
            <Row>
                <Col xs={12}>
                    <div className="bg-light rounded p-3" key={id}>
                        <div>
                            <div className="mb-3">

                                        : (<img className="avatar avatar-md rounded-circle float-start me-3"
                                                src={profileImage}
                                                alt={nickname}/>)
                             
                                <div>
                                    <h6 className="m-0">{nickname}</h6>
                                    <span className="me-3 small">2 days ago</span>
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
            </Row>
        </>
    );
}

export default TravelCommentListItem;