import React, { useContext, useState } from 'react';
import { Context } from '../context/AppContext';
import { animated, useSpring } from 'react-spring';

export const Nav2Sm = () => {
  const AppContext = useContext(Context);

  const [shopState, setShopState] = useState(false);
  const [brandState, setBrandState] = useState(false);

  const showShop = useSpring({
    opacity: shopState ? 1 : 0
  });

  const showBrand = useSpring({
    opacity: brandState ? 1 : 0
  });

  const showNavSm = useSpring({
    right: AppContext.showNavSm ? '0%' : '100%'
  });

  const displayLogin = () => {
    AppContext.setDarkBg(!AppContext.darkBg);
    AppContext.setShowLogin(!AppContext.showLogin);
  };

  return (
    <animated.div style={showNavSm} className='nav-2-sm-container'>
      <animated.div style={showShop} className='shop-slide'>
        <div className='shop-section'>
          <div className='shop-item-sm'>Stainless Steel</div>
          <div className='shop-item-sm'>Eco Friendly</div>
          <div className='shop-item-sm'>For Kids</div>
        </div>
        <div className='shop-section'>
          <div className='shop-item-sm'>Spring</div>
          <div className='shop-item-sm'>Summer</div>
          <div className='shop-item-sm'>Shop</div>
        </div>
        <div className='shop-section'>
          <div className='shop-item-sm'>Best Sellers</div>
          <div className='shop-item-sm'>Incoming Products</div>
          <div className='shop-item-sm'>Gifts</div>
        </div>
        <div className='shop-section'>
          <div className='shop-item-sm'>100% Satisfaction</div>
          <div className='shop-item-sm'>Connect with us</div>
          <div className='shop-item-sm'>More</div>
        </div>
      </animated.div>
      <animated.div style={showBrand} className='brand-slide'>
        <div className='brand-container-sm'>
          <div className='brand-item-sm'>Our Story</div>
          <div className='brand-item-sm'>Get to Know us</div>
          <div className='brand-item-sm'>Our Blog</div>
          <div className='brand-item-sm'>Vip rewards</div>
          <div className='brand-item-sm'>Members</div>
          <div className='brand-item-sm'>Submit your story</div>
          <div className='brand-item-sm'>2020 giving report</div>
        </div>
      </animated.div>
      <animated.div
        onClick={() => {
          setShopState(!shopState);
          setBrandState(false);
        }}
        style={{ marginTop: '1.4rem' }}
        className='shop-sm ni-sm'
      >
        Shop
      </animated.div>
      <div
        onClick={() => {
          setBrandState(!brandState);
          setShopState(false);
        }}
        className='brand-sm ni-sm'
      >
        Brand
      </div>
      <div className='contact-sm ni-sm'>Contact</div>
      <div className='loyalty ni-sm'>Loyalty</div>
      <div className='login-sm ni-sm'>
        <i onClick={displayLogin} class='far fa-user'></i>
      </div>
    </animated.div>
  );
};

export default Nav2Sm;
