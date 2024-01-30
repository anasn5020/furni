import React from 'react';
import Style from '../Assets/Styles/Pages/Home.module.css';
import hero_img from '../Assets/Images/Main_images/couch.png';

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
            <h1>Home Page</h1>
        </>
    )
}

export default Home;