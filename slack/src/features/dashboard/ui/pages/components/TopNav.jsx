import React from 'react'
import {Bell,Menu,Search} from  "lucide-react"

const TopNav = () => {
  return (
    <div className='flex  justify-between items-center'>
      <div className='flex gap-4 items-center   w-[30%] rounded px-3 py-2 bg-[#]' >
        <Search size={23}/>
        <input type="text" placeholder='search workspace' />
        </div>
      <div className='flex gap-4  '>
        <Bell size={24}/>
        <Menu size={24}/>
      </div>
    </div>
  )
}

export default TopNav
