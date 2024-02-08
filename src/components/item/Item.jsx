import React from 'react'
import './item.css'
import { items} from '../data/Data';

const Item = () => {
   
  return (
   <>
   
    <div className='app-item' id='item' >
{items.map((val,index)=>(
   <div className='chips' key={index}>
      <div className='icon'>
{val.cart}
{val.heart}
</div>

<img src={val.cover} alt="" />
<span>{val.sale}</span>
<div className='price'>
<div>
   {val.price}
   <h4>{val.paragrapgh}</h4>
   </div>

<div>
   {val.secondprice}
   <h4>{val.secondparagrph}</h4>
   </div>
</div>
<p>{val.description}</p>
<i className='star'>{val.star}</i>
<button>В корзину</button>
</div>

))}

    </div>

</>
  )
}

export default Item