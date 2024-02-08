import React from 'react'
import'./catalog.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCloseFullscreen } from 'react-icons/md';


const Catalog = () => {
  const [toggleMenu,setToggleMenu] = React.useState(false)
  return (
    <div className='catalog'>

      

<div className='small-screen'>
<button className='btn'> <GiHamburgerMenu  fontSize={22} onClick={()=> setToggleMenu(true)} className='menu'/>Catalog</button>

{toggleMenu &&(
<div className='close'>
<MdCloseFullscreen fontSize={25} className='overlay-close' onClick={()=> setToggleMenu(false)}/>

<div className='overlay-list'>
<li>Хлебобулочные изделия</li>
<li>Молоко, сыр, яйцо</li>
<li>Фрукты и овощи</li>
<li>Замороженные продукты</li>
<li>Напитки</li>
<li>Кондитерские изделия</li>
<li>Чай, кофе</li>
<li>Бакалея</li>
<li>Здоровое питание</li>
<li>Зоотовары</li>
<li>Детское питание</li>
<li>Мясо, птица, колбаса</li> 
<li>Непродовольственные товары</li> 
   
</div>
</div>
)}
</div>
     
    </div>
  )
}

export default Catalog