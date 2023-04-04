import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import type { FC } from "react"
import { Post } from "~/generated/graphql"
import type { ProjectType } from "~/typings"

export const ProjectCard:FC<{
   project: Post
}> = ({ project }) => {
   console.log(project)
   return (
      <div className="flex flex-col text-left">
         <div className="aspect-[4/3] relative">
            {/* <img 
               className="w-full h-full object-cover" 
               src={project.project_image} 
               alt="" 
            /> */}
            <GatsbyImage
               // @ts-ignore
               image={getImage(project.featuredImage?.node.localFile.childImageSharp.gatsbyImageData)!}
               alt={project.title!}
               className="w-full object-cover max-h-60 h-[30vh]"
            />
            <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
               <h2 className="text-lg leading-5">{project.title!}</h2>
               <p className="text-xs text-slate-400 mt-1">{project.date!}</p>
            </div>
         </div>
         <p className="mt-1 text-slate-50 mb-4 text-sm">{project.excerpt!}</p>
         <button className="btn-primary mt-auto mr-auto">Lees meer</button>
      </div>
   )
}