import React, { FC, ReactNode } from 'react'

const Button:FC<{text:string}>=({text})=>{
  return (
    <button className=" px-4 py-3 font-mediuml lg:font-semibold bg-[#00616c] text-white rounded-full hover:shadow-lg hover:bg-red-300 hover:scale-105 duration-300  ">
        {text}
    </button>
  )
  }

export default Button