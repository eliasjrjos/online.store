import styled from "styled-components";

import { devices } from "../../media-queries";

export const EStoreStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media ${devices.tablet} {
        padding: 15px;
    }

    @media ${devices.mobile} {
        padding: 10px;
    }
`;