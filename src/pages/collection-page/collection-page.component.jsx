import React from 'react';

import { collections } from '../../data/collection.data';

import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection-page.styles.css';
import { 
    CollectionPageContainer,
    Title,
    Items } from './collection-page.styles';

const CollectionPage = ({ handleAddItem }) => {
    const params = useParams();
    let collection = collections[params.categoryId];
    const { title, items } = collection;
    return(
        <>
        {
            collection ? (
                <CollectionPageContainer>
                    <Title>{title.toUpperCase()}</Title>
                    <Items>
                        {
                            items
                            .map(item => (
                                <CollectionItem id={item.id} item={item} addItem={handleAddItem} />
                            ))
                        }
                    </Items>
                </CollectionPageContainer>
            )
            : (
                <CollectionPageContainer>No Category match</CollectionPageContainer>
            )
        }
        </>
)};

export default CollectionPage;