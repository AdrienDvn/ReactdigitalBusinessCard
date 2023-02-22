import React from 'react';
import logo from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/logo192.png';

export default function Info() {
  return (
    <info>
      <img src={logo} alt="" className="info--picture"/>

      <h4>Adrien DAVIN</h4>
      <h5>Front-End Developper</h5>
      <p>adriendavin@hotmail.fr</p>
        <div className='info--buttons'>
          <button type="button">Portfolio</button>
          <button type="button">LinkedIn</button>
        </div>
    </info>
  );
}
