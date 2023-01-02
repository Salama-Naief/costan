import Link from 'next/link'
import React from 'react'
import {GridDots} from "tabler-icons-react"
import { Logo } from '../../utils/mainLogo'
import CustomButton from '../utils/CustomLink'
import {BrandTwitter,BrandFacebook,BrandYoutube,BrandLinkedin} from "tabler-icons-react"

function HomeFooter() {
  return (
    <header className='px-4 md:px-0 md:flex justify-between py-6 container mx-auto'>
      <div>
        <Link href={"/"}>
            <div className='flex items-center space-x-1'>
                <GridDots className='w-7 h-7'/>
                <div className='text-3xl font-[700] capitalize'>{Logo}</div>
            </div>
        </Link>        
      </div>
       <div className='flex-1 items-center flex justify-center my-4 md:my-0 space-x-3 md:space-x-4 lg:space-x-6'>
         <Link href={"/"}><span className='transition-all duration-200 ease-in-out hover:text-textColor-100 whitespace-nowrap'> About us </span></Link>
         <Link href={"/"}><span className='transition-all duration-200 ease-in-out hover:text-textColor-100'> FAQ </span></Link>
         <Link href={"/"}><span className='transition-all duration-200 ease-in-out hover:text-textColor-100 whitespace-nowrap'> Terms and conditions </span></Link>
         <Link href={"/"}><span className='transition-all duration-200 ease-in-out hover:text-textColor-100'> @Costan2022 </span></Link>
       </div>
      <div className='flex uppercase items-center space-x-4 text-blue-200 my-4 md:my-0'>
          <a href='/' className='bg-textColor-white p-1 rounded transtion-all duration-200 ease-in-out hover:translate-y-0.5 active:scale-90'><BrandTwitter/></a>
          <a href='/' className='bg-textColor-white p-1 rounded transtion-all duration-200 ease-in-out hover:translate-y-0.5 active:scale-90'><BrandFacebook/></a>
          <a href='/' className='bg-textColor-white p-1 rounded transtion-all duration-200 ease-in-out hover:translate-y-0.5 active:scale-90'><BrandYoutube/></a>
          <a href='/' className='bg-textColor-white p-1 rounded transtion-all duration-200 ease-in-out hover:translate-y-0.5 active:scale-90'><BrandLinkedin/></a>
      </div>
    </header>
  )
}

export default HomeFooter