import React from 'react'
import RegisterSide from '../components/loginAndregister/RegisterSide'
import SideBar from '../components/loginAndregister/SideBar'

function Register() {
  return (
    <div className='grid md:grid-cols-2 h-screen'>
       <SideBar title='You are one step away from simply content planning.'/>
       <RegisterSide/>
    </div>
  )
}

export default Register