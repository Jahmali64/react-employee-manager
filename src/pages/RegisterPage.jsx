import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from '../firebase/firebaseConfig';

import FormInput from '../components/forms/FormInput';
import Button from '../components/buttons/Button';
import {Link} from 'react-router-dom';
import AuthContext from 'auth/AuthContext';

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
    // declare use context variable so that register page gains access to the auth provider value
    const auth = useContext(AuthContext);

    // declare state variables
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    //create handleClick event function which creates a new firebase user when register button is clicked
    const handleClick = (e) => {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            setIsValid(true);
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
        })
    }

    if(isValid){
        // if user was successfully added which should make isValid true, the user should then be redirected to the login page 
        return(
            <Redirect to="/login"/>
        );
    }else{
        //else keep the user on the register page 
        return ( 
            <RegisterPageStyles>
                <header className="register-header">
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>No credit card required</p>
                </header>
                <FormInput label="Name on the Account" type="text" id="name" name="name" onChange={(e) => setUsername(e.target.value)}/>
                <FormInput label="Valid Email Address" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value.trim())}/>
                <FormInput label="Password (Min 6 Characters)" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value.trim())}/>
                <Button className="create-account" uiStyle="signup" label="Create a Free Account" onClick={handleClick}/>
                <div className="text-center">
                    <p>Already a member? <Link to="/login">Login here</Link></p>
                    <p>OR</p>
                    <p><Link to="/">Return Home</Link></p>
                </div>
            </RegisterPageStyles>
        );
    }
}

export default RegisterPage;