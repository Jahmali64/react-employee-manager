import React from 'react';
import styled from 'styled-components';

import FormInput from '../components/forms/FormInput';
import Button from '../components/buttons/Button';
import {Link} from 'react-router-dom';

const RegisterPageStyles = styled.aside `
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
    }
    h2{
        font-size: 2.25rem;
        color: #57514c;
    }
    .register-header{
        margin-bottom: 2.5rem;
    }
    label, p{
        color: #bfc0b2;
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
    .create-account{
        margin-top: 3rem;
    }
    button{
        cursor: pointer;
        margin-bottom: 3.5rem;
    }
`

const RegisterPage = (props) => {
    return ( 
        <RegisterPageStyles>
            <header className="register-header">
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>No credit card required</p>
            </header>
            <FormInput label="Name on the Account" type="text" id="name" name="name"/>
            <FormInput label="Valid Email Address" type="email" id="email" name="email"/>
            <FormInput label="Password (Min 6 Characters)" type="password" id="password" name="password"/>
            <Button className="create-account" uiStyle="signup" label="Create a Free Account"/>
            <div className="text-center">
                <p>Already a member? <Link to="/login">Login here</Link></p>
                <p>OR</p>
                <p><Link to="/">Return Home</Link></p>
            </div>
        </RegisterPageStyles>
    );
}

export default RegisterPage;