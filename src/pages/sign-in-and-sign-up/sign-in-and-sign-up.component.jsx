import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.css';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUp = ({ handleChangeUser }) => (
    <SignInAndSignUpContainer>
        <SignIn handleChangeUser={handleChangeUser} />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;