import React from 'react';
import styled from 'styled-components';

import FormInput from '../components/forms/FormInput';
import Button from '../components/buttons/Button';

const RegisterPageStyles = styled.aside `
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    .create-account{
        margin-top: 3rem;
    }
    button{
        cursor: pointer;
    }
    button:hover, button:active{
        color: #f4f4f4;
    }
`

const RegisterPage = (props) => {
    return ( 
        <RegisterPageStyles>
            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>no credit card required</p>
            </header>
            <FormInput label="Name on the Account" type="text" id="name" name="name"/>
            <FormInput label="Valid Email Address" type="email" id="email" name="email"/>
            <FormInput label="Password (Min 6 Characters)" type="password" id="password" name="password"/>
            <Button className="create-account" uiStyle="signup" label="Create a Free Account"/>
        </RegisterPageStyles>
    );
}

export default RegisterPage;