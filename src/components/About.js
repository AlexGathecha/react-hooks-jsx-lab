import React from 'react';
import myImage from '../path/to/your/image.jpg'; // Import your image

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Your content here</p>
      <img src={myImage} alt="I made this" />
    </div>
  );
};

export default About;
