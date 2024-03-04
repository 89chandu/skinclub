import React from 'react'
import '../styles/Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarNavigation'>
            <li>Overview</li>
            <li>Profile</li>
            <li>Appointments</li>
            <li>History</li>
            <li>History
                <ul>
                    <li>Videos</li>
                    <li>Videos Library</li>
                </ul>
            </li>
            <li>Messages</li>
            <li>Support
                <ul>
                    <li>FAQ’s</li>
                    <li>Procedure Information</li>
                </ul>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

       

           
        </div>
        
    </div>
  )
}

export default Sidebar;