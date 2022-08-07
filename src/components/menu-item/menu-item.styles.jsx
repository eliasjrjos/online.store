import styled, { css } from "styled-components";
import { devices } from '../../media-queries';

const sizedMenuStyle = css`
    height: 380px;
`;

const basicMenuStyle = css`
    height: 240px;
`;

const getMenuItemStyle = props => {
    return props.size ? sizedMenuStyle : basicMenuStyle;
}

export const MenuItemContainer = styled.div`
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${getMenuItemStyle}
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;

    &:hover {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    &:hover {
        opacity: 0.9;
    }
`;

export const Tilte = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;

    @media ${devices.tablet} {
        font-weight: bold;
        font-size: 18px;
    }

    @media ${devices.mobile} {
        font-weight: bold;
        font-size: 14px;
    }
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;

    @media ${devices.tablet} {
        font-weight: lighter;
        font-size: 14px;
    }

    @media ${devices.mobile} {
        font-weight: lighter;
        font-size: 12px;
    }
`;