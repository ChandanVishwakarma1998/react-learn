import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LightDarkMode from './component/light-dark-mode'
import Accordian from'./component/accrodian'
import RandomColor from './component/random-color-generator'
 import TreeView from './component/tree-view'
 import menus from "./component/tree-view/data";

import './App.css'

function App() {
 

  const {loading , enableFlags} = useContext(FeatureFlagsContext)
  const componentsToRender = [
    
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    
     {key:"showRandomColorGenerator",
       component: <RandomColor/>
     },
     {key:"showAccrodian" ,
      component: <Accordian/>
    },
   
   {
    key:"showTreeView" ,
     component: <TreeView  menus={menus}/>
  }
    
]
 
    const checkEnableFlag = (getCurrentKey) => {
   return enableFlags[getCurrentKey]
    } 

  return (
   <div>
    <h1>Feature Flags</h1>
  {componentsToRender.map((componentItem ,i) =>
   checkEnableFlag(componentItem.key) ?  <div key={i}> {componentItem.component} </div>: null
 )}

   </div>
  )
}

export default App