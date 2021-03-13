import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const SearchLg = () => {
  const AppContext = useContext(Context);
  const searchAn = useSpring({
    opacity: AppContext.showSearch ? 1 : 0,
    display: AppContext.showSearch ? 'block' : 'none'
  });

  return (
    <animated.div style={searchAn} className='search-container'>
      <i
        onClick={() => {
          AppContext.setShowSearch(false);
        }}
        class='fas fa-times close'
      ></i>
      <h1>Search</h1>
      <div className='search'>
        <i className='fas fa-search search-i'></i>
        <input type='text' placeholder='What are you looking for?' />
      </div>
    </animated.div>
  );
};
export default SearchLg;
