import React from 'react';

const Navbar = () => {
  const handleHamburgerClick = e => {
    if (e.target.classList.contains('bar')) {
      if (
        e.target.parentElement.parentElement.classList.contains('responsive')
      ) {
        e.target.parentElement.parentElement.classList.remove('responsive');
        document.body.style.overflow = 'auto';
      } else {
        e.target.parentElement.parentElement.classList.add('responsive');
        document.body.style.overflow = 'hidden';
      }
    } else if (e.target.classList.contains('icon')) {
      if (e.target.parentElement.classList.contains('responsive')) {
        e.target.parentElement.classList.remove('responsive');
        document.body.style.overflow = 'auto';
      } else {
        e.target.parentElement.classList.add('responsive');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  const handleLinkClick = e => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
      e.target.parentElement.parentElement.classList.remove('responsive');
    }
  };

  return (
    <nav id='navbar'>
      <ul className='navbar-items'>
        <li className='navbar-item'>
          <a href='#splash' className='nav-link' onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#about-book' className='nav-link' onClick={handleLinkClick}>
            About The Book
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#why-book' className='nav-link' onClick={handleLinkClick}>
            Why This Book?
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#about-author' className='nav-link' onClick={handleLinkClick}>
            About The Author
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#buy-book' className='nav-link' onClick={handleLinkClick}>
            Buy Book
          </a>
        </li>
        <div className='icon' id='menubtn' onClick={handleHamburgerClick}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
