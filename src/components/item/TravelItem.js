function TravelItem({ travel }) {
    const { travels, images } = travel;
    return (
        <>
            <div className="img-div">
                {images && images.length > 0 ? images.map(image => (
                    <img key={image.imageId} src={image.fullPath} alt={travels.title}/>
                )) : <div>No Image</div>}
            </div>
            <div className="profile-div">
                <p>{travels.nickname}</p>
                <p><img src={travels.profileImage} alt={`${travels.nickname}'s profile`} /></p>
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
        </>
    );
}

export default TravelItem;