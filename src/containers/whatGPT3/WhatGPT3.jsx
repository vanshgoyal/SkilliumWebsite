import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Skillium Labs" text="We work on increasing school students' exposure toward overall development by allowing them to explore a plethora of domains. To achieve this goal, we will set up VR-based labs in schools. The company will also gather data from the interactions in the game-based curriculum to analyze the students' interests and provide them with customized recommendations for career paths they might want to pursue" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Stimulating life skills education through game-based learning.</h1>
     {/*  <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Game Based Curriculum" text=" We will facilitate a game-based curriculum for various life skills, including Financial Literacy, Legal Rights and other skills essential for the overall development of a student" />
      <Feature title="Knowledgebase" text="The platform will be designed to provide a comprehensive learning experience that equips students with practical life skills and career guidance" />
      <Feature title="Education" text="The platform utilizes virtual reality technology to create a stimulating and engaging learning environment that enables students to learn about various life skills" />
    </div>
  </div>
);

export default WhatGPT3;