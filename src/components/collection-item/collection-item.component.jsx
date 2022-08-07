import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { 
    CollectionItemContainer,
    ItemImage,
    CollectionFooter,
    ItemName,
    ItemPrice,
    CollectionItemButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return(
    <CollectionItemContainer>
        <ItemImage
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <CollectionFooter>
            <ItemName>{name}</ItemName>
            <ItemPrice>{price}</ItemPrice>
        </CollectionFooter>
        <CollectionItemButton onClick={() => addItem(item)} inverted>Add to cart</CollectionItemButton>
    </CollectionItemContainer>
)};

export default CollectionItem;