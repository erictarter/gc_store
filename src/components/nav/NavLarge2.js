import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export const NavLarge2 = () => {
  const [showShop, setShowShop] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const showShopAn = useSpring({
    opacity: showShop ? 1 : 0,
    // zIndex: showShop ? '1' : '0'
    display: showShop ? 'flex' : 'none'
  });
  const showBrandAn = useSpring({
    opacity: showBrand ? 1 : 0,
    // zIndex: showBrand ? '1' : '0'
    display: showBrand ? 'block' : 'none'
  });

  return (
    <div>
      <div className='nav-lg-2-container'>
        <div className='shop-dropdown nav-lg-item'>
          Shop
          <span className='dropdown'>
            <i
              onMouseEnter={() => {
                setShowShop(true);
                setShowBrand(false);
              }}
              class='fas fa-angle-down'
            ></i>
          </span>
        </div>
        <div className='brand-dropdown nav-lg-item'>
          Brand
          <span className='dropdown'>
            <i
              onMouseEnter={() => {
                setShowBrand(true);
                setShowShop(false);
              }}
              class='fas fa-angle-down'
            ></i>
          </span>
        </div>
        <div className='contact nav-lg-item'>Contact</div>
        <div
          style={{
            background: 'rgb(255, 100, 200)',
            color: '#fff',
            padding: '.8rem .4rem',
            width: '4rem',
            textAlign: 'center'
          }}
          className='brand-logo nav-lg-item'
        >
          GC
        </div>
        <div className='loyality nav-lg-item'>Loyalty</div>
      </div>
      <animated.div
        style={showShopAn}
        className='shop-menu'
        onMouseLeave={() => {
          setShowShop(false);
        }}
      >
        <div className='dd-sect'>
          <h3>Sunglasses</h3>
          <h5>Stainless Steel</h5>
          <h5>Eco friendly</h5>
          <h5>For Kids</h5>
        </div>
        <div className='dd-sect'>
          <h3>Favorites</h3>
          <h5>Spring</h5>
          <h5>Summer</h5>
          <h5>Shop</h5>
        </div>
        <div className='dd-sect'>
          <h3>Sales</h3>
          <h5>Best Sellers</h5>
          <h5>Incoming Products</h5>
          <h5>Gifts</h5>
        </div>
        <div className='dd-sect'>
          <h3>Extra</h3>
          <h5>100% Satisfaction</h5>
          <h5>Connect with us</h5>
          <h5>More</h5>
        </div>
        <div style={{ border: 'none' }} className='dd-sect'>
          <h3>Specialty</h3>
          <h5>Customize</h5>
          <h5>Fast Shipping</h5>
          <h5>Order Now</h5>
        </div>
      </animated.div>
      <animated.div
        onMouseLeave={() => {
          setShowBrand(false);
        }}
        style={showBrandAn}
        className='brand-menu'
      >
        <h2>Brand</h2>
        <h5>Our Story</h5>
        <h5>Get to know us</h5>
        <h5>Vip Rewards</h5>
        <h5>Our Blog</h5>
        <h5>Members Blog</h5>
        <h5>Submit your story</h5>
        <h5>2020 giving report</h5>
      </animated.div>
    </div>
  );
};

export default NavLarge2;
