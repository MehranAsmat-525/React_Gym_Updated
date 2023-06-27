/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
    <div css={styles} className="mapouter">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.99055266735!2d72.75643475964439!3d33.61625093305749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687875601306!5m2!1sen!2s"></iframe>
    </div>
);

const styles = css`
    width: 100%;
    max-width: 50%;
    min-height: 60vh;
    iframe {
        width: 100%;
        height: 100%;
        display: block;
        border: none;
    }
    @media (max-width: 1200px) {
        max-width: 100%;
        height: 60vh;
    }
`;

export default Map;
