import React from 'react';

import { useNavigate } from 'react-router-dom';

import './menu-item.styles.css';
import { 
    MenuItemContainer,
    BackgroundImage,
    Content,
    Tilte,
    Subtitle } from './menu-item.styles';

const MenuItem = ({...otherProps}) => {
    const navigate = useNavigate();
    const { title, imageUrl, linkUrl } = otherProps
    return(
    <MenuItemContainer {...otherProps} onClick={() => navigate(`/${linkUrl}`)}>
        <BackgroundImage
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
        />
        <Content>
            <Tilte>{title.toUpperCase()}</Tilte>
            <Subtitle>SHOP NOW</Subtitle>
        </Content>
    </MenuItemContainer>
)};

export default MenuItem;