import styled, { css } from "styled-components";

const shrinkFormInputStyle = css`
    top: -14px;
    font-size: 12px;
    color: black;
`;

const basicFormInputStyle = css`
    color: grey;
    border: none;
`;

export const GroupStyle = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

const getFormInputStyle = props => {
    return props.value.length ? shrinkFormInputStyle : basicFormInputStyle;
}

export const FormInputLabel = styled.label`
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    
    ${getFormInputStyle}
`;

export const FormInputStyle = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
        outline: none;
    }
    &:focus ~ ${FormInputLabel}{
        top: -14px;
        font-size: 12px;
        color: black;
    }

`;