import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobilIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>DOLLA</NavLogo>
                    <MobilIcon onClick={toggle}>
                        <FaBars />
                    </MobilIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='About'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='SignUp'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'> Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
// at 2:18
// https://www.youtube.com/watch?v=Nl54MJDR2p8&list=PLIpuIsiCMBrqgGi1-Tnr40JkxCtyTN8Fo&index=6&t=762s