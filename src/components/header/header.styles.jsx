import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { devices } from "../../media-queries";

// like variable that can use over this file
const OptionContainerStyle = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media ${devices.tablet} {
        padding: 9px;
        font-size: 14px;
    }

    @media ${devices.mobile} {
        padding: 9px;
        font-size: 14px;
    }
`;

export const OptionItem = styled.div`
    cursor: pointer;
    padding: 10px 15px;

    @media ${devices.tablet} {
        padding: 4px;
        font-size: 9px;
    }

    @media ${devices.mobile} {
        padding: 4px;
        font-size: 9px;
    }
`;