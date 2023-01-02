import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GridDots } from 'tabler-icons-react'
import { Logo } from '../../utils/mainLogo'

function SideBar({title}:{title:string}) {
  return (
    <div className='hidden md:block bg-blue-50 container mx-auto pt-12 px-8'>
    <Link href={"/"}>
        <div className='text-blue-100 flex items-center space-x-1'>
            <GridDots className='w-7 h-7'/>
            <div className='text-3xl font-[700] capitalize'>{Logo}</div>
        </div>
    </Link>
    <div className="py-4 md:text-3xl text-blue-200 font-semibold">{title}</div>
    
    <div className="py-10">
        <div className='w-full h-28 relative overflow-hidden'>
            <Image src={"/img/registerTem.png"} layout="fill" objectFit='fill' objectPosition='left' alt=''/>
        </div>
    </div>
    <div className="lg:px-10">
        <div className="relative h-10 w-10">
            <Image src={"/img/quate.png"} layout="fill" objectFit='contain' objectPosition='center' alt=''/>
        </div>
        <p className='text-textColor-100 font-semibold px-4'>
            I believe I would be lost if you weren't in the office, and I'm
            happy to say that I don't even know if I'm right. Thank you
            for always being there.
        </p>
        <div className="flex justify-end">
        <div className="relative h-10 w-10">
            <Image src={"/img/qQuete.png"} layout="fill" objectFit='contain' objectPosition='center' sizes='' alt=''/>
        </div>
        </div>
    </div>
    <div className="">
        <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden p-1 border border-blue-100">
                <Image src={"/img/images.jpg"} layout="fill" objectFit='cover' objectPosition='center' alt=""/>
            </div>
            <div className=''>
                <div className='text-blue-200 font-semibold'>Tanmay Bhat</div>
                <div className='text-error font-medium'>Youtuber . 13M Subscribers</div>
            </div>
        </div>
        <div className='flex py-4 space-x-1'>
            <span className='bg-blue-200 w-3 h-1 rounded-full'></span>
            <span className='bg-textColor-white w-1 h-1 rounded-full'></span>
            <span className='bg-textColor-white w-1 h-1 rounded-full'></span>
            <span className='bg-textColor-white w-1 h-1 rounded-full'></span>
            <span className='bg-textColor-white w-1 h-1 rounded-full'></span>
        </div>
    </div>
</div>
  )
}

export default SideBar