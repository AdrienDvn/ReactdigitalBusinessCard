import React from 'react';
import logo from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/logo192.png';

export default function Info() {
  return (
    <info>
      <img src={logo} alt="" className="info--picture"/>
      <p>photo</p>
      <p>job title</p>
      <p>mail</p>
      <h5>buttons</h5>
    </info>
  );
}
