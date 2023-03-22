import * as React from "react"
import { IoArrowForwardCircle } from "react-icons/io5"

const Hero = () => {
   return (
      <div className="h-screen w-full flex">
         <div className="w-2/5 bg-slate-500 flex items-center justify-center">
            <div className="flex flex-col max-w-[80%] justify-center items-start space-y-10">
               <h2 className="text-4xl text-white font-semibold tracking-wide leading-[3rem]">Het schildersbedrijf voor regio Alkmaar</h2>
               <button className="flex shadow h-9">
                  <div className="bg-yellow-400 h-full flex items-center justify-center px-6 uppercase text-sm font-bold text-slate-600">
                     Meer info
                  </div>
                  <div className="bg-slate-400 flex items-center justify-center px-2 text-white h-full flex-1">
                     <IoArrowForwardCircle size={20}/>
                  </div>
               </button>
            </div>
         </div>
         <div className="flex-1">
            <img
               src="https://images.pexels.com/photos/4792523/pexels-photo-4792523.jpeg" 
               className="w-full h-full object-cover"
               alt="" 
            />
         </div>
      </div>
   )
}
export default Hero
