import React from 'react';
import ScrollTop from "./ScrollTop";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";


const FooterTwo = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
    
                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Επικοινωνία</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>One</li>
                                            <li>Two</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Items</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li>One</li>
                                            <li>Two</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">Designed, Developed & Powered by</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">Richterlabs</h6>
                                        <ul className="social-icon social-default justify-content-start">
                                            {/* <li><Link to="https://github.com/richterlabs" target='_blank'><FiGithub /></Link></li>
                                            <li><Link to="instagram.com/" target='_blank'><FiInstagram /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterTwo;
