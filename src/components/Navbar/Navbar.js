import React, { useState } from 'react';
import TemporaryDrawer from '../Drawer/Drawer';
import "./Navbar.css";

const Navbar = () => {
  const [showDrawer,setShowDrawer]= useState(false);

  window.addEventListener('resize',()=>{
    // console.log(window.innerWidth)
    if(window.innerWidth<800){
      setShowDrawer(true);
    }
    else{
      setShowDrawer(false);
    }
  })


  return (
    <nav id='navbar'>
      <img src='https://spaalon.com/images/SpaalonLogoRed.jpg' />
      {
        showDrawer ? <ul >
          <li><TemporaryDrawer /></li>
          <li><i className="fa-solid fa-right-to-bracket"></i></li>
          <li><i className="fa-solid fa-bag-shopping"></i></li>
        </ul> : <ul >
          <li>Hair</li>
          <li>Body</li>
          <li>Spa</li>
          <li>Nail</li>
          <li>Face</li>
          <li><i className="fa-solid fa-right-to-bracket"></i></li>
          <li><i className="fa-solid fa-bag-shopping"></i></li>
        </ul>
      }

    </nav>
  )
}

export default Navbar