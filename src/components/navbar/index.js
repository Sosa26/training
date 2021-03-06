import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About 
                </NavLink>
                <NavLink to="/Services" activeStyle>
                    Services 
                </NavLink>
                <NavLink to="/Contact-us" activeStyle>
                    Contact Us 
                </NavLink>
                <NavLink to="/SignUp" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to="/SignIn">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar; 
