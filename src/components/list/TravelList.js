import TravelListItem from "../item/TravelListItem";


function TravelList({ data }) {
    return (
        <div >
            {data && data.map(travel =>
                <TravelListItem key={travel.id} travel={travel} />)
            }
        </div>
    );
}

export default TravelList;