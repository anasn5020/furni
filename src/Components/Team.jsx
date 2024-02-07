import React from 'react';
import Style from '../Assets/Styles/Components/Team.module.css';

const Team = (props) => {
    return (
        <>
            <div className={`${Style.teamCard}`}>
                <img src={props.image} alt="" />
                <h3 className={Style.teamCardName}>{props.name}</h3>
                <span className={Style.teamCardDesignation}>{props.designation}</span>
                <p className={Style.teamCardDescription}>{props.description}</p>
                <a href="/team" className={Style.teamCardLearnMore}>Learn More</a>
            </div>
        </>
    )
}
export default Team;