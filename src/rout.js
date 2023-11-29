import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Login from './Login'

function rout() {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
    </Routes>
  )
}

export default rout