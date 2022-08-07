import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { categories } from '../../data/category.data';

import { DirectoryMenuContainer } from './directory.styles';
import './directory.styles.css';

const Directory = () => {
    let categoryArr = categories;
    return(
        <DirectoryMenuContainer>
            {
                categoryArr.map(({ id, ...otherSectionprops}) => (
                    <MenuItem key={id} {...otherSectionprops} />
                ))
            }
        </DirectoryMenuContainer>
    )
};

export default Directory;