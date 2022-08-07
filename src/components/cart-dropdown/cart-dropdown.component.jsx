import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyCartMessage } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        toggleCartHidden();
        navigate('/checkout')
    }

    return(
    <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
            }
        </CartItems>
        <CustomButton onClick={() => handleCheckoutClick()}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)};

export default CartDropdown;