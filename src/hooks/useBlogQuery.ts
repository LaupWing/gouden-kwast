import { graphql, useStaticQuery } from "gatsby"
import { MenuItemConnection, PostConnection } from "~/generated/graphql"

export const useBlogQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         allWpPost(sort: {date: ASC}) {
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
   return (data.allWpPost  as PostConnection).nodes
}