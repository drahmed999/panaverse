import React from 'react'
import { FC } from 'react'
import Image from 'next/image'


const MiniInfoTiles:FC<{logo:any, alt?:string,head:string,subHead:string}> = ({logo,alt,head,subHead}) => {
  return (
<div className=" px-4 py-6 basis-4/12 flex items-center  gap-x-2 ">

      <div>
      <div className="h-20 w-20">
        <Image src={logo} alt="" width={250} height={300} />
        </div>
        </div>
            <div>
                <h4 className="text-primary">{head}</h4>
                <h3 className="font-semibold text-sm">{subHead}</h3>
            </div>
        </div>
  )
}



export default MiniInfoTiles