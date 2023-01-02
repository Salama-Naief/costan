import React from 'react'
import Image from 'next/image'
import CustomButton from '../utils/CustomLink'

function HeroSection() {
  return (
    <section className='h-[480px] grid md:grid-cols-2 px-4 md:px-0 container mx-auto'>
       <div className='flex items-end justify-center'>
        <div className='py-4 md:py-6 lg:py-8'>
          <div className=' relative flex items-end font-semibold text-3xl md:text-4xl lg:text-5xl text-blue-200'>
            One stop solution for all Content creators 
          </div>
         <p className='text-textColor-100 py-8 md:text-lg font-semibold'>Content creators like youtubers, podcast, blogger, Movie or short film and 
          social media using multiple tool to manage content across platforms.</p>
          <div className='flex  space-x-4'>
          <CustomButton title={"sign up now"} navegation="register" bg/>
          <CustomButton title={"Explore Demo"} navegation="" border/>
          </div>
           <p className='text-error text-sm font-semibold mt-4'>NO CREDIT CARD REQUIRED</p>
        </div>
         
       </div>
       <div className='hidden  h-full md:flex items-center justify-center'>
         <div className='relative w-full h-full'>
           <Image src={"/img/istock.jpg"} layout="fill" objectFit='contain' objectPosition='center' alt=''/>
         </div>
       </div>
    </section>
  )
}

export default HeroSection