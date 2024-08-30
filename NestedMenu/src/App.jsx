import menus from "./data.jsx"
import MenuList from "./MenuList"


function App() {
  

  return (
    
     <div className=" w-[300px] h-screen bg-red-950">
    <MenuList list = {menus} />
     </div>
  )
}

export default App
