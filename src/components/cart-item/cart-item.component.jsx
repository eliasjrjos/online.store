import React from 'react';

import { CartItemContainer, ItemDetails, ItemName, ItemPrice } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <img src={imageUrl} alt='item' />
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <ItemPrice>
                {quantity} X {price}
            </ItemPrice>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;