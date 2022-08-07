import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { 
    CollectionPreviewContainer,
    Title,
    Preview } from './collection-preview.styles';

const CollectionPreview = ({ collectionItem, handleAddItem }) => {
    const { title, items } = collectionItem;
    return(
        <CollectionPreviewContainer>
            <Title>{title.toUpperCase()}</Title>
            <Preview>
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem id={item.id} item={item} addItem={handleAddItem} />
                    ))
                }
            </Preview>
        </CollectionPreviewContainer>
    )
};

export default CollectionPreview;