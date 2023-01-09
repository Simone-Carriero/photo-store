import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <NavLink
          to='/'
          className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
          <h2>Pic Some</h2>
        </NavLink>
        <NavLink
          to='/favorite'
          className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
          <h2>Favorite</h2>
        </NavLink>
        <NavLink
          to='/cart'
          className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
          <span>
            <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
