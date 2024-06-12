import {useNavigate} from "react-router-dom";
import {Image} from "react-bootstrap";

function TravelListItem({travel : { id, title, content, images}}){

    const navigate = useNavigate();

    return (
        <div className="travel-div"
            onClick={ () => navigate(`/travel/${id}`)}>
            <Image src={images} alt={title}/>
            <h5>{title}</h5>
            <p>{content}</p>
        </div>

    );
}



export default TravelListItem;