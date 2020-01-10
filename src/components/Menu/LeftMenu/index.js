import React from "react";
import "./index.css";

function LeftMenu() {
  return (
    <div className="left-menu">
      <div><p>JOGAR</p></div>
      <div>
        <ul className="left-list">
          <li>INÍCIO</li>
          <li>PERFIL</li>
          <li>COLEÇÃO</li>
          <li>TFT</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
