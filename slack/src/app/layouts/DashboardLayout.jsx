import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';


const DashboardLayout = () => {
 let {mode} = useSelector((store)=>store.theme)

  useEffect(()=>{
  if(mode === "light"){
    document.body.classList.add("light")
  }else{
    document.body.classList.remove("light")
  }
  },[mode])
  return (
    <div className='h-screen grid grid-cols-[1fr_7fr]'>
      <div className='border-r border-gray-500 p-4'>navbar</div>
      <div className=' flex flex-col gap-5 p-4'>
        <div>top nav</div>
        <Outlet/>  
      </div>
    </div>
    
  )
}

export default DashboardLayout