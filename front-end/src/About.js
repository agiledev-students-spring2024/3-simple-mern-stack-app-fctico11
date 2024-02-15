import React from 'react';
//import './About.css';
//import me from 'front-end/public/asset/me.png'; // Path to NFT image


/**
 * A React component that represents the About page of the app.
 * @returns The contents of this component, in JSX form.
 */
const About = () => {
const imageUrl = "http://localhost:3000/asset/me.png";
  return (
    <div className="about">
      <h1>About Us</h1>
      <img src={imageUrl} alt="NFT profile picture" />
      <p>Hello all! My name is Fran</p>
      <p></p>
    </div>
  );
};

export default About;
