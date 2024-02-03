import React from 'react';
import Style from '../Assets/Styles/Components/Featured.module.css';

const Featured = (props) => {
    return (
        <>
            <div className={`${Style.featured}`}>
                <div className={`${Style.featuredIcons}`}>
                    <img src={props.icon} alt="" />
                </div>
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export default Featured;