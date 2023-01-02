import Image from 'next/image'
import {data} from '../../utils/mainLogo'

function GrowSection() {
  return (
    <section className='container mx-auto py-8 px-4 md:px-0'>
        <div className='w-full md:w-2/3 lg:w-1/2'>
         <p className='  relative flex items-end font-semibold text-3xl md:text-4xl lg:text-4xl text-blue-200'>
            Build for Creator Who want to grow 
        </p>
        <p className='text-textColor-100 py-4 text-sm font-semibold'> 
          The costan community consist of open source advocates, developers, contributors,
          entrepreneurs and many more amazing humans. See what they think:
        </p>
        </div>
        <div className="flex justify-between flex-wrap">
          {
            data.map(item=>(
          <div key={item.id} className='w-full md:w-1/2 lg:w-1/4 p-2'> 
          <div className=' border border-textColor-100 flex flex-col justify-center rounded p-5'>
            <div className="relative w-32 h-24 mb-2">
              <Image src={item.img} layout="fill" objectFit='contain' objectPosition='center' alt=""/>
            </div>
            <div className='text-xl font-semibold'>{item.title}</div>
            <p className='text-textColor-100 text-sm'>{item.desc}</p>            
          </div>
          </div>
            ))
          }
        </div>
    </section>
  )
}

export default GrowSection