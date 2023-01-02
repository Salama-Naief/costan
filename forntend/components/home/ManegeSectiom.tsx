import Image from 'next/image'
import {data, Logo} from '../../utils/mainLogo'

function ManegeSection() {
  return (
    <section className='container mx-auto py-12 px-4 md:px-0'>
        <div className='w-full md:w-2/3 lg:w-1/2'>
         <p className='  relative flex items-end font-semibold text-3xl md:text-4xl lg:text-4xl text-blue-200'>
         Manage more content Hustle free
        </p>
        <p className='text-textColor-100 py-4 text-sm font-semibold'> 
        Creating content is using different tool make reduce productivity so costant make
        easy for you manage team and disciplain content.
        </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
        <div className="">
            <div className='text-textColor-100 font-bold text-xl text-center my-8 capitalize'>without {Logo}</div>
                <div className="relative w-full h-96 mb-2">
                <Image src={"/img/home/withoutCostan.png"} layout="fill" objectFit='contain' objectPosition='center' alt=""/>
                </div>
            </div>
            <div className="">
                <div className='text-textColor-100 font-bold text-xl text-center my-8 capitalize'>with {Logo}</div>
            <div className="relative w-full h-96 mb-2">
              <Image src={"/img/home/withCostan.png"} layout="fill" objectFit='contain' objectPosition='center' alt=""/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ManegeSection