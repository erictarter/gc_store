import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
export const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase-container'></div>
      <h2>Find Your Sunglasses</h2>

      <Link
        activeClass='active'
        to='shopping-container'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='showcase-btn'>Shop Now</button>
      </Link>
    </div>
  );
};
export default Showcase;
