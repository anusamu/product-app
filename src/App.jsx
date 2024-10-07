import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Add from './Components/Add'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <br /><br /><br />
   <Routes>
       <Route path='/' element={<Home/>} > </Route>
   <Route path='/add' element={<Add props={{productName:'Wireless Bluetooth Headphones',price:' $59.99',rate:4.3}}/>}></Route>
   </Routes>
    </>
  )
}

export default App
