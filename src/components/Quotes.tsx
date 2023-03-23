import * as React from "react"

const Quotes = () => {
   return (
      <div className="grid grid-cols-3 text-white">
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-400">
            <div className="max-w-[80%] space-y-4">
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-300">
            <div className="max-w-[80%] space-y-4">
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
         <div className="aspect-[2/1] flex items-center justify-center bg-indigo-400">
            <div className="max-w-[80%] space-y-4">
               <h2 className="text-xl">Lorem ipsum</h2>
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam dolor. </p>
            </div>
         </div>
      </div>
   )
}
export default Quotes