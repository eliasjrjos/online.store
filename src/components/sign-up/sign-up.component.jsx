import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.css';
import { SignUpStyle } from './sign-up.styles';

const SignUp = () => {

    const [registerInfo, setRegisterInfo] = React.useState({
        displayName: '',
        email:'',
        password:'',
        confirmPassword: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = registerInfo;
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setRegisterInfo({
            ...registerInfo,
            [name]: value
        })
    }

    return(
        <SignUpStyle>
            <h1>I do not have an account</h1>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={registerInfo.displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={registerInfo.email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={registerInfo.password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={registerInfo.confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpStyle>
    )
};

export default SignUp;