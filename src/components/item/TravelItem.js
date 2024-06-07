function TravelItem({ travel, images }) {

    return (
        <>

            <div className="img-div">
                {images && images.length > 0 ? images.map(image => (
                    <img key={image.id} src={image.path} alt={travel.title}/>
                )) : <div>No Image</div>}
            </div>
            <div className="profile-div">
                <ul className="profile-list">
                    <li>
                        {travel.profileImage}
                    </li>
                    <li>
                        {travel.nickname}
                    </li>
                </ul>
            </div>

            <div className="detail">
                <ul className="details-list">
                    <li>
                        <strong>제목:</strong> {travel.title}
                    </li>
                    <li>
                        <strong>내용:</strong> {travel.content}
                    </li>
                </ul>
            </div>
        </>
    );

}

export default TravelItem;