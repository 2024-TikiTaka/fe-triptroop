function TravelItem({ travel }) {
    const { travels, images, place } = travel;
    return (
        <>
            <div className="img-div">
                {images && images.length > 0 ? images.map(image => (
                    <img key={image.imageId} src={image.fullPath} alt={travels.title}/>
                )) : <div>No Image</div>}
            </div>
            <div className="profile-div">
                <p>{travel.nickname}</p>
                <p><img src={travel.profileImage} alt={`${travels.nickname}'s profile`}/></p>
            </div>

            <div className="detail">
                <ul className="details-list">
                    <li>
                        <strong>제목:</strong> {travels.title}
                    </li>
                    <li>
                        <strong>내용:</strong> {travels.content}
                    </li>
                </ul>
            </div>
            <br/>
            <div className="map-div">
                <li>
                    <strong>주소:</strong> {place.address}
                </li>
                <li>
                    <strong>장소:</strong> {place.name}
                </li>
            </div>
        </>
    );
}

export default TravelItem;