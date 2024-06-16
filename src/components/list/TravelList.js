import TravelListItem from "../item/TravelListItem";
import styles from '../../styles/TravelListmodule.css';

function TravelList({ data }) {
    return (
        <div className={styles.travelsDiv}>
            {data && data.map(travel =>
                <TravelListItem key={travel.id} travel={travel} />)
            }
        </div>
    );
}

export default TravelList;