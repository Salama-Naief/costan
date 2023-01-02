import React from 'react'
import VerifySide from '../../components/loginAndregister/VerifySide'
import SideBar from '../../components/loginAndregister/SideBar'

function Verify() {
  return (
    <div className='grid md:grid-cols-2 h-screen'>
       <SideBar title='You are one step away from simply content planning.'/>
       <VerifySide/>
    </div>
  )
}

export default Verify