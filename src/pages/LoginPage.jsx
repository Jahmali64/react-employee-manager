import React from 'react';
import styled from 'styled-components';

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'

const LoginPageStyles = styled.aside `
    max-width: 380px;
    margin: 6rem auto 0;
    h1{
        font-size: 2.25rem;
    }
    button{
        cursor: pointer;
    }
    button:hover, button:active{
        color: #f4f4f4;
    }
`

const LoginPage = (props) => {
    return ( 
        <LoginPageStyles>
            <header>
                <h1>Login Page</h1>
            </header>
            <FormInput label="Enter a Valid Email" type="email" id="email" id="email"/>
            <FormInput label="Password" type="password" id="password" id="password"/>
            <Button uiStyle="login" label="Login"/>
        </LoginPageStyles>
    );
}

export default LoginPage;