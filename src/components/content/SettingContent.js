import React from "react";
import SettingNavbar from "../common/SettingNavbar";
import { useSelector } from "react-redux";

function SettingContent({ children }) {

    const { profileInfo } = useSelector(state => state.userReducer);


    return (
        <>
            <div className="setting-content">
                <section className="pt-3">
                    <div className="container">
                        <div className="row">

                            <SettingNavbar profileInfo={profileInfo} />

                            <div className="col-lg-8 col-xl-9">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default SettingContent;
