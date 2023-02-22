import React from 'react';
import Info from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Info.js';
import About from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/About.js';
import Interests from './Interests.js';
import Footer from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Footer.js';


//import the card.css HERE;

export default function Card() {
  return (
    <card className = "card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </card>
  );
}
