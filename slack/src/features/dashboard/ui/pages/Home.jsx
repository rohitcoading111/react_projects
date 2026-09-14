import React from 'react'
import {useDispatch} from "react-redux"
import { toogleTheme } from '../../../../shared/state/themeSlice';

const Home = () => {
  let dispatch = useDispatch();

 let handleTheme = ()=>{
   dispatch(toogleTheme())
 }
  return (
    <div>
      <h1>this is my nav</h1>
      <h1>this is my home</h1>
      <button onClick={handleTheme}>change theme</button>
    </div>
  )
}

export default Home