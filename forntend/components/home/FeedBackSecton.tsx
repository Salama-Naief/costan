import Image from 'next/image'
import {data, Logo} from '../../utils/mainLogo'
import { users } from '../../utils/users'

function FeedBackSection() {
  return (
    <section className='container mx-auto py-12 px-4 md:px-0'>
        <div className='w-full md:w-2/3 lg:w-1/2'>
         <p className='  relative flex items-end font-semibold text-3xl md:text-4xl lg:text-4xl text-blue-200'>
         Whats people are saying
        </p>
        <p className='text-textColor-100 py-4 text-sm font-semibold'> 
          The costan community consist of open source advocates, developers, contributors,
            entrepreneurs and many more amazing humans. See what they think:
        </p>
        </div>
        <div className="flex justify-between my-12 flex-wrap">
        {
          users.map(user=>(
          <div key={user.id} className="p-4 w-full md:w-1/2 lg:w-1/4">
            <div className=" border border-textColor-100 rounded p-4">
             <div className="flex space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image src={"/img/images.jpg"} layout="fill" objectFit='cover' objectPosition='center' alt=""/>
            </div>
            <div className="">
               <div className="font-semibold">{user.name}</div>
               <div className="text-textColor-100">@{user.email}</div>
            </div>
          </div>
          <p className='py-6'>{user.message}</p>
          <p className='text-sm text-textColor-100'>{user.date.getHours()}:{user.date.getMinutes()} - {user.date.getDay()}/{user.date.getMonth()}/{user.date.getFullYear()}</p>           
          </div>

        </div>
          ))  
        }

        </div>
    </section>
  )
}

export default FeedBackSection