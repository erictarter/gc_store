import React, { useState, useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from '../context/AppContext';
import App from '../../App';

export const NavLarge1 = () => {
  const AppContext = useContext(Context);

  const showNumber = useSpring({
    opacity: AppContext.cartItems.length !== 0 ? 1 : 0
  });

  const displayCart = () => {
    AppContext.setDarkBg(!AppContext.darkBg);
    AppContext.setShowCart(!AppContext.showCart);
  };

  const displayLogin = () => {
    AppContext.setDarkBg(!AppContext.darkBg);
    AppContext.setShowLogin(!AppContext.showLogin);
  };

  return (
    <div className='nav-lg-1-container'>
      <div className='socials-nav'>
        <i className='fab fa-twitter nav-i'></i>
        <i className='fab fa-facebook-f nav-i'></i>
        <i className='fab fa-instagram nav-i'></i>
        <span className='nav-logo'>Limited designer sunglasses</span>
      </div>
      <div className='store-nav'>
        <i class='fas fa-gift nav-i'></i>
        <i
          onClick={() => {
            AppContext.setShowSearch(!AppContext.showSearch);
          }}
          class='fas fa-search nav-i'
        ></i>
        <i onClick={displayLogin} class='far fa-user nav-i'></i>
        <i class='fas fa-heart nav-i'></i>

        <i onClick={displayCart} class='fas fa-shopping-cart nav-i'>
          <animated.span style={showNumber} className='items-in-cart-lg'>
            {AppContext.cartItems.length}
          </animated.span>
        </i>
      </div>
    </div>
  );
};

export default NavLarge1;
