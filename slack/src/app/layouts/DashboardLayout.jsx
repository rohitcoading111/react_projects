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
    <Outlet/>
  )
}

export default DashboardLayout