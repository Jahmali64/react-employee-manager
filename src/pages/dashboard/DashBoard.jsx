import React from 'react';
import styled from 'styled-components';

const DashBoardStyles = styled.section `
    display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    box-shadow: 0 0 5px 1px gray;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
`

const Panels = styled.section `
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f4f4f4;
`

const DashBoard = (props) => {
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
}

export default DashBoard;