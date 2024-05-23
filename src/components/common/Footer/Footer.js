import React from 'react';
import Wrapper from "../../../layouts/Wrapper";
import FooterList from "./FooterList";
import FooterImage from "./FooterImage";

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