import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout } from "../components"
import { Page } from "../generated/graphql"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactPage: React.FC<PageProps<{
   allWpPage: {
      nodes: Page[]
   }
}>> = ({ data }) => {
   console.log(data.allWpPage.nodes)
   return (
      <Layout>
         <main className="flex-1 p-10 py-20 bg-slate-500">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Onze diensten</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-4">
               {(data.allWpPage.nodes as Page[]).map(item => {
                  return (
                     <div className="flex flex-col shadow bg-slate-700">
                        <div className="relative">
                           <GatsbyImage 
                              // @ts-ignore
                              image={getImage(item.featuredImage?.node.gatsbyImage)!}
                              alt={item.title!}
                              className="aspect-[3/2]"
                           />
                           <h2 className="text-yellow-400 p-2 absolute bottom-0 left-0 bg-slate-900/40 backdrop-blur m-1">{item.title!}</h2>
                        </div>
                        <p className="text-sm text-slate-100 m-2 line-clamp-2">{item.onzeDiensten?.description!}</p>
                        <button className="py-1 px-4 text-slate-800 uppercase text-sm rounded bg-yellow-400 font-bold tracking-wider shadow mr-auto mt-auto ml-1 mb-1">Lees meer</button>
                     </div>
                  )
               })}
            </section>
         </main>
      </Layout>
   )
}

export default ContactPage

export const Head: HeadFC = () => <title>Onze diensten</title>

export const pageQuery = graphql`
   query DienstenQuery {
      allWpPage(filter: {parentId: {eq: "cG9zdDo5OA=="}}) {
         nodes {
            parentId
            uri
            featuredImage {
               node {
                  gatsbyImage(placeholder: TRACED_SVG, width: 720)
               }
            }
            title
            onzeDiensten {
               description
            }
         }
      }
   }
`