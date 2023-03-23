import * as React from "react"

const RequestForm = () => {
   return (
      <form className="text-slate-700 flex flex-col max-w-md p-2">
         <h2 className="text-2xl mb-4">Gratis adviesgesprek?</h2>
         <input className="bg-white border-slate-500 rounded-[3px]" type="text" placeholder="Naam" />
      </form>
   )
}
export default RequestForm
