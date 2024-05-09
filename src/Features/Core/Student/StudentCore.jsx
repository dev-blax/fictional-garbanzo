import React from 'react'
import { Outlet } from 'react-router-dom'
import { StudentSidebar } from './Components/StudentSidebar'
function StudentCore() {
  return (
    <div className=' flex '>
      {/* <StudentSidebar /> */}


      <Outlet />
    </div>
  )
}

export default StudentCore