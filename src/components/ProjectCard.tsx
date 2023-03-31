import * as React from "react"
import type { FC } from "react"
import type { ProjectType } from "../typings"

export const ProjectCard:FC<{
   project: ProjectType
}> = ({ project }) => {
   return (
      <div className="flex flex-col">
         <div className="aspect-[4/3] relative">
            <img 
               className="w-full h-full object-cover" 
               src={project.project_image} 
               alt="" 
            />
            <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
               <h2 className="text-lg leading-5">{project.project_title}</h2>
               <p className="text-xs text-slate-400 mt-1">{project.end_date}</p>
            </div>
         </div>
         <p className="mt-1 text-slate-50 mb-4 text-sm">{project.project_description}</p>
         <button className="mt-auto mr-auto py-1 px-4 text-white uppercase text-sm rounded bg-yellow-400 font-bold tracking-wider shadow">Lees meer</button>
      </div>
   )
}