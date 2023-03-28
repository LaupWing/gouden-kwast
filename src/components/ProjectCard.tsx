import * as React from "react"

export const ProjectCard = () => {
   return (
      <div className="flex flex-col">
         <div className="aspect-[4/3] relative">
            <img 
               className="w-full h-full object-cover" 
               src={x.project_image} 
               alt="" 
            />
            <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
               <h2 className="text-lg leading-5">{x.project_title}</h2>
               <p className="text-xs text-slate-400 mt-1">{x.end_date}</p>
            </div>
         </div>
         <p className="mt-1 text-slate-50 mb-4 text-sm">{x.project_description}</p>
         <button className="mt-auto mr-auto py-1 px-4 text-white uppercase text-sm rounded bg-indigo-400 font-bold tracking-wider shadow">Lees meer</button>
      </div>
   )
}