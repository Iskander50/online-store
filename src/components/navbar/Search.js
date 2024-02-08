import React, { useState } from 'react'

const Search = () => {

const [filter, setFilter]=useState('')

const searchText=(e)=>{
  setFilter(e.target.value)
}
console.warn(filter)
  return (
<div className='search'>

  <input type="text" 
placeholder='Найти товар' 
value={filter}
onChange={searchText.bind(this)}
/>

 </div>

)

}

export default Search