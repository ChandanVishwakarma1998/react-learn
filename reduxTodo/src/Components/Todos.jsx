import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../Feature/todoSlice'
import edit from '../assets/edit.png'
import Save from '../assets/save.png'
import clear from '../assets/clear.png'


function Todos() {
    const todos = useSelector(state => state.todos )
    const dispatch = useDispatch()

  const [isTodoEditable, setIsTodoEditable] = useState(null)
  const [editedTodo, setEditedTodo] = useState("")

  const handleSave = (id)=>{
    if(editedTodo.trim()){
      dispatch(updateTodo({id , word: editedTodo}))
      setIsTodoEditable(null)
      setEditedTodo("")
    }
  }
  const handleEditClick = (todo) => {
    setIsTodoEditable(todo.id)
    setEditedTodo(todo.word)
  }

  
  return (
    
    <div>
      <h1 className='text-center mt-5 font-bold text-3xl'>Todos</h1>


    <ul className='list-none px-80  '>


        { todos.map((todo) => (
        <li  className="mt-4 flex rounded-xl bg-zinc-800 px-4 py-2"
        key={todo.id}>

          <div className="w-1/2 flex justify-center text-white ">
            
             {isTodoEditable ===todo.id ? (

              // TODOS INPUT
                <input
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave(todo.id)}
                  className="text-white px-2 py-1 rounded outline-0 "
                  autoFocus
                   />
                 ) : todo.word }
              </div>
                
        {/* EDIT BUTTON */}

          <div className='w-1/2 flex justify-evenly'>
              {isTodoEditable === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                >
                  <img src={Save} />
                </button>
              ) : (
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
                  onClick={() => handleEditClick(todo)}
                >
                  <img src={edit} />
                </button>
              )}

         {/* REMOVE BUTTON      */}
              <button type="button"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  >           
                <img src={clear} />
              </button>
         </div>
        
        </li>
        ))}
    </ul>
    </div>
    
  )
}

export default Todos