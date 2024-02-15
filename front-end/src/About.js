import React from 'react';
//import './About.css';
import me from '../asset/me.png'; // Path to NFT image


/**
 * A React component that represents the About page of the app.
 * @returns The contents of this component, in JSX form.
 */
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <img src={me} alt="NFT profile picture" />
      <p>Hello all! My name is Fran</p>
      <p></p>
    </div>
  );
};

export default About;
