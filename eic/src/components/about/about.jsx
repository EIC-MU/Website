import React from 'react';
import styled from 'styled-components';
import './about.css';

const Heading = styled.h1`
  text-align: center;
  font-size: 60px;
  letter-spacing: 0;
  color: #000000;
  letter-spacing: -0.03rem;
  padding: 0px 5vw;
  margin-bottom: -5px;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

const LiteCard = props => {
  return (
    <div
      className="liteCard"
      style={{
        backgroundImage: `url("${props.imageUrl}")`,
        // backgroundColor: '#F6F6F6',
        backgroundColor: '#f2ca29',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: props.color,
      }}
    >
      {/*Icon*/}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

function about() {
  return (
    <div id="about">
      <h1>#About Us</h1>
      <div className="underline"></div>
      <Heading>Not just any other E-Cell</Heading>
      <div id="cards">
        <LiteCard
          title="What Are We?"
          description="It is a student-led forum dedicated to promoting the entrepreneurial ecosystem and the start-up culture on campus. Based on the belief that innovation and entrepreneurship are mutually beneficial, the cell's goal is to instil in the student community at the university an inventive and entrepreneurial mindset."
          color="#000"
        />
        <LiteCard
          title="What We Do?"
          description="the cell aspires to cultivate and encourage the entrepreneurial spirit by assisting young and gifted brains by identifying ideas and then nurture them. One of the key tasks is to give opportunities and help to students who are interested in pursuing a career in entrepreneurship. The cell always works towards assisting aspiring businesses and creative thinkers."
          color="#000"
        />
        <LiteCard
          title="Why Us?"
          description="The team managing the cell aspires to cultivate and encourage the entrepreneurial spirit by assisting young and gifted brains by identifying ideas and then nurture them. We aspire to give opportunities and help to students who are interested in pursuing a career in entrepreneurship.
          The cell always works towards assisting aspiring businesses and creative thinkers."
          color="#000"
        />
      </div>
    </div>
  );
}

export default about;
