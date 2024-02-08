import React from 'react'
import { BsCart4 } from "react-icons/bs";
import Item from '../item/Item';
import { items } from '../data/Data';

const Cart = () => {
  return (
    <div>
<p> <BsCart4 />Корзина</p>


{items}
<Item img='' title='title' description='description' />
    </div>
  )
}

export default Cart