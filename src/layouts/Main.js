import React from 'react';
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from "../components/Template/Navigation";

const Main = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate="%s | Fu Hong" defaultTitle="Fu Hong">
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description}></meta>
        </Helmet>
        <div id="wrapper">
            <h3>Main page</h3>
            <Navigation />
            <div id="main">
                {props.children}
            </div>
            {/* {props.fullPage ? null : <SideBer />} */}
        </div>
    </HelmetProvider>
)

Main.propTypes = {
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.arrayOf([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Fu Hong's personal website.",
};

export default Main