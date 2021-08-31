import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavBar: React.FC<{}> = () => {
    return (
        <div className="sideNav">
            <NavLink
                id='home-link'
                to='/'
                activeClassName='activeLink'
            >
                Home
            </NavLink>
            <NavLink
                to='/about'
                activeClassName='activeLink'
            >
                About
            </NavLink>
            <NavLink
                to="/films"
                activeClassName='activeLink'
            >
                Films
            </NavLink>
        </div>
    )
}

export default SideNavBar
