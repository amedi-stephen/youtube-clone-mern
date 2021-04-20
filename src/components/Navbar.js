import React from 'react';
import SearchField from './SearchField';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="brand-name">
                <p>
                    <i className="fa fa-bars"></i>
                    <span>Logo</span>
                </p>
            </div>
            <SearchField />

            <ul className="navbar-items">
                <li className="navbar-link">Sign in</li>
                <li className="navbar-link">Sign up </li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;