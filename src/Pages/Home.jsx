import React from 'react';
import Style from '../Assets/Styles/Pages/Home.module.css';
import hero_img from '../Assets/Images/Main_images/couch.png';
import ProductCard from '../Components/productCard';
import Featured from '../Components/Featured';
import whyChoose_img from '../Assets/Images/images/why-choose-us-img.jpg';
import gridOneImage from '../Assets/Images/images/grid1Image.jpg';
import gridTwoImage from '../Assets/Images/images/img-grid-2.jpg';
import gridThreeImage from '../Assets/Images/images/img-grid-3.jpg';
import HomeCardComponent from '../Components/HomeCardComponents';
import TestimonalsCarousel from '../Components/TestimonalsCarousel';
import BlogCard from '../Components/BlogCard';

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

            <div className={`${Style.helpYouContainer} container`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className={`${Style.ImagesGrid}`}>
                            <div className={`${Style.gridOne}`}>
                                <img src={gridOneImage} alt="" />
                            </div>
                            <div className={`${Style.gridTwo}`}>
                                <img src={gridTwoImage} alt="" />
                            </div>
                            <div className={`${Style.gridThree}`}>
                                <img src={gridThreeImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <h1 className={`${Style.helpYouSectionHeading} mb-4`}>We Help You Make Modern Interior Design</h1>
                        <p className={`${Style.HelpYouSectionPara} mb-4`}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                        <div className="row">
                            <div className="col">
                                <ul className={`${Style.UlKeyPoints}`}>
                                    <li className='text-gray'>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className={`${Style.UlKeyPoints}`}>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <ul className={`${Style.UlKeyPoints}`}>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className={`${Style.UlKeyPoints}`}>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                        </div>
                        <a href="/home" className={`${Style.helpYouButton} mt-4`}>Explore</a>
                    </div>
                </div>
            </div>

            <div className={`${Style.productCardSection} container`}>
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <HomeCardComponent name="Nordic Chair" image="https://themewagon.github.io/furni/images/product-1.png" description="Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <HomeCardComponent name="Kruzo Aero Chair" image="https://themewagon.github.io/furni/images/product-2.png" description="Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <HomeCardComponent name="Ergonomic Chair" image="https://themewagon.github.io/furni/images/product-3.png" description="Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" />
                    </div>
                </div>
            </div>

            <div className={`${Style.CarouselBox} container`}>
                <h1 className={`${Style.testimonalHeading}`}>Testimonals</h1>
                <TestimonalsCarousel />
            </div>

            <div className={`${Style.recentBlogs} container`}>
                <div className={`${Style.recentBlogsMainHeadingBox}`}>
                    <h1 className={`${Style.recentBlogsHeading}`}>Recent Blog</h1>
                    <p className={`${Style.recentBlogsAchor}`}>View ALl Posts</p>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <BlogCard image="https://themewagon.github.io/furni/images/post-1.jpg" name="First Time Home Owner Ideas" author=" Kristin Watson" date=" Dec 19, 2021" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <BlogCard image="https://themewagon.github.io/furni/images/post-2.jpg" name="How To Keep Your Furniture Clean" author=" Robert Fox" date=" Dec 15, 2021" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <BlogCard image="https://themewagon.github.io/furni/images/post-3.jpg" name="Small Space Furniture Apartment Ideas" author=" Kristin Watson" date=" Dec 12, 2021" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;