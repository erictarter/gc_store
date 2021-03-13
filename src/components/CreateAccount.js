import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const CreateAccount = () => {
  const AppContext = useContext(Context);
  const createFormAn = useSpring({
    opacity: AppContext.showCreateAccount ? 1 : 0,
    display: AppContext.showCreateAccount ? 'block' : 'none'
  });

  return (
    <animated.div style={createFormAn} className='create-account'>
      <h1>Create Account</h1>
      <form className='create-account-form' action=''>
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <button className='create-btn'>Create Account</button>
      </form>
    </animated.div>
  );
};
export default CreateAccount;
