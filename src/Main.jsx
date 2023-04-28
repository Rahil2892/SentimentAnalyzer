import React from 'react'
import { Link } from "react-router-dom";
import Play from './Play'
import Emote from './Emote'
import Camera from './Camera'

const Main = () => {

  return (
    <div className='flex'>
        <div className="basis-3/5 bg-blue-300">
         <Play/>
        </div>
        <div className="flex flex-col basis-2/5 bg-white"> 
         <div className='w-full'><Camera/></div>
         <div className='w-full'><Emote/></div>
         <Link to="/form">
      <button className=' bg-violet-400 text-white px-3 py-2 rounded-md  font-bold mt-2 '>Switch to Form</button>
        </Link>
        </div>
        
    </div>
  )
}

export default Main