import React from 'react';
import Style from '../Assets/Styles/Pages/Home.module.css';
import hero_img from '../Assets/Images/Main_images/couch.png';
import ProductCard from '../Components/productCard';

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
            <h1>Home Page</h1>
        </>
    )
}

export default Home;