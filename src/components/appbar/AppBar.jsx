import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppBarStyles = styled.nav `
    background-color: #8e9f3f;
    box-shadow: 0 0 3px 0 gray;
    padding: 1rem;
    ul{
        display: flex;
        justify-content: center;
    }
    li{
        margin: 0 1rem;
    }
    a{
        text-decoration: none;
        color: #303a00;
        font-size: 1.15rem;
    }
    a:hover, a:active{
        text-decoration: underline;
    }
`

const AppBar = (props) => {
    return(
        <AppBarStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </AppBarStyles>
    );
}

export default AppBar;