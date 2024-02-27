import React from "react";
import '../Estilos-Sass/contlateral.scss';

function ContLateral(){
  return(
    <div className="cont-lateral">
      <h1><span className="toq">Dev</span>Challenges.io</h1>
      <ul>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spaces</li>
        <li>Buttons</li>
        <li className="active-li">Inputs</li>
        <li>Grid</li>
      </ul>
    </div>

  );
}

export default ContLateral;