import React from 'react';

const AboutBook = () => {
  return (
    <section id='about-book'>
      <div className='what-can-it-do'>
        <h1>What Can This Book Do For You?</h1>
        <p>
          If you're an entrepreneur or you want to be one, this book offer's
          valuable insight into the creative process necessary to be a successful
          entrepreneur. This book will help shape your mindset from that of a
          wanna-be entrepreneur to a can do, has done entrepreneur mindset,
          enabling you to target, plan for, and achieve whatever entrepreneurial
          goal you set for yourself.
        </p>
      </div>
      <div className='creativity-flow'>
        <h3>
          <em>Let it flow, let it flow, let it flow...</em>
        </h3>
        <img
          src={require('../img/creativity-flow.png')}
          alt='Let the creativity flow'
        />
      </div>
    </section>
  );
};

export default AboutBook;
