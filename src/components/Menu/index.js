import React from 'react';
import LeftMenu from './LeftMenu';

import './index.css';


function Menu(props) {
  return (
    <header className={props.className + " menu yellow-color"}>
      <LeftMenu />
      <div className="">teste</div>
    </header>
  );
}

export default Menu;