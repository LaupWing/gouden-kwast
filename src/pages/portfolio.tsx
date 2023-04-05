import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { ContactBanner } from "~/components"

const PortfolioPage: React.FC<PageProps> = ({data}) => {
   return (
      <>
         <main className="flex-1 pt-10">
            Tessst
         </main>
         <ContactBanner />
      </>
   )
}

export default PortfolioPage

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