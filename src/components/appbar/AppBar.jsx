import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppBarStyles = styled.nav `
    background-color: #8e9f3f;
    box-shadow: 0 0 3px 0 gray;
    position: relative;
    z-index: 4;
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        height: 64px;
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
                <li><Link to="/dashboard">DashBoard</Link></li>
            </ul>
        </AppBarStyles>
    );
}

export default AppBar;