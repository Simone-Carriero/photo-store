import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useGlobalContext();

  const isCartFilled = cartItems.length ? (
    <i className='ri-shopping-cart-fill ri-fw ri-2x'></i>
  ) : (
    <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
  );

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <NavLink
          to='/'
          className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
          <h2>Pic Some</h2>
        </NavLink>
        <div className='nav__block'>
          <NavLink
            to='/favorite'
            className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
            <h2>Favorite</h2>
          </NavLink>
          <NavLink
            to='/cart'
            className={`nav__link ${({ isActive }) => isActive && 'active'}`}>
            <span>{isCartFilled}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
