import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.uid && <span style={{color : "white"}}>Hello {user.displayName}</span>}
                {!user.uid ?<NavLink to="/login">Login</NavLink> : <button onClick={logOut}>Log Out</button>}
            </nav>
        </div>
    );
};

export default Header;