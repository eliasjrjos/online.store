import React from 'react';

import { collections } from '../../data/collection.data';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionOverviewContainer } from './collection-overview.styles';


const CollectionOverview = ({ handleAddItem }) => {
    let collectionKeys = Object.keys(collections);
    return(
        <CollectionOverviewContainer>
            {
                collectionKeys.map((collectionkey) => (
                    <CollectionPreview key={collections[collectionkey].id} handleAddItem={handleAddItem} collectionItem={collections[collectionkey]} />
                ))
            }
        </CollectionOverviewContainer>
    )
};

export default CollectionOverview;