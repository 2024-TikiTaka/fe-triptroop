import React, { useEffect } from 'react';
import { DefaultProfile } from "./Icons";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ProfileImage({ size = "50px" }) {

    const dispatch = useDispatch();
    const { profileInfo } = useSelector(state => state.userReducer);

    useEffect(() => {
   
    }, [ profileInfo ]);

    return (
        <div
            className="avatar avatar-xl mb-2 profile-image"
            style={{
                overflow: "hidden", "width": size, "height": size,
                "borderRadius": size, background: "#f4f4f4"
            }}
        >
            {!profileInfo ?
                <DefaultProfile className="avatar mx-auto d-block mb-3"
                                style={{ "width": size, "height": size }}
                />
                : <Image src={profileInfo?.profileImage}
                         style={{ "width": size, "height": size }}
                />
            }
        </div>
    );
}

export default ProfileImage;
