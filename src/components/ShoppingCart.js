import React, { useState, useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from '../components/context/AppContext';

export const ShoppingCart = () => {
  const AppContext = useContext(Context);

  const showEmptyCart = useSpring({
    display: AppContext.cartIsEmpty ? 'flex' : 'none'
  });

  const cartSlideIn = useSpring({
    right: AppContext.showCart ? '0' : '-75%'
  });

  const clearCart = () => {
    AppContext.setCartItems([]);
    AppContext.setNumItems(0);
  };

  return (
    <animated.div style={cartSlideIn} className='cart-container'>
      <div className='cart-header'>
        Shopping Cart ({AppContext.numItems} items)
      </div>
      {/* IF CART IS EMPTY */}
      {AppContext.cartItems.length === 0 ? (
        <div className='empty-cart'>
          <div className='cart-icon'>
            <i className='fas fa-shopping-cart'></i>
          </div>
          <div style={{ margin: '1rem' }}>Your Cart is Empty</div>
          <div>Continue Shopping</div>
        </div>
      ) : (
        <div className='items-in-cart'>
          <div onClick={clearCart} className='clear-cart'>
            clear cart{' '}
            <i style={{ marginLeft: '7px' }} className='fas fa-trash'></i>
          </div>
          {/* PROCEED RESTART WINDOW FOR NOW */}
          <div className='total'>Total ${AppContext.total}.00</div>
          <div className='proceed'>Proceed</div>

          {AppContext.cartItems.map(i => (
            <div className='cart-item'>
              <img className='cart-item-img' src={i.cartItemImg} alt='' />
              <div className='cart-item-title'>{i.cartItemTitle}</div>
              <div className='cart-item-price'>${i.cartItemPrice}</div>
              <div
                onClick={e => {
                  let removeAmount = e.target.previousSibling.innerText.slice(
                    1,
                    e.target.previousSiblinglength
                  );
                  AppContext.setTotal(
                    AppContext.total - parseInt(removeAmount)
                  );

                  console.log(removeAmount);
                  AppContext.setNumItems(AppContext.numItems - 1);
                  AppContext.cartItems.map((i, index) => {
                    if (e.target.id == i.cartItemId) {
                      AppContext.cartItems.splice(index, 1);
                    }
                    console.log(AppContext.cartItems.length);
                    if (AppContext.cartItems.length === 0) {
                      AppContext.setCartIsEmpty(true);
                    }
                  });
                }}
                className='cart-item-remove fas fa-minus'
                id={i.cartItemId}
              ></div>
            </div>
          ))}

          <animated.div style={showEmptyCart} className='empty-cart'>
            <div className='cart-icon'>
              <i className='fas fa-shopping-cart'></i>
            </div>
            <div style={{ margin: '1rem' }}>Your Cart is Empty</div>
            <div>Continue Shopping</div>
          </animated.div>
        </div>
      )}
    </animated.div>
  );
};

export default ShoppingCart;

// REMOVING FIRST ITEM IN ARRAY REMOVES NEXT ITEMS REMOVE BUTTON??
