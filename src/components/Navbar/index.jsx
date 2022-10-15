import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobilIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElement'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>DOLLA</NavLogo>
                    <MobilIcon>
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
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
// at 41m 15sec 
// https://www.youtube.com/watch?v=Nl54MJDR2p8&list=PLIpuIsiCMBrqgGi1-Tnr40JkxCtyTN8Fo&index=6&t=762s