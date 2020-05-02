import React from 'react';

const Splash = () => {
  return (
    <section id='splash'>
      <div className='img-container'>
        <img
          src={require('../img/nbtbook.png')}
          alt='Next Best Thing Cover Page'
        />
      </div>
      <div className='commentary'>
        <h1>
          Want to make the <strong>Next Big Thing</strong>?
        </h1>
        <p>
          Well look no further. This book, this piece of artwork, is everything
          you will need to enjoy the satisfaction (and profits of) creating the
          Next Big Thing.
        </p>
      </div>
    </section>
  );
};

export default Splash;
