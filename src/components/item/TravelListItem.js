import React from 'react';
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

function TravelListItem({ travel: { id, title, content, images } }) {
    const navigate = useNavigate();

    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card card-img-scale overflow-hidden bg-transparent" onClick={() => navigate(`/travel/${id}`)}>
                <div className="card-img-scale-wrapper rounded-3">
                    <img src={images} alt={title} className="card-img" />
                </div>
                <div className="card-body px-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">
                            <a className="stretched-link">{title}</a>
                        </h5>
                    </div>
                    <span className="mb-0">{content}</span>
                </div>
            </div>
        </div>
    );
}

function TravelCardList({ data }) {
    return (
        <div className="row g-4">
            {data.map(travel => (
                <TravelListItem key={travel.id} travel={travel} />
            ))}
        </div>
    );
}

export default TravelCardList;