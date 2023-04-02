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
         <main className="flex-1 p-10 bg-slate-500">
            <section className="grid grid-cols-3 container mx-auto gap-4">
               {(data.allWpPage.nodes as Page[]).map(item => {
                  return (
                     <div className="flex flex-col">
                        <GatsbyImage 
                           // @ts-ignore
                           image={getImage(item.featuredImage?.node.gatsbyImage)!}
                           alt={item.title!}
                           className="aspect-[3/2]"
                        />
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