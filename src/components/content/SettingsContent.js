import React, { children } from "react";
import SettingsNavbar from "../common/SettingsNavbar";

function SettingsContent({ children }) {
    return (
        <>
            <div className="settings-content">
                <section className="pt-3">
                    <div className="container">
                        <div className="row">

                            <SettingsNavbar />

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
export default SettingsContent;
