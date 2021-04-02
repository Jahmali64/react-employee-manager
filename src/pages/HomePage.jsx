import React from 'react';
import styled from 'styled-components';

import Logo from '../components/icons/Logo';
import {Link} from 'react-router-dom';

const HomePageStyles = styled.header `
    text-align: center;
    margin: 6rem auto 0;
    svg{
        width: 80px;
    }

    h1{
        font-size: 2.25rem;
        color: #57514c;
    }

    p{
        color: #bfc0b2;
    }

    ul{
        display: flex;
        justify-content: center;
    }

    li{
        margin: 4rem 2.5rem 2rem;
    }

    li a{
        background-color: blue;
        border-radius: 0.5rem;
        padding: 0.75rem 1.5rem;
        color: white;
        text-decoration: none;
    }

    li:first-child a{
        background-color: #f1a009;
    }

    li:last-child a{
        background-color: #a7b7d6;
    }
`

const HomePage = (props) => {
    return(
        <HomePageStyles>
            <Logo/>
            <h1>Employee Manager</h1>
            <p>Focus on people and we'll focus on the paperwork.</p>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </HomePageStyles>
    );
}

export default HomePage;