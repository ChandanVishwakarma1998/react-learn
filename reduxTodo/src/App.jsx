import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { store } from './Store/store'



function App() {
  

  return (
    <Provider store={store}>
      <div className=" mt-0 w-full h-screen bg-slate-600  ">
       <Input/>
       <Todos/>
      </div>
    </Provider>
  )
}

export default App
