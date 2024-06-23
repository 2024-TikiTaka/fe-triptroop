import React from 'react';
import { Image } from "react-bootstrap";

function ProfileImage({ src, size = "50px" }) {

    return (
        <div className="w-100 me-auto">
            <div
                className="avatar avatar-xl mb-2 me-auto profile-image"
                style={{
                    overflow: "hidden", "width": size, "height": size, "margin": "auto",
                    "borderRadius": size, background: "#f4f4f4"
                }}
            >
                <Image src={src || "/images/default_profile.svg"}
                       style={{ "width": size, "height": size }}
                       onError={(e) => {
                           e.target.src = "/images/default_profile.svg";
                       }}
                />
            </div>
        </div>
    );
}

export default ProfileImage;
