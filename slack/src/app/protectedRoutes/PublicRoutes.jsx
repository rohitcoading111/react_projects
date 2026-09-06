import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router'
const PublicRoutes = () => {

   let { employee, isLoading } = useSelector((store)=>store.auth)
   if(employee){
    return <Navigate to="/home" />
   }
  return <Outlet />;
}

export default PublicRoutes
