import * as React from "react"
import { AiOutlineFieldTime } from "react-icons/ai"
import { BsShieldFillCheck } from "react-icons/bs"
import { IoLocation } from "react-icons/io5"
import { IconType } from "react-icons/lib"

const Quotes = () => {
   return (
      <div className="grid lg:grid-cols-3 text-white">
         <div className="aspect-[2/1] flex items-center justify-center py-10 bg-slate-500">
            <div className="max-w-[80%] flex flex-col">
               <AiOutlineFieldTime className="text-yellow-500" size={40}/>
               <h2 className="text-xl text-yellow-400 mb-2">Lorem ipsum</h2>
               <p className="text-sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-slate-600">
            <div className="max-w-[80%] space-y-3 flex flex-col">
               <BsShieldFillCheck size={38}/>
               <h2 className="text-xl">Lorem ipsum</h2>
               <p className="text-sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-slate-500">
            <div className="max-w-[80%] space-y-3 flex flex-col">
               <IoLocation size={40}/>
               <h2 className="text-xl">Lorem ipsum</h2>
               <p className="text-sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
      </div>
   )
}
export default Quotes

interface QuoteProps {
   Icon: IconType
   title: string
   description: string
}
const Quote:React.FC<QuoteProps> = ({
   Icon,
   title,
   description
}) => {
   return (
      <div className="aspect-[2/1] flex items-center justify-center py-10 bg-slate-500">
         <div className="max-w-[80%] flex flex-col">
            <div className="flex flex-col mb-2">
               <Icon className="text-yellow-500" size={40}/>
               <h2 className="text-xl text-yellow-400">{ title }</h2>
            </div>
            <p className="text-sm">{ description }</p>
         </div>
      </div>
   )
}