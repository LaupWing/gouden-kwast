import * as React from "react"
import { useForm } from "react-hook-form"

interface FormData {
   email: string
   name: string
   phonenumber?: number
   postal_code: string
   message?: string
}

const RequestForm = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
   const onSubmit = handleSubmit(data => console.log(data))
   console.log(errors)

   return (
      <form 
         className="text-slate-700 flex flex-col w-full max-w-xl p-2"
         onSubmit={onSubmit}
      >
         <h2 className="text-2xl mb-4">Gratis adviesgesprek?</h2>
         <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4 col-span-2 items-start">
               <div className="flex flex-col">
                  <input 
                     className="bg-white border-gray-300 rounded-[3px]" 
                     type="text" 
                     placeholder="Jouw naam"
                     {...register("name", { required: "Naam is verplicht!"})}
                  />
                  {errors["name"] && <p className="text-red-400 uppercase text-xs font-bold px-1 py-0.5">{errors["name"].message}</p>}
               </div>
               <div className="flex flex-col">
                  <input 
                     className="bg-white border-gray-300 rounded-[3px]" 
                     type="email" 
                     placeholder="Jouw email" 
                     {...register("email", { required: "Email is verplicht!"})}
                  />
                  {errors["email"] && <p className="text-red-400 uppercase text-xs font-bold px-1 py-0.5">{errors["email"].message}</p>}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 col-span-2 items-start">
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="tel" 
                  placeholder="Telefoon nummer"
                  {...register("phonenumber")}
               />
               <div className="flex flex-col">
                  <input 
                     className="bg-white border-gray-300 rounded-[3px]" 
                     type="text" 
                     placeholder="Postcode" 
                     {...register("postal_code", { required: "Postcode is verplicht!"})}
                  />
                  {errors["postal_code"] && <p className="text-red-400 uppercase text-xs font-bold px-1 py-0.5">{errors["postal_code"].message}</p>}
               </div>
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
