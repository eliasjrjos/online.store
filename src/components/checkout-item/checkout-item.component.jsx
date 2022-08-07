import React from 'react'

import { 
    CheckoutItemContainer,
    ImageContainer,
    ItemName,
    ItemQuantity,
    ItemPrice,
    ItemValue,
    ArrowStyle,
    RemoveButton } from './checkout-item.styles';

import './checkout-item.styles.css';

const CheckoutItem = ({ cartItem, handleClearItem, handleAddItem, handleRemoveItem}) => {
    const {name, imageUrl, price, quantity } = cartItem;

    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
            <ArrowStyle onClick={() => handleRemoveItem(cartItem)}>&#10094;</ArrowStyle>
            <ItemValue>{quantity}</ItemValue>
            <ArrowStyle onClick={() => handleAddItem(cartItem)}>&#10095;</ArrowStyle>
        </ItemQuantity>
        <ItemPrice>{price}</ItemPrice>
        <RemoveButton onClick={() => handleClearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)};

export default CheckoutItem;