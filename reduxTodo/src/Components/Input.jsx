import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Feature/todoSlice'





function Input() {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className=" flex justify-center">
    <form onSubmit={addTodoHandler} className="space-x-3 pt-12  ">
      <input
        type="text"
        className="bg-gray-800 rounded-l-xl border border-gray-700 focus:outline-none  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mr-0"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-1.5 px-6 ml-0 focus:outline-none hover:bg-indigo-600 rounded-r-xl text-lg"
      >
        Add Todo
      </button>
    </form>
    </div>
  )
}

export default Input