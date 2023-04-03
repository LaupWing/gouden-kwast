import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout, ServiceCard } from "../components"
import { Page } from "../generated/graphql"

const OnzeDiensten: React.FC<PageProps<{
   allWpPage: {
      nodes: Page[]
   }
}>> = ({ data }) => {
   return (
      <Layout>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-600">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Onze diensten</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-4">
               {(data.allWpPage.nodes as Page[]).map(item => {
                  return (
                     <ServiceCard
                        service={item}
                        key={item.id}
                     />
                  )
               })}
            </section>
         </main>
      </Layout>
   )
}

export default OnzeDiensten

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