import React from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
const ProtectedRoute = () => {

  let { employee, isLoading } = useSelector((store)=>store.auth)

  if(isLoading){
    return <div>Loading...</div>
  }

   if(!employee){
    return <Navigate to="/" />
   }

  return <Outlet />

}

export default ProtectedRoute
