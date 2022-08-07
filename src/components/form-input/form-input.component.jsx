import React from 'react';

import './form-input.styles.css';
import { 
    GroupStyle,
    FormInputStyle,
    FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupStyle>
        <FormInputStyle onChange={(e) => handleChange(e)} {...otherProps} />
        {
            label ?
            (
                <FormInputLabel {...otherProps}>
                    {label}
                </FormInputLabel>
            )
            :null
        }
    </GroupStyle>
);

export default FormInput;
