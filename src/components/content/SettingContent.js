import React from "react";
import SettingNavbar from "../common/SettingNavbar";

function SettingContent({ children }) {
    return (
        <>
            <div className="setting-content">
                <section className="pt-3">
                    <div className="container">
                        <div className="row">

                            <SettingNavbar />

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
