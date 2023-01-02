import Link from 'next/link'
const CustomLink=({title,border,navegation,bg,disabled}:{title:String,border?:boolean,navegation?:String,bg?:boolean,disabled?:boolean})=>{
    return(
      <Link href={`/${navegation}`} >
          <button disabled={disabled} className={`${border&&"border border-blue-100"} ${bg?"bg-blue-100 text-textColor-white":"bg-inhrit text-blue-100"}  text-sm md:text-base  font-[500] uppercase px-2 py-1.5  rounded transtion-all ease-in-out duration-200 hover:translate-y-px active:scale-90`}>{title}</button>
      </Link>
    )
  }

export default CustomLink