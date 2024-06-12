function PlaceItem({ place }) {
    const { address, name } = place;
    return (
        <>
            <div className="place-div">
                <ul>
                    <li>
                        <strong>주소:</strong> {address}
                    </li>
                    <li>
                        <strong>상호명:</strong> {name}
                    </li>

                </ul>
            </div>

        </>
    )
}

export default PlaceItem;