import React, { FC } from 'react'

interface IProps{
    main:string,
    desc:string,
    num:number,
    haveBorder?:boolean
};

const QuarterBox:FC<IProps>=({main,desc,num,haveBorder=true})=>{
    return(
        <div className='${haveBorder&&"border"} rounded-md px-4 justify-center relative hover:bg-gray-100'>
              <h4 className="font-bold text-center text-lg">{main}</h4>
              <p className="mt-2 text-slate-700">{desc}</p>
              <span className="absolute top-2 right-10 text-9xl -z-10 text-gray-200">{num}</span>
            </div>
    )}
    



export default QuarterBox