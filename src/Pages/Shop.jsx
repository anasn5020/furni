import React from 'react';
import Style from '../Assets/Styles/Pages/Shop.module.css';
import ProductCard from '../Components/productCard';

const Shop = () => {
    return (
        <>
            <div className={`${Style.mainHero} container-fluid`}>
                <div className="container">
                    <h1>Shop</h1>
                </div>
            </div>
            <div className={`${Style.productSection} container`}>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="50" image="https://themewagon.github.io/furni/images/product-3.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="70" image="https://themewagon.github.io/furni/images/product-1.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="99" image="https://themewagon.github.io/furni/images/product-2.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="45" image="https://themewagon.github.io/furni/images/product-3.png" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="50" image="https://themewagon.github.io/furni/images/product-3.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="70" image="https://themewagon.github.io/furni/images/product-1.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="99" image="https://themewagon.github.io/furni/images/product-2.png" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <ProductCard name="Nordic Chair" price="45" image="https://themewagon.github.io/furni/images/product-3.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;