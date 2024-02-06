import React from 'react';
import Style from '../Assets/Styles/Components/HomeCardComponent.module.css';

const HomeCardComponent = (props) => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-4">
                    <div className={`${Style.thumbnail}`}>
                        <img src={props.image} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className={`${Style.DescriptionBox} col-8`}>
                    <h1 className={`${Style.heading}`}>{props.name}</h1>
                    <p className={`${Style.Description}`}>{props.description}</p>
                    <a href="/readmore" className={`${Style.readmoreButton}`}>Read More</a>
                </div>
            </div>
        </>
    )
}
export default HomeCardComponent;