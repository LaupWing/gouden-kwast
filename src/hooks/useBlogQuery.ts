import { graphql, useStaticQuery } from "gatsby"
import { PostConnection } from "~/generated/graphql"

export const useBlogQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         allWpPost(sort: {date: DESC}) {
            nodes {
               excerpt
               title
               content
               date(formatString: "YYYY-MM-DD")
               slug
               featuredImage {
                  node {
                     localFile {
                        childImageSharp {
                           gatsbyImageData(width: 720, placeholder: DOMINANT_COLOR)
                        }
                     }
                  }
               }
            }
         }
      }
   `)
   
   return (data.allWpPost  as PostConnection).nodes
}