import React from 'react';
import style from '../Assets/Styles/Components/Product_card.module.css';

const ProductCard = (props) => {
    return (
        <>
            <div class={style.card}>
                <div class={style.card_image}>
                    <img
                        src={props.image}
                        alt={`${props.name} product`}
                    />
                    <h3 class={style.card_title}>{props.name}</h3>
                    <strong class={style.card_price}>${props.price}</strong>
                    <div class={style.card_overlay}>
                        <button class={style.card_button}><i class="bi bi-plus"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;