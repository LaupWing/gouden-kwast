import type { FieldErrors, UseFormRegister } from "react-hook-form"
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
               <InputWithError 
                  name="name" 
                  placeholder="Jouw naam"
                  register={register} 
                  message="Naam is verplicht!" 
                  errors={errors}
               />
               <InputWithError 
                  name="email" 
                  placeholder="Jouw email"
                  register={register} 
                  message="Email is verplicht!" 
                  type="email"
                  errors={errors}
               />
            </div>
            <div className="grid grid-cols-2 gap-4 col-span-2 items-start">
               <input 
                  className="bg-white border-gray-300 rounded-[3px]" 
                  type="tel" 
                  placeholder="Telefoon nummer"
                  {...register("phonenumber")}
               />
               <InputWithError 
                  name="postal_code" 
                  placeholder="Postcode"
                  register={register} 
                  message="Postcode is verplicht!" 
                  errors={errors}
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


const InputWithError = ({
   errors,
   register,
   name,
   message,
   placeholder,
   type = "text"
}:{
   errors: FieldErrors<FormData>
   register: UseFormRegister<FormData>
   name: keyof FormData
   message: string
   placeholder: string
   type?: string
}) =>{
   return (<div className="flex flex-col">
      <input 
         className="bg-white border-gray-300 rounded-[3px]" 
         type={type} 
         placeholder={placeholder}
         {...register(name, { required: message})}
      />
      {errors[name] && <p className="text-red-400 uppercase text-xs font-bold px-1 py-0.5">{errors[name]?.message}</p>}
   </div>)
}