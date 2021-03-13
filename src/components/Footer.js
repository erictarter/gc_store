import React from 'react';

export const Footer = () => {
  let year = new Date().getUTCFullYear();

  return <div className='footer'>erictarter {year}</div>;
};
export default Footer;
