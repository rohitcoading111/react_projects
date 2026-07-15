import React from 'react'
import Header from './components/header'
import Login from './components/Login'
import { useState } from 'react'
import Register from './components/Register'

const App = () => {
const [isLogin, setIsLogin] = useState(true);
  return (
   <div>
    {isLogin ? <Login setIsLogin={setIsLogin} /> :<Register setIsLogin={setIsLogin} /> }
   </div>
  )
}

export default App
