import { useState } from "react";
import data from './data'
import "./style.css"

function App() {
  const [selected, setSelected] = useState(null)
  const [enableMultiselection, setEnableMultiselection] = useState(false)
  const [multiple, setMultiple] = useState([])

   function handleSingleSelection (getCurrentId)  {
    setSelected(getCurrentId === selected ? null : getCurrentId  )
   } 
    
   function handleMultiSelection (getCurrentId)  {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple .indexOf(getCurrentId) ;
    if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId) ;
    else cpyMultiple.splice( findIndexOfCurrentId , 1) ;
    setMultiple (cpyMultiple)
   }
   
    return (
    
      <div className='wrapper'>
        

        <button 
        onClick={() => setEnableMultiselection(!enableMultiselection)}
        >{enableMultiselection ? "Disable Multiselect":"Enable Multiselect" }
         </button>
        <div className="accrodion">
          { data && data.length > 0 ? (
          data.map((dataItem)=> (
            <div className="Item">
              <div className="title"
               onClick={
                enableMultiselection 
                ?() => handleMultiSelection(dataItem.id)
                :() => handleSingleSelection(dataItem.id)
               }>
                <h2>{dataItem.question}</h2>
                 {/* <span>+</span> */}
              </div>
              {enableMultiselection ?
              multiple.indexOf(dataItem.id) !== -1 && (
              <div className="acc-content">{dataItem.answer}</div>
             )
             : selected === dataItem.id && (
             <div className="acc-content">{dataItem.answer}</div>
            
          ) }
          </div>

          ))
         ) : ( <div className=""> NO DATA FOUND !</div>

          )}
        </div>
    
      </div>
        )
}

export default App
