import React from 'react'
import { FC } from 'react'
import Image from 'next/image'


const NewMiniInfo:FC<{logo:any, alt?:string,head:string,subHead:string}> = ({logo,alt,head,subHead}) => {
  return ( 
     <div className=" px-4 py-6  flex gap-x-2 ">
  <div> <div className="h-20 w-20 bg-slate-400">
<Image src={logo} alt="" width={150} height={200}/>
   </div>
   </div>
   <div>
       <h4 className="text-primary">{head}</h4>
       <h3 className="font-semibold  text-xl">{subHead}</h3>
   </div>
</div>
  )
}



export default NewMiniInfo