import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout, ServicesSection } from "~/components"
import { Page } from "~/generated/graphql"

const OnzeDiensten: React.FC<PageProps<{
   allWpPage: {
      nodes: Page[]
   }
}>> = ({ data, location }) => {
   return (
      <Layout>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-600">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Onze diensten</h2>
            <ServicesSection services={data.allWpPage.nodes} />
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
            id
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