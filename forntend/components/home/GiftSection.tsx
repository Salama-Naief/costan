import Image from 'next/image'
import React from 'react'
import CustomButton from '../utils/CustomLink'

function GiftSection() {
  return (
    <div className='container mx-auto p-4 md:px-0'>
        <div className='flex justify-between p-8 border rounded'>
            <div>
                <div className="font-bold md:text-xl lg:text-3xl my-2">If you have any request. We are really like to hear from you...</div>
                <div className='hidden md:block text-textColor-100 text-sm py-2'>
                You have such feedback, request or any facing problem. Please give your 5 min to fill form. A gift is waiting for you... 
                </div>
                <div className="py-4">
                    <CustomButton title={"go to form"} bg />
                </div>
            </div>
            <div className='relative w-40 h-40'>
                <Image src={"/img/home/gift.png"} layout="fill" objectFit='contain' objectPosition='center' alt=''/>
            </div>
        </div>
        
    </div>
  )
}

export default GiftSection