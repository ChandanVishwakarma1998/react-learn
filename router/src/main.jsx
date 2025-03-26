import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubInfoLoader }  from './Components/Github/Github.jsx'

import User from './Components/User/User.jsx'
import About from './Components/About/About.jsx'
import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
          <Route path='User' element={<User/>}/>
            <Route path='Github'
            loader={githubInfoLoader} element={<Github/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>
)
