import React from 'react';

const AboutAuthor = () => {
  return (
    <section id='about-author'>
      <div className='about'>
        <h1>About The Author</h1>
        <p>
          Robert Kuzmacaw is a world-renown, billionaire philanthropist who has
          spent much of his later life teaching and mentoring young entrepreneurs
          in the methods, mindsets, and practices of successful entrepreneurs
          such as himself. After decades of entrepenurialship and successful
          business deals, Robert realized that despite all the resources for
          entrenpreurs, many simply do not know how to utitilze them correctly.
          He now leads the{' '}
          <em>Kuzmacaw Foundation for Aspiring Entrepreneurs</em>, where he
          spends most of his time teaching many of the lessons in this book
          alongside much, much more.
        </p>
      </div>

      <div className='social-media-links'>
        <div className='social-media-link'>
          <a href='https://www.facebook.com'>
            {' '}
            <i className='fab fa-facebook fa-5x'></i>
          </a>
        </div>
        <div className='social-media-link'>
          <a href='https://www.twitter.com'>
            {' '}
            <i className='fab fa-twitter fa-5x'></i>
          </a>
        </div>
        <div className='social-media-link'>
          <a href='https://www.instagram.com'>
            {' '}
            <i className='fab fa-instagram fa-5x'></i>
          </a>
        </div>
      </div>

      <div className='author-bio-pic'>
        <img src={require('../img/author.png')} alt='' id='author-pic' />
      </div>
    </section>
  );
};

export default AboutAuthor;
