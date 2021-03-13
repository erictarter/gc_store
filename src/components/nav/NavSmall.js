import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from '../context/AppContext';

export const NavSmall = () => {
  const [openNav, setOpenNav] = useState(false);

  window.addEventListener('scroll', () => {
    setOpenNav(false);
    AppContext.setShowNavSm(false);
  });

  const AppContext = useContext(Context);

  const showNumber = useSpring({
    opacity: AppContext.cartItems.length > 0 ? 1 : 0,
    display: AppContext.cartItems.length > 0 ? 'inline' : 'none'
  });

  return (
    <div className='sm-nav'>
      <div
        style={{ borderRight: 'none' }}
        onClick={() => {
          AppContext.setShowNavSm(!AppContext.showNavSm);
          setOpenNav(!openNav);
        }}
        className='ham sm-nav-item'
      >
        {openNav ? <i class='fas fa-times'></i> : <i class='fas fa-bars'></i>}
      </div>
      <div
        style={{
          background: '#36e5d1',
          color: '#fff',
          border: 'none'
        }}
        className='brand-sm sm-nav-item'
      >
        GC
      </div>
      <div
        onClick={() => {
          AppContext.setShowSearch(!AppContext.showSearch);
        }}
        className='search-i-sm sm-nav-item'
      >
        <i class='fas fa-search'></i>
      </div>
      <div className='heart-sm sm-nav-item'>
        <i class='fas fa-heart'></i>
      </div>
      <div
        onClick={() => {
          AppContext.setShowCart(!AppContext.showCart);
          AppContext.setDarkBg(true);
        }}
        className='cart-sm sm-nav-item'
      >
        <i class='fas fa-shopping-cart'></i>
        <animated.span style={showNumber} className='items-in-cart-sm'>
          {AppContext.cartItems.length}
        </animated.span>
      </div>
    </div>
  );
};

export default NavSmall;

// CLICK BRAND & STORE
