import React from 'react';
import Style from '../Assets/Styles/Components/Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={`${Style.mainContainer} container-fluid`}>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-8">
                            <h3 className={`${Style.newsLetterHeading}`}>
                                <span>
                                    <img src="https://themewagon.github.io/furni/images/envelope-outline.svg" alt="" />
                                </span>
                                <span>
                                    Subscribe to Newsletter
                                </span>
                            </h3>
                            <form action="">
                                <div className={`${Style.formmain} row`}>
                                    <div className="col">
                                        <input type="text" className={`${Style.inp}`} placeholder='Enter your name' />
                                    </div>
                                    <div className="col">
                                        <input type="email" className={`${Style.inp}`} placeholder='Enter your email' />
                                    </div>
                                    <div className="col">
                                <a href="/send" className={`${Style.sendBtn}`}><i class="bi bi-send"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={`${Style.sofaMainContainer} col-4`}>
                            <div className={`${Style.sofaContainer}`}>
                                <img src="https://themewagon.github.io/furni/images/sofa.png" className={`${Style.sofaImage} img-fluid`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className={`${Style.logo_div} navbar-brand`}>
                                <h1 className={Style.logo_heading}>Furni</h1>
                                <span className={Style.Dot}>.</span>
                            </div>
                            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                            <ul className={`${Style.unorderdListIcons}`}>
                                <li><a href="/facebook.com"><i class="bi bi-facebook"></i></a></li>
                                <li><a href="/twitter.com"><i class="bi bi-twitter"></i></a></li>
                                <li><a href="/instagram.com"><i class="bi bi-instagram"></i></a></li>
                                <li><a href="/linkedin.com"><i class="bi bi-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <ul className={`${Style.unorderdList}`}>
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <ul className={`${Style.unorderdList}`}>
                                <li><a href="/aboutus">Support</a></li>
                                <li><a href="/services">Knowledge Base</a></li>
                                <li><a href="/blog">Live Chat</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <ul className={`${Style.unorderdList}`}>
                                <li><a href="/aboutus">Jobs</a></li>
                                <li><a href="/services">Our Team</a></li>
                                <li><a href="/blog">Leadership</a></li>
                                <li><a href="/contact">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-2">
                            <ul className={`${Style.unorderdList}`}>
                                <li><a href="/aboutus">Nordic Chair</a></li>
                                <li><a href="/services">Kruzo Aero</a></li>
                                <li><a href="/blog">Ergonomic Chair</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='mt-5 mb-3' />
                    <div className={`${Style.copyrightContainer} row`}>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <p className={`${Style.copyrightDescription}`}>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
                        </div>
                        <div className={`${Style.lastAnchorsContainer} col-sm-12 col-md-12 col-lg-6`}>
                            <a href="/terms&conditions" className={`${Style.lastAnchors}`}>Terms & Conditions</a>&nbsp;&nbsp;&nbsp;
                            <a href="/policy" className={`${Style.lastAnchors}`}>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;