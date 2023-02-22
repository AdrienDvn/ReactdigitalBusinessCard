import React from 'react';
import logo from '/Users/adrien/code/BobZiroll/digitalbusinesscard/src/Adri profil photo face copie.png';

export default function Info() {
  return (
    <info>
      <img src={logo} alt="" className="info--picture"/>

      <h4>Adrien DAVIN</h4>
      <h5 className='info--job'>Front-End Developper</h5>
      <p>adriendavin@hotmail.fr</p>
        <div className='info--buttons'>
          <button class="btn btn-gradient1">
          <i class="fa fa-puzzle-piece"></i> Portfolio
          </button>



          <button class="btn btn-gradient2">
          <span class="fa fa-linkedin"></span> LinkedIn
          </button>
        </div>
    </info>
  );
}
