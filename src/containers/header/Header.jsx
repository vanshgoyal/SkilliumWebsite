import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import vr_bot1 from '../../assets/vr_bot1.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to the new era of learning with</h1>
      <h1 className='gradient__text2'>Skillium Labs</h1>
      <p>We are here to disrupt the conventional way of teaching in schools. Game based learning is the future and we are here providing a solution.</p>

     {/*  <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={vr_bot1} />
    </div>
  </div>
);

export default Header;