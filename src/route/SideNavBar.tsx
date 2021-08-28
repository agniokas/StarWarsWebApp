import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavBar: React.FC<{}> = () => {
    return (
        <div className="sideNav">
            <div>
                <p>navigation: </p>
            </div>
            <NavLink
                to='/about'
                activeStyle={{ fontWeight: "bold", color: "yellow" }}
            >
                About
            </NavLink>
            <NavLink
                to="/films"
                activeStyle={{ fontWeight: "bold", color: "yellow" }}
            >
                Films
            </NavLink>
        </div>
    )
}

export default SideNavBar
