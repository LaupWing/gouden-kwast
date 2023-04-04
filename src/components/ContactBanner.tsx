import * as React from "react"
import { IoArrowForwardCircle } from "react-icons/io5"

export const ContactBanner = () => {
   return (
      <div className="bg-slate-700">
         <div className="container py-10 px-6 lg:px-0 flex lg:flex-row flex-col justify-between lg:items-center items-start">
            <h2 className="text-2xl font-bold text-slate-200">Geïnteresseerd?</h2>
            <div className="flex text-yellow-400 uppercase tracking-wider items-center font-bold text-sm">
               Contacteer ons 
               <IoArrowForwardCircle className="ml-2" size={24}/>
            </div>
         </div>
      </div>
   )
}