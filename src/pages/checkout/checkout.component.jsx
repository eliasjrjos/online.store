import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.css';
import { 
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    Total } from './checkout.styles';

const CheckoutPage = ({ cartItems, handleClearItem, handleAddItem, handleRemoveItem }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map((cartItem) => (
                <CheckoutItem 
                    cartItem={cartItem} 
                    handleClearItem={handleClearItem}
                    handleAddItem={handleAddItem}
                    handleRemoveItem={handleRemoveItem}
                />
            ))
        }
        <Total>
            Total: ${cartItems.reduce(
                (accumalatedPrice, cartItem) => accumalatedPrice + (cartItem.quantity * cartItem.price), 0
            )}
        </Total>
    </CheckoutPageContainer>
);

export default CheckoutPage;