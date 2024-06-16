import {useNavigate} from "react-router-dom";
import {Image} from "react-bootstrap";

function TravelListItem({travel: {id, title, content, images}}) {
    const navigate = useNavigate();

    return (
        <div className="travel-div"
             onClick={() => navigate(`/travel/${id}`)}>
            <div className="img">
                <Image src={images} alt={title}/>
            </div>
            <h5 className={title}>{title}</h5>
            <p className={content}>{content}</p>
        </div>
    );
}

export default TravelListItem;