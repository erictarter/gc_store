import React, { useContext } from 'react';
import { Context } from '../components/context/AppContext';

export const ItemPopout = () => {
  const AppContext = useContext(Context);

  return (
    <div className='item-popout'>
      <i
        onClick={() => {
          AppContext.setShowItemPop(false);
        }}
        className='fas fa-times exit-item'
      ></i>
      <img src={AppContext.itemPop.popImg} className='popout-img'></img>
      <div className='pop-item-title'>{AppContext.itemPop.popTitle}</div>
      <div className='pop-item-price'>${AppContext.itemPop.popPrice}</div>
      <i
        onClick={() => {
          AppContext.setShowAddMsg(true);

          if (AppContext.cartItems.length === 0) {
            AppContext.setCartItems([
              {
                cartItemImg: AppContext.itemPop.popImg,
                cartItemTitle: AppContext.itemPop.popTitle,
                cartItemPrice: AppContext.itemPop.popPrice
              }
            ]);
            console.log(AppContext.cartItems);
          } else {
            AppContext.setCartItems([
              ...AppContext.cartItems,
              {
                cartItemImg: AppContext.itemPop.popImg,
                cartItemTitle: AppContext.itemPop.popTitle,
                cartItemPrice: AppContext.itemPop.popPrice
              }
            ]);
            console.log(AppContext.cartItems);
          }
        }}
        className='fas fa-cart-plus popout-cart'
      ></i>
    </div>
  );
};
export default ItemPopout;
