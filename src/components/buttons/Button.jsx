import React from 'react';
import styled , { css } from 'styled-components'

const ButtonStyles = styled.button `
    width: 100%;
    border: inherit;
    background-color: inherit;
    font-size: 1rem;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.65rem 1rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    ${props => props.uiStyle === "login" &&
        css`
        background: #f1a009;
        color:white;
        `
    }
    ${props => props.uiStyle === "signup" &&
        css`
        background: #a7b7d6;
        color:white;
        `
    }
`

const Button = (props) =>{
    return(
        <ButtonStyles {...props}>
            {props.label}
            {props.children}
        </ButtonStyles>
    );
}

export default Button;