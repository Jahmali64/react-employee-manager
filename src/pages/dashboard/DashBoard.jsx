import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from 'auth/AuthContext';

const DashBoardStyles = styled.section `
    display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    color: #848484;
    box-shadow: 0 0 5px 1px gray;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
    padding: 1rem;
    header h1, header p{
        font-weight: bold;
    }
    h1, p, li{
        margin-bottom: 1rem;
        padding: 0 1rem 1rem;
        border-bottom: 1px solid #d1d1d1;
        cursor: pointer;
    }
    h1{
        border-top: 1px solid #d1d1d1;
        padding-top: 1rem;
    }
    li{
        padding-left: 2rem;
    }
`

const Panels = styled.section `
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f4f4f4;
`

const DashBoard = (props) => {
    const auth = useContext(AuthContext);
    
    if(auth.isUser){
        return(
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase What's up</h1>
                        <p>Firebase who's new</p>
                    </header>
                    <ul>
                        <li>View All</li>
                        <li>Add</li>
                        <li>Remove</li>
                        <li>Edit</li>
                    </ul>
                </SideBar>
                <Panels></Panels>
            </DashBoardStyles>
        );
    }else{
        return(
            <Redirect to="/login"/>
        )
    }
    
}

export default DashBoard;