import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import AsideNav from '../../features/dashboard/ui/pages/components/AsideNav';
import TopNav from '../../features/dashboard/ui/pages/components/TopNav';


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
      <div className='border-r border-gray-500 px-6 py-4'>
        <AsideNav />
        </div>
      <div className=' flex flex-col gap-5  px-6 py-4'>
        <TopNav /> 
        <Outlet/>  
      </div>
    </div>
  )
}

export default DashboardLayout