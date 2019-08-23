import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
width: 100%;
border: 3px solid whitesmoke;
padding: 20px;
font-size: 20px;
border-radius 15px;
`;

const Links = styled.div`
color: whitesmoke;
font-weight: bold;
align-items: center;
align-content: center;
padding: 5px;

`;


export default function TabNav() {
    return (

        <Nav>
            <NavLink exact activeClassName="active" to={'/'}>
                <Links >Home</Links>
            </NavLink>

            <NavLink activeClassName="active" to={'/characters'}>
                <Links >Characters</Links>
            </NavLink>

            <NavLink activeClassName="active" to={'/locations'}>
                <Links >Locations</Links>
            </NavLink>

            <NavLink activeClassName="active" to={'/episodes'}>
                <Links >Episodes</Links>
            </NavLink>
        </Nav>
    );
}

