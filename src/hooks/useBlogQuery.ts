import { graphql, useStaticQuery } from "gatsby"
import { MenuItemConnection } from "~/generated/graphql"

export const useBlogQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         allWpPost {
            nodes {
               excerpt
               tags {
                  nodes {
                     name
                  }
               }
               content
               featuredImage {
                  node {
                     localFile {
                        childImageSharp {
                        gatsbyImageData(width: 720, placeholder: TRACED_SVG)
                        }
                     }
                     slug
                     date(formatString: "YYYY MM DD")
                  }
               }
            }
         }
      }
   `)
   return (data.wpMenu.menuItems  as MenuItemConnection).nodes
}