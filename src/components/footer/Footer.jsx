import React from 'react'


import logo from '../../assets/logo.png'
import text from '../../assets/Group.svg'
import  instagram  from '../../assets/Group 469.svg'
import vk from '../../assets/vkontakte.svg'
import facebook from '../../assets/Group 465.svg'
import ok from '../../assets/ok.svg'
import { BsTelephone } from "react-icons/bs";

import './footer.css'


const Footer = () => {
  return (
    <div className='app-footer'>
      <div className='footer-logo'>
      <img src={logo}/>
<img src={text} alt="" />

      </div>

<ul className='list'>
   <li>О компании</li>
   <li>Контакты</li>
   <li>Вакансии</li>
   <li>Статьи</li>
   <li>Политика обработки персональных данных</li>
</ul>
<a href=""><img src={instagram} alt="" /> </a>
<a href=""><img src={vk} alt="" /></a>
<a href=""><img src={facebook} alt="" /></a>
<a href=""><img src={ok} alt="" /></a>
<p><BsTelephone /> 8 800 777 33 33 </p>

    </div>
  )
}


export default Footer