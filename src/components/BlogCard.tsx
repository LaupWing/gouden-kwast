import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import type { FC } from "react"
import { Post, Tag } from "~/generated/graphql"

export const BlogCard:FC<{
   blog: Post
}> = ({ blog }) => {
   return (
      <div className="flex flex-col text-left">
         <div className="aspect-[4/3] relative">
            <div className="absolute top-2 left-2 z-50 flex gap-3 tracking-wider font-bold uppercase text-sm">
               {blog.tags?.nodes.map((tag: Tag) => (
                  <div className="px-2 py-0.5 rounded bg-slate-700 text-yellow-400">{tag.name}</div>
               ))}
            </div>
            <GatsbyImage
               // @ts-ignore
               image={getImage(blog.featuredImage?.node.localFile.childImageSharp.gatsbyImageData)!}
               alt={blog.title!}
               className="w-full h-full object-cover"
            />
            <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
               <h2 className="text-lg leading-5">{blog.title!}</h2>
               <p className="text-xs text-slate-400 mt-1">{blog.date!}</p>
            </div>
         </div>
         <div 
            className="mt-1 text-slate-50 mb-4 text-sm"
            dangerouslySetInnerHTML={{
               __html: blog.excerpt!
            }}
         />
         <button className="btn-primary mt-auto mr-auto">Lees meer</button>
      </div>
   )
}