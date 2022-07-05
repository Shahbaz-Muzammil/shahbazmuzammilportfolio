import React from 'react';
import {Nav,NavbarBody,NavLogo,NavMenu,NavIcon} from "./NavBarElement"

const Navbar = () => {



    return (
        <div>
            <Nav>
            <NavbarBody>
                <NavLogo to="home" class="ml2">
                    
                <span class='letter'> Shahbaz Muzammil.Dev</span>
               
                </NavLogo>
                <NavIcon>
                
                </NavIcon>
                <NavMenu>
                   

                </NavMenu>
               

            </NavbarBody>

            </Nav>
          
            
        </div>
    );
};

export default Navbar;