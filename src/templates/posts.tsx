import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { CategorySection } from "~/components"
import { CategoryConnectionEdge, PostConnection } from "~/generated/graphql"

const AllPostsTemplate: React.FC<PageProps<{
   allWpPost: PostConnection
}, {
   categories: CategoryConnectionEdge[]
   numberOfPages: number
   currentPage: number
   categoryUri: string
}>> = ({data, pageContext}) => {
   return (
      <CategorySection
         posts={data.allWpPost}
         categories={pageContext.categories}
         numberOfPages={pageContext.numberOfPages}
         categoryUri={pageContext.categoryUri}
         currentPage={pageContext.currentPage}
      />
   )
}

export default AllPostsTemplate

export const Head: HeadFC = () => <title>Portfolio</title>

export const pageQuery = graphql`
   query($skip: Int!, $limit: Int!){
      allWpPost(
         skip: $skip
         limit: $limit
      ) {
         nodes {
            excerpt
            title
            id
            content
            uri
            date(formatString: "YYYY-MM-DD")
            categories {
               nodes {
                  name
                  id
               }
            }
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
`