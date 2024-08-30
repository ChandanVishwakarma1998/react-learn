import React , {useState} from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'


function MenuItem({ item }) {
    const [displayCurrentChild, setDisplayCurrentChild] = useState({})  

    function handleToggleChildren(getCurrentlabel) {
      setDisplayCurrentChild({
        ...displayCurrentChild,
        [getCurrentlabel]: !displayCurrentChild[getCurrentlabel],
      });
    }
  
    
    // console.log(displayCurrentChild);
  return (
    <li className='py-1'>
        <div className='flex items-center gap-5  cursor-pointer text-white text-md
        '>
          <p>{ item.label }</p>
          {item && item.children && item.children.length ?  (
              <span onClick={() => handleToggleChildren(item.label)}>
                {displayCurrentChild[item.label] ? 
                <FaMinus 
                color="#fff"
                size={20}/>
                    :
                 <FaPlus 
                color="#fff"
                 size={20}/>}
              </span>

          ) 
          : null}
        </div>
        {item && item.children && item.children.length > 0 &&  displayCurrentChild[item.label] ? 
       <MenuList list ={item.children} />
      : null}
    </li>
  )
}

export default MenuItem