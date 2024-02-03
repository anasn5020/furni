import React from 'react';
import Style from '../Assets/Styles/Pages/Home.module.css';
import hero_img from '../Assets/Images/Main_images/couch.png';
import ProductCard from '../Components/productCard';
import Featured from '../Components/Featured';
import whyChoose_img from '../Assets/Images/images/why-choose-us-img.jpg';

const Home = () => {
    return (
        <>
            <div className={`${Style.home_page_hero} container-fluid `}>
                <div className="container">
                    <div className="row">
                        <div className={`${Style.home_hero_heading_box} col-sm-12 col-md-12 col-lg-5`}>
                            <h1 className='mb-4'>Modern Interior Design Studio</h1>
                            <p className='mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <p className={`${Style.home_hero_btns_div}`}>
                                <button className={`${Style.home_hero_shop_now_btn} btn`}>Shop Now</button>
                                <button className={`${Style.home_hero_explore_btn} btn`}>Explore</button>
                            </p>
                        </div>
                        <div className={`${Style.home_page_hero_img_box} col-sm-12 col-md-12 col-lg-7`}>
                            <img src={hero_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Style.products_home_section} container`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <h1 className={`${Style.craft_heading} mb-4`}>Crafted with excellent material.</h1>
                        <p className={`${Style.craft_description} mb-5`}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        <a href="/home" className={`${Style.craft_button} mb-4`}>Explore</a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <ProductCard name="Nordic Chair" price="50" image="https://themewagon.github.io/furni/images/product-1.png" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <ProductCard name="Kruzo Aero Chair" price="78" image="https://themewagon.github.io/furni/images/product-2.png" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <ProductCard name="Ergonomic Chair" price="43" image="https://themewagon.github.io/furni/images/product-3.png" />
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
                            <div className="col mt-4">
                                <Featured heading="Fast & Free Shipping" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/truck.svg" />
                            </div>
                            <div className="col mt-4">
                                <Featured heading="Easy to Shop" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/bag.svg" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-4">
                                <Featured heading="24/7 Support" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/support.svg" />
                            </div>
                            <div className="col mt-4">
                                <Featured heading="Hassle Free Returns" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." icon="https://themewagon.github.io/furni/images/return.svg" />
                            </div>
                        </div>
                        {/* ********************************* */}
                    </div>
                    {/* COL # 2 */}
                    <div className={`${Style.whyChooseImageContainer} col-sm-12 col-md-12 col-lg-6 text-end`}>
                        <img src={whyChoose_img} alt="" className={`${Style.whyChooseimage} img-fluid`} />
                    </div>
                </div>
            </div>
            <h1>Home Page</h1>
        </>
    )
}

export default Home;