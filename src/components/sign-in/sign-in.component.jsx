import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.css';
import { SignInStyle } from './sign-in.styles';

const SignIn = ({ handleChangeUser }) => {

    const [credintials, setCredintials] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(credintials.email === "online.store@gmail.com" &&
            credintials.password === "admin") {
            handleChangeUser('admin')
            setCredintials({
                email: '',
                password: ''
            })
        }
        else {
            alert("Wrong email or password");
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setCredintials({
            ...credintials,
            [name]: value
        })
    }

    return(
        <SignInStyle>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={(e) => handleSubmit(e)}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={credintials.email} 
                    handleChange={handleChange}
                    label='Email'
                    required />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={credintials.password} 
                    handleChange={handleChange}
                    label='Password'
                    required />

                <CustomButton type='submit'>SIGN IN</CustomButton>
            </form>
        </SignInStyle>
    )
}

export default SignIn;