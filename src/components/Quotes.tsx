import * as React from "react"
import { AiOutlineFieldTime } from "react-icons/ai"
import { BsShieldFillCheck } from "react-icons/bs"
import { IoLocation } from "react-icons/io5"

const Quotes = () => {
   return (
      <div className="grid grid-cols-3 text-white">
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-400">
            <div className="max-w-[80%] space-y-3 flex flex-col">
               <AiOutlineFieldTime size={40}/>
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-300">
            <div className="max-w-[80%] space-y-3 flex flex-col">
               <BsShieldFillCheck size={38}/>
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-400">
            <div className="max-w-[80%] space-y-3 flex flex-col">
               <IoLocation size={40}/>
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
      </div>
   )
}
export default Quotes