import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from "../features/counterSlice";
import { useState } from 'react';

const LoginPage = () => {
 
  const [inpValue, setinpValue] = useState(0)
  const dispatch = useDispatch();
  let {count} = useSelector((store)=>{
    return store.counter
  })
  
  return (
    <div>
      <h1>count is {count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button> <br /> <br />
       <input type="text" placeholder='Enter your name' onChange={(e)=> setinpValue(Number(e.target.value))} />
       <button onClick={()=>dispatch(incrementByValue(inpValue))}>Submit</button>
    </div>
  )
}

export default LoginPage
