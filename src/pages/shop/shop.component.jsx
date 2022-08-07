import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import './shop.styles.css';
import { ShopPageContainer } from './shop.styles';

const ShopPage = ({ handleAddItem }) => {
    return(
        <ShopPageContainer>
            <CollectionOverview handleAddItem={handleAddItem} />
        </ShopPageContainer>
    )
};

export default ShopPage;