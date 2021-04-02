import React from 'react';
import styled from 'styled-components';

import FormInput from '../components/forms/FormInput'
import Button from '../components/buttons/Button'
import {Link} from 'react-router-dom'

const LoginPageStyles = styled.aside `
    max-width: 380px;
    margin: 6rem auto 0;
    h1{
        font-size: 2.25rem;
        color: #57514c;
    }
    p > a{
        color: #a2a78e;
        font-weight: 600;
        text-decoration: none;
    }
    p > a:hover, p > a:active{
        text-decoration: underline;
    }
    p{
        color: #8b8b83;
    }
    .login-header{
        margin-bottom: 2rem;
    }
    .text-center{
        text-align: center;
    }
    .text-center p{
        margin-top: 2rem;
    }
    label{
        color: #bfc0b2;
    }
    button{
        cursor: pointer;
        margin-bottom: 3.5rem;
    }
`

const LoginPage = (props) => {
    return ( 
        <LoginPageStyles>
            <header className="login-header">
                <h1>Login Page</h1>
            </header>
            <FormInput label="Enter a Valid Email" type="email" id="email" id="email"/>
            <FormInput label="Password" type="password" id="password" id="password"/>
            <Button uiStyle="login" label="Login"/>
            <div className="text-center">
                <p>Not a member? <Link to="/register">Join here</Link></p>
                <p>OR</p>
                <p><Link to="/">Return Home</Link></p>
            </div>
        </LoginPageStyles>
    );
}

export default LoginPage;