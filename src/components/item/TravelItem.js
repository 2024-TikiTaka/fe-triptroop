function TravelItem({ travel }) {
    const { travels, images } = travel;
    return (
        <>
            <div className="img-div">
                {images && images.length > 0 ? images.map(image => (
                    <img key={image.imageId} src={image.fullPath} alt={travel.title}/>
                )) : <div>No Image</div>}
            </div>
            <div className="profile-div">
                <p>{travel.nickname}</p>
                <p><img src={travel.profileImage} alt={`${travel.nickname}'s profile`} /></p>
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