import React from 'react';

const Footer = () => {
  const date = new Date(),
    year = date.getFullYear();
  return (
    <footer id='footer'>
      <p>Next Big Thing</p>
      <p>
        Copyright &copy; <span id='year'>{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
