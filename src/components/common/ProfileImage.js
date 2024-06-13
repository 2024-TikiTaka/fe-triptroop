import React, { useEffect } from 'react';
import { DefaultProfile } from "./Icons";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callProfileAPI } from "../../apis/UserAPICalls";

function ProfileImage({ profileImages, size = "50px", children }) {
    const dispatch = useDispatch();
    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(callProfileAPI());
    }, []);

    return (
        <div
            className="avatar avatar-xl mb-2 profile-image"
            style={{
                overflow: "hidden", "width": size, "height": size,
                "borderRadius": size, background: "#f4f4f4"
            }}
        >
            {!profileInfo ?
                (
                    <DefaultProfile
                        className="avatar mx-auto d-block mb-3" />)
                : <Image src={profileInfo} />
            }
        </div>
    );
};

export default ProfileImage;
