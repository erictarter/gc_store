import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import NavLarge1 from '../nav/NavLarge1';
import NavLarge2 from '../nav/NavLarge2';
import NavSmall from '../nav/NavSmall';
import Nav2Sm from '../nav/Nav2Sm';
import Showcase from '../Showcase';
import ShoppingCart from '../ShoppingCart';
import Login from '../Login';
import CreateAccount from '../CreateAccount';
import SearchLg from '../SearchLg';
import Glasses from '../Glasses';
import AddItemMsg from '../AddItemMsg';
import Footer from '../Footer';
import { Context } from '../context/AppContext';

export const Wrapper = () => {
  const AppContext = useContext(Context);

  const useDark = useSpring({
    display: AppContext.darkBg ? 'block' : 'none'
  });

  return (
    <div>
      <NavLarge1></NavLarge1>
      <NavLarge2></NavLarge2>
      <NavSmall></NavSmall>
      <Nav2Sm></Nav2Sm>
      <SearchLg></SearchLg>
      <animated.div
        style={useDark}
        className='dark'
        onClick={() => {
          AppContext.setDarkBg(false);
          AppContext.setShowCart(false);
          AppContext.setShowLogin(false);
          AppContext.setShowCreateAccount(false);
        }}
      ></animated.div>
      <Login></Login>
      <CreateAccount></CreateAccount>
      <Showcase></Showcase>
      <ShoppingCart></ShoppingCart>
      <Glasses></Glasses>
      <AddItemMsg></AddItemMsg>
      <Footer></Footer>
    </div>
  );
};
export default Wrapper;

// NO POPOUT ITEM MOBILE
// NO SHOWCASE IMAGE MOBILE

// PROPS PROJ -
// MESSAGE APP
// FIRST SCREEN SET NAME - CONTINUE
// NEXT SCREEN ADD MESSAGE - BACK BUTTON  - MESSAGE CONTAINER
