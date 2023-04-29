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
         <div className='w-full '><Emote/></div>
         <div class="flex justify-center mb-4">
           <Link to="/form" class="  bg-violet-400 text-white px-3 py-2 rounded-md  font-bold mt-2 hover:bg-violet-700" >
             <button>Switch to form</button>
           </Link>
         </div>

        </div>
        
    </div>
  )
}

export default Main