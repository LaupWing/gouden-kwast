import * as React from "react"
import { Layout } from "~/components"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Page } from "~/generated/graphql"

const OnzeDienstenDetail: React.FC<PageProps<{
   wpPage: Page 
}>> = ({ data }) => {
   
   return (
      <Layout>
         <main className="flex-1 bg-slate-200">
            <GatsbyImage
               // @ts-ignore
               image={getImage(data.wpPage.featuredImage?.node.gatsbyImage)!}
               alt={data.wpPage.title!}
               className="w-full object-cover max-h-60 h-[30vh]"
            />
         </main>
      </Layout>
   )
}
export default OnzeDienstenDetail

export const pageQuery = graphql`
   query OnzeDienstenDetail($id: String!) {
      wpPage(id: {eq: $id}) {
         content
         title
         featuredImage {
            node {
               gatsbyImage(placeholder: TRACED_SVG, width: 720)
            }
         }
      }
   }
`