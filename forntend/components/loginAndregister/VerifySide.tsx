import Link from 'next/link'
import React from 'react'
import { ArrowBack } from 'tabler-icons-react'
import CustomButton from '../utils/CustomLink'

function VerifySide() {
  return (
    <div className='contianer mx-auto px-4 pt-12  bg-textColor-50'>
         <Link href={"/"}>
           <div className="uppercase space-x-1 font-medium text-textColor-100 flex items-center transition-all duration-200 ease-in-out px-2 rounded active:scale-95 w-fit hover:bg-blue-50">
              <ArrowBack/>
              <div className=''>go to home</div>
           </div>
        </Link>
      <div className='h-full flex items-center md:w-3/4'>
        <div>
        <div className="font-bold text-3xl text-blue-200 mb-6">
           Please verify your email
           </div>
          <p className='py-4 text-sm font-semibold'>
          Once you verify your email address, you and your team
          can get started in costan
          </p>
          <div className="flex items-center justify-center space-x-4">
              <div className='font-medium'>Did not receive and email?</div>
              <button className='text-blue-100'>Resend Email</button>
          </div>            
        </div>
      
      </div>

    </div>
  )
}

export default VerifySide