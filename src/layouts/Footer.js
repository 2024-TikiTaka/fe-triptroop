import React from 'react';
import Wrapper from "./Wrapper";
import FooterList from "../components/common/Footer/FooterList";
import FooterImage from "../components/common/Footer/FooterImage";

function Footer() {
    return (
        <footer>
            <Wrapper>
                <FooterImage/>
                <FooterList/>
            </Wrapper>
        </footer>
    );
}

export default Footer;
