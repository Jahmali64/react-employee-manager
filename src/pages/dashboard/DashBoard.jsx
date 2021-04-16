import React, {useContext} from 'react';
import { Redirect, Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from 'auth/AuthContext';

import ViewAllPanel from './panels/ViewAllPanel';
import EditPanel from './panels/EditPanel';
import DeletePanel from './panels/DeletePanel';
import AddPanel from './panels/AddPanel';

const DashBoardStyles = styled.section `
    display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    background-color: #f1fced;
    color: #618F50;
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
        border-bottom: 1px solid #8e9f3f;
        cursor: pointer;
    }
    h1{
        border-top: 1px solid #8e9f3f;
        padding-top: 1rem;
    }
    header p{
        margin-bottom: 0;
    }
    li{
        padding: 0;
        margin-bottom: 0;
    }
    li a{
        display: block;
        padding: 1rem 1rem 1rem 2rem;
        color: #618F50;
        text-decoration: none;
    }
    li a:hover{
        background-color: #618F50;
        color: #f1fced;
    }
`

const Panels = styled.section `
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f4f4f4;
`

const DashBoard = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();
    
    if(auth.isUser){
        return(
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase What's up</h1>
                        <p>Firebase who's new</p>
                    </header>
                    <ul>
                        <li><Link to={`${url}`}>View All</Link></li>
                        <li><Link to={`${url}/add`}>Add</Link></li>
                        <li><Link to={`${url}/delete`}>Remove</Link></li>
                        <li><Link to={`${url}/edit`}>Edit</Link></li>
                    </ul>
                </SideBar>
                <Panels>
                    <Switch>
                        <Route exact path={path}><ViewAllPanel/></Route>
                        <Route path={`${path}/add`}><AddPanel/></Route>
                        <Route path={`${path}/edit`}><EditPanel/></Route>
                        <Route path={`${path}/delete`}><DeletePanel/></Route>
                    </Switch>
                </Panels>
            </DashBoardStyles>
        );
    }else{
        return(
            <Redirect to="/login"/>
        )
    }
    
}

export default DashBoard;