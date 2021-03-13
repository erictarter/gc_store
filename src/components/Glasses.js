import React, { useContext } from 'react';
import StoreData from '../json/StoreData';
import { Context } from './context/AppContext';
import { animated, useSpring } from 'react-spring';

import ItemPopout from '../components/ItemPopout';

export const Glasses = () => {
  const AppContext = useContext(Context);

  const showItem = useSpring({
    display: AppContext.showItemPop ? 'flex' : 'none',
    opacity: AppContext.showItemPop ? 1 : 0
  });

  window.addEventListener('scroll', () => {
    AppContext.setShowAddMsg(false);
    // AppContext.setShowItemPop(false);
  });

  return (
    <div id='shopping-container' className='shopping-container'>
      <animated.div className='item-popout' style={showItem}>
        <ItemPopout></ItemPopout>
      </animated.div>
      {StoreData.items.map(i => (
        <div className='shopping-item'>
          <img
            onClick={() => {
              AppContext.setShowItemPop(!AppContext.showItemPop);
              AppContext.setItemPop({
                popTitle: i.title,
                popPrice: i.price,
                popImg: i.img
              });
            }}
            className='item-picture'
            src={i.img}
            alt=''
          />
          <div className='item-title'>{i.title}</div>
          <div className='item-bottom'>
            <div className='item-price'>${i.price}</div>
            <i
              onClick={() => {
                AppContext.setShowAddMsg(true);
                AppContext.setCartIsEmpty(false);
                if (AppContext.cartItems.length === 0) {
                  AppContext.setCartItems([
                    {
                      cartItemImg: i.img,
                      cartItemTitle: i.title,
                      cartItemPrice: i.price,
                      cartItemId: 1
                    }
                  ]);
                  AppContext.setNumItems(AppContext.numItems + 1);
                  AppContext.setTotal(parseInt(i.price));
                  console.log(AppContext.total);
                } else if (AppContext.cartItems.length < 7) {
                  AppContext.setNumItems(AppContext.numItems + 1);
                  AppContext.setTotal(parseInt(AppContext.total + i.price));
                  console.log(AppContext.total);
                  AppContext.setCartItems([
                    ...AppContext.cartItems,
                    {
                      cartItemImg: i.img,
                      cartItemTitle: i.title,
                      cartItemPrice: i.price,
                      cartItemId: AppContext.cartItems.length + 1
                    }
                  ]);
                }
              }}
              class='fas fa-cart-plus item-add'
              class='fas fa-cart-plus item-add'
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glasses;
