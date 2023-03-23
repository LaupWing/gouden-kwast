import * as React from "react"

const RequestForm = () => {
   return (
      <form className="text-slate-700 flex flex-col w-full max-w-xl p-2">
         <h2 className="text-2xl mb-4">Gratis adviesgesprek?</h2>
         <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4 col-span-2">
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="text" 
                  placeholder="Jouw naam"
               />
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="email" 
                  placeholder="Jouw email" 
               />
            </div>
            <div className="grid grid-cols-2 gap-4 col-span-2">
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="tel" 
                  placeholder="Telefoon nummer"
               />
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="text" 
                  placeholder="Postcode" 
               />
            </div>
            <textarea 
               name="message" 
               className="rounded-[3px] h-32 border-gray-300 resize-none col-span-2"
               placeholder="Bericht"
            ></textarea>
            <button className="uppercase text-slate-600 font-bold text-sm tracking-wider bg-yellow-400 col-span-2 py-2 rounded-[3px]">
               Aanvragen
            </button>
         </div>
      </form>
   )
}
export default RequestForm
