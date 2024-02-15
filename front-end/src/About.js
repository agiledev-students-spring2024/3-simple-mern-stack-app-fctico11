import React from 'react';
//import './About.css';
//import me from 'front-end/public/asset/me.png'; // Path to NFT image


/**
 * A React component that represents the About page of the app.
 * @returns The contents of this component, in JSX form.
 */
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <img src="/me.png" alt="NFT profile picture" />
      <p>Hello all! My name is Fran. I'm in my last semester at NYU, 
        and very excited to be taking Agile! A little bit about me, 
        I'm Costa Rican and love playing soccer in my free time.
        My favorite team is Real Madrid and my current favorite player is Rodyrgo. You can often find me at a local pub supporting them on Sundays. I also have a passion for working out and
        enjoy all outdoor-type activities. Side note, Christopher Nolan 
        movies over everything!
         </p>
      <p>A big reason I chose to study CS is my fascination with crypto and blockchain technology.
        I believe this tech has the potential to revolutionize the way we think about financial systems and data integrity.
        In fact, the image you see here is an NFT from the Tensorian collection minted on the Solana network.
        I believe in the innovations of crypto to restore some power to the individual through
        taking away control from centralized entities like banks and governments. I hope to somehow contribute
        to the field when I graduate. If you ever want to talk crypto, you can find me on discord @fac322!
        
      </p>
    </div>
  );
};

export default About;
