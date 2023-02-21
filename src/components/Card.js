import React from 'react';
//import the card.css HERE;
import Header from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Header.js';
import Contact from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Contact.js';
import Main from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Main.js';
import Footer from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/components/Footer.js';

export default function Card() {
  return (
    <div className = "card">
      <Header />
      <Contact />
      <Main />
      <Footer />
    </div>
  );
}
