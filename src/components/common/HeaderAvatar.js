import { Image } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const HeaderAvatar = ({ profileInfo }) => {


    return (
        <>
            <div className="avatar me-3">
                {profileInfo?.result?.profileImage ?
                    <Image
                        src={profileInfo.profileImage} roundedCircle
                        className="avatar mx-auto d-block mb-3" />
                    : <Person />
                }
                <Image
                    src={profileInfo ? profileInfo.profileImage : <Person />} roundedCircle
                    className="avatar mx-auto d-block mb-3"
                    style={{ width: "50px", height: "50px" }}
                />
            </div>
            <div>
                <a className="h6 mt-2 mt-sm-0">{profileInfo?.nickname}</a>
                {/* <p className="small m-0">{profileInfo?.email}</p> */}
            </div>
        </>
    );
};

export default HeaderAvatar;
