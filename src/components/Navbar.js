import React from 'react';
import { Link } from "react-router-dom"

import SearchField from './SearchField';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="brand-name">
                <Link to="/">
                    <i className="fa fa-bars"></i>
                    <span><i className="fa fa-youtube-square"></i> Youtube</span>
                </Link>
            </div>
            <SearchField />

            <ul className="navbar-items">
                <li className="navbar-link"><Link to="/login">Sign in</Link></li>
                <li className="navbar-link"><Link to="/register">Sign up</Link></li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;