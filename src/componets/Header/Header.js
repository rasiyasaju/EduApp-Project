import React from 'react';
import logo from '../../Asset/Images/logo.png';
//import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  const nav_titles=[{
    path:'/',display:'Home'
  },
  {
    path:'/services',display:'Services'
  },
  {
    path:'/courses',display:'Courses'
  },
  {
    path:'/about',display:'About Us'
  },
 
  ]
  return (
    <header className='header'>
<div className="container">
    <div className="nav_container">

<div className="logo">
  <div className="logo-img">
    <img src={logo} alt=""/>
    </div>
    <h2>MathTech</h2>

</div>
<div className="navigation">
  <ul className="menu">
{
  nav_titles.map((item)=>(
    <li className='nav_item'><link to={item.path}>{item.display}</link></li>
  ))
}
  </ul>
</div>


</div>

</div>



    </header>

  )
}

export default Header
