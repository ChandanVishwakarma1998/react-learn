import React, { useState } from 'react'


function SingleTab( {tabs} ) {
const [currentTabIndex, setCurrentTabIndex] = useState(0)  

function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex)
  
}
return (
    <div  className='wrapper' >
        <div className="heading">
            {tabs.map((tabItem , index) =>  (
            <div className={`tabs-item ${currentTabIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
             key={index}
            >
                <span className='label'>{tabItem.label}</span>
            </div>
            ))}
        </div>
        <div className="body" style={{color:"black"}}>
         {tabs[currentTabIndex] && tabs[currentTabIndex]. content}
        </div>
    </div>
  )
}

export default SingleTab


