import VisualSlider from "../custom/VisualSlider";
import {Col, Row} from "react-bootstrap";

function TravelItem({travel}) {
    const {travels, images, place} = travel;
    console.log(place)
    return (
        <>
            <Row>
                <Col xs={6}>
            <VisualSlider images={images}/>
            {/*<div className="img-div">*/}
            {/*    {images && images.length > 0 ? .map(image => (*/}
            {/*        <img key={image.imageId} src={image.fullPath} alt={travels.title}/>*/}
            {/*    )) : <div>No Image</div>}*/}
            {/*</div>*/}
                </Col>
                <Col xs={6}>
            <div className="profile-div">
                <p>{travel.nickname}</p>
                <p><img src={travel.profileImage} alt={`${travels.nickname}'s profile`}/></p>
            </div>

            <div className="card-header bg-transparent border-bottom p-0 pb-3">
                <h3 className="mb-0"><strong>제목 :</strong>{travels.title}</h3>
            </div>
            <div className="card-body p-0 pt-3">
                <p className="mb-4"><strong>내용 : {travels.content}</strong></p>
            </div>
            {/*<div className="detail">*/}
            {/*    <ul className="details-list">*/}
            {/*        <li>*/}
            {/*            <strong>제목:</strong> {travels.title}*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <strong>내용:</strong> {travels.content}*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <br/>
            <blockquote className="bg-light rounded text-center p-3 p-md-4 my-4">
                <h6 className="fw-normal"><i className="fa-solid fa-quote-left me-2"></i>
                    <strong>주소:</strong> {place.address}  <i
                        className="fa-solid fa-quote-right ms-2"></i></h6>
                <div className="blockquote-footer mb-0 fs-6 mt-3">
                    <strong>장소:</strong> {place.name}
                </div>
            </blockquote>
                </Col>
            {/*<div className="map-div">*/}
            {/*    <li>*/}
            {/*        <strong>주소:</strong> {place.address}*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <strong>장소:</strong> {place.name}*/}
            {/*    </li>*/}
            {/*</div>*/}
</Row>
        </>
    );
}

export default TravelItem;



