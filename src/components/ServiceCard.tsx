import * as React from "react"
import type { FC } from "react"
import { Link } from "gatsby"
import { Page } from "~/generated/graphql"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const ServiceCard:FC<{service: Page}> = ({
   service
}) => {
   return (
      <div className="flex flex-col shadow bg-slate-800">
         <div className="relative">
            <GatsbyImage
               // @ts-ignore
               image={getImage(service.featuredImage?.node.gatsbyImage)!}
               alt={service.title!}
               className="aspect-[3/2]"
            />
            <h2 className="text-yellow-400 p-2 absolute bottom-0 left-0 bg-slate-900/40 backdrop-blur m-1">{service.title!}</h2>
         </div>
         <div className="flex flex-col flex-1 p-2">
            <p className="text-sm text-slate-100 m-2 line-clamp-2">{service.onzeDiensten?.description!}</p>
            <Link className="mr-auto mt-auto ml-1 mb-1" to={service.uri!}>
               <button className="btn-primary">
                  Lees meer
               </button>
            </Link>
         </div>
      </div>
   )
}