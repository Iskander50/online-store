import React, { useState } from 'react'
import './navbar.css'

import { CiHeart } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'

import { IoIosArrowDown } from "react-icons/io";
import Search from './Search';
import Catalog from '../catalog/Catalog';
import { MdCloseFullscreen } from 'react-icons/md';


const Navbar = () => {
const [toggleMenu, setToggleMenu]=useState(false)
return (
 <div className='app-nav'>
  <div className='wrapper'>
      <img src={logo} alt="logo" /> 
      <p> Северяночка </p>
      <Catalog/>
      <Search/>
    <div className='icon'>
      <p><CiHeart />Избранное</p>
 <p><BsBoxSeam />Заказы</p>
      </div>
  <img src={avatar} alt="avatar" />  
   <p>Алексей </p>  
      <div className='small-screen-avatar'>
<IoIosArrowDown  className='arrow' onClick={()=>setToggleMenu(true)}/>
{toggleMenu &&(
<div className='close-avatar'>
  <MdCloseFullscreen fontSize={25} className='overlay-close-avatar' onClick={()=>setToggleMenu(false)}/>
<ul className='overlay-list-avatar'>
<li>Профиль<IoIosArrowDown/></li>
<li>Выйти<IoIosArrowDown/> </li>
</ul>
</div>
       )}                    
 </div>
</div>
    </div>
  )
}

export default Navbar