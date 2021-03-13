import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const AddItemMsg = () => {
  const AppContext = useContext(Context);

  const showToast = useSpring({
    right: AppContext.showAddMsg ? '1rem' : '-15rem'
  });

  return AppContext.cartItems.length < 7 ? (
    <animated.div style={showToast} className='add-item-msg'>
      Item Added to Cart!
    </animated.div>
  ) : (
    <animated.div style={showToast} className='add-item-msg'>
      Cart is Full!
    </animated.div>
  );
};

export default AddItemMsg;
