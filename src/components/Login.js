import React, { useState, useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Login = () => {
  const AppContext = useContext(Context);
  const loginAn = useSpring({
    opacity: AppContext.showLogin ? 1 : 0,
    display: AppContext.showLogin ? 'flex' : 'none'
  });

  return (
    <animated.div style={loginAn} className='login-container'>
      <p style={{ fontSize: '2.4rem', marginTop: '.5rem' }}>Login</p>
      <div className='sign-fb'>
        <div>Sign in with Facebook</div>
        <div
          style={{
            borderLeft: '1px solid #ddd',
            paddingLeft: '.3rem',
            width: '1rem',
            textAlign: 'center'
          }}
        >
          <i class='fab fa-facebook-f'></i>
        </div>
      </div>
      <div className='sign-am'>
        <div>Sign in with Amazon</div>
        <div
          style={{
            borderLeft: '1px solid #ddd',
            paddingLeft: '.3rem',
            width: '1rem'
          }}
        >
          <i class='fab fa-amazon'></i>
        </div>
      </div>
      <div className='sign-goog'>
        <div>Sign in with Google</div>
        <div
          style={{
            borderLeft: '1px solid #ddd',
            paddingLeft: '.3rem',
            width: '1rem'
          }}
        >
          <i class='fab fa-google'></i>
        </div>
      </div>
      <div className='divider'>
        <div className='half-line'></div>
        <div className='or'>Or</div>
        <div className='half-line'></div>
      </div>
      <form className='login-form-container' action=''>
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <button className='login-btn'>Login</button>
      </form>
      <div className='login-bottom'>
        <div className='forgot'>Forgot password?</div>
        <div
          onClick={() => {
            AppContext.setShowLogin(false);
            AppContext.setShowCreateAccount(true);
          }}
          className='create-account-btn'
        >
          Create Account
        </div>
      </div>
    </animated.div>
  );
};

export default Login;
