import * as React from "react"
import { IoArrowForwardCircle } from "react-icons/io5"

const Hero = () => {
   return (
      <>
         <HeroDesktop />
      </>
   )
}
export default Hero


const HeroDesktop = () => {
   return (
      <div className="h-minus-nav w-full flex">
         <div className="w-2/5 bg-slate-500 relative flex items-center justify-center">
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
            <div className="absolute bottom-0 right-0 w-44 h-24 ">
               <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2090653/pexels-photo-2090653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
         </div>
         <div className="flex-1 relative">
            <button className="absolute uppercase text-slate-600 font-bold text-sm tracking-wider bottom-0 left-0 w-44 h-24 bg-yellow-400">
               Aanvragen
            </button>
            <img
               src="https://images.pexels.com/photos/4792523/pexels-photo-4792523.jpeg" 
               className="w-full h-full object-cover"
               alt="" 
            />
         </div>
      </div>
   )
}

const HeroMobile = () => {

}
