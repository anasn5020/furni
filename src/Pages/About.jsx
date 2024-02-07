import React from 'react';
import Style from '../Assets/Styles/Pages/About.module.css';
import hero_img from '../Assets/Images/Main_images/couch.png';
import Featured from '../Components/Featured';
import whyChoose_img from '../Assets/Images/images/why-choose-us-img.jpg';
import Team from '../Components/Team';

const About = () => {
    return (
        <>
            <div className={`${Style.mainHero} container-fluid `}>
                <div className="container">
                    <div className="row">
                        <div className={`${Style.descriptionBox} col-5`}>
                            <h1 className={Style.mainHeading}>About Us</h1>
                            <p className={Style.mainDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <p className={`${Style.home_hero_btns_div}`}>
                                <button className={`${Style.heroShopNowBtn} btn`}>Shop Now</button>
                                <button className={`${Style.heroExploreBtn} btn`}>Explore</button>
                            </p>
                        </div>
                        <div className={`${Style.heroImgBox} col-sm-12 col-md-12 col-lg-7`}>
                            <img src={hero_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${Style.whyChooseUsContainer} container`}>
                <div className="row">
                    {/* COL # 1 */}
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col">
                                <h1 className={`${Style.choose_heading}`}>Why Choose Us</h1>
                                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            </div>
                        </div>
                        {/* ***************************** */}
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                <Featured heading="Fast & Free Shipping" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/truck.svg" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                <Featured heading="Easy to Shop" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/bag.svg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                <Featured heading="24/7 Support" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/support.svg" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                <Featured heading="Hassle Free Returns" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/return.svg" />
                            </div>
                        </div>
                        {/* ********************************* */}
                    </div>
                    {/* COL # 2 */}
                    <div className={`${Style.whyChooseImageContainer} col-sm-12 col-md-12 col-lg-6 mt-md-5 mt-lg-0  text-end`}>
                        <img src={whyChoose_img} alt="" className={`${Style.whyChooseimage} img-fluid`} />
                    </div>
                </div>
            </div>

            <div className={`${Style.ourTeamContainer} container`}>
                <h1 className={`${Style.ourTeamHeading}`}>Our Team</h1>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_1.jpg" name="Lawson Arnold" designation="CEO, Founder, Atty." description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_2.jpg" name="Jeremy Walker" designation="Manager" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_3.jpg" name="Patrik White" designation="Assitant Manager" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_4.jpg" name="Kathryn Ryan" designation="Managing Director" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_1.jpg" name="Lawson Arnold" designation="CEO, Founder, Atty." description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_2.jpg" name="Jeremy Walker" designation="Manager" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_3.jpg" name="Patrik White" designation="Assitant Manager" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <Team image="https://themewagon.github.io/furni/images/person_4.jpg" name="Kathryn Ryan" designation="Managing Director" description="Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;