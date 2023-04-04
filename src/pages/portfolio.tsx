import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout } from "~/components"

const OnzeDienstenPage: React.FC<PageProps> = ({data, location}) => {
   return (
      <Layout location={location}>
         <main className="flex-1 pt-10">
            Tessst
         </main>
      </Layout>
   )
}

export default OnzeDienstenPage

export const Head: HeadFC = () => <title>Onze diensten</title>

// export const pageQuery = graphql`
//    query DienstenQuery {
//       allWpPage(filter: {parentId: {eq: "cG9zdDo5OA=="}}) {
//          nodes {
//             parentId
//             uri
//             featuredImage {
//                node {
//                   gatsbyImage(placeholder: TRACED_SVG, width: 720)
//                }
//             }
//             title
//             onzeDiensten {
//                description
//             }
//          }
//       }
//    }
// `