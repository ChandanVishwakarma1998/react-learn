import React from 'react'
import MenuItem from './MenuItem'


function MenuList({list=[]}) {
  return (
   <ul className=' list-none p-5  my-0 '
   >
    {list && list.length ? 
    list.map((listItem , i ) => <MenuItem  key= {i}
    item={listItem} 
    /> ) 
    : null}

   </ul>
  )
}

export default MenuList