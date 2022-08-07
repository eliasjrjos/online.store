import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer>
            <ShoppingIcon />
        </ShoppingIconContainer>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
);

export default CartIcon;