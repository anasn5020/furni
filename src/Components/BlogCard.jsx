import React from 'react';
import Style from '../Assets/Styles/Components/BlogCard.module.css';

const BlogCard = (props) => {
    return (
        <>
            <a href="/blog" className={`${Style.BlogCardImageA}`}>
                <img src={props.image} alt="" />
            </a>
            <div className={`${Style.BlogCardDetails}`}>
                <h3 className={`${Style.BlogCardHeading}`}>{props.name}</h3>
                <div className={`${Style.BlogCardDescription}`}>
                    <span>
                        by <a href="/author">{props.author} </a>
                    </span>
                    <span>
                         on <a href="/calender.com">{props.date}</a>
                    </span>
                </div>
            </div>
        </>
    )
}
export default BlogCard;