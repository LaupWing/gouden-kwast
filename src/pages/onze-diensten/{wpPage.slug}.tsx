import * as React from "react"
import { Layout } from "~/components"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OnzeDienstenDetail: React.FC<PageProps> = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         <main className="flex-1 bg-slate-500">
            <GatsbyImage
               // @ts-ignore
               image={getImage(data.wpPage.featuredImage?.node.gatsbyImage)!}
               // @ts-ignore
               alt={data.wpPage.title!}
               className="w-full object-cover max-h-80 h-[30vh]"
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