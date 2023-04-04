import { graphql, useStaticQuery } from "gatsby"
import { PostConnection } from "~/generated/graphql"

export const useBlogQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         allWpPost(sort: {date: DESC}) {
            nodes {
               excerpt
               title
               tags {
                  nodes {
                     name
                  }
               }
               content
               date(formatString: "YYYY-MM-DD")
               featuredImage {
                  node {
                     localFile {
                        childImageSharp {
                           gatsbyImageData(width: 720, placeholder: TRACED_SVG)
                        }
                     }
                     slug
                  }
               }
            }
         }
      }
   `)
   
   return (data.allWpPost  as PostConnection).nodes
}