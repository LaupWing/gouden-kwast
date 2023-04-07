import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, CategoriesMenu, CategorySection, ContactBanner, Pagination } from "~/components"
import { CategoryConnectionEdge, PostConnection } from "~/generated/graphql"
import { motion } from "framer-motion"

const PostsPage: React.FC<PageProps<{
   allWpPost: PostConnection
}, {
   categories: CategoryConnectionEdge[]
   numberOfPages: number
   currentPage: number
   categoryUri: string
}>> = ({data, pageContext}) => {
   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
         },
      },
   }
   const item = {
      hidden: { 
         opacity: 0,
         y: 20
      },
      show: { 
         opacity: 1,
         y: 0 
      },
   }
   return (
      <>
         <CategorySection 
            posts={data.allWpPost}
            categories={pageContext.categories}
            numberOfPages={pageContext.numberOfPages}
            categoryUri={pageContext.categoryUri}
            currentPage={pageContext.currentPage}
         />
      </>
   )
}

export default PostsPage

export const Head: HeadFC = () => <title>Portfolio</title>

export const pageQuery = graphql`
   query($categoryId: String!, $skip: Int!, $limit: Int!){
      allWpPost(
         filter: { categories: { nodes: { elemMatch: { id: { eq: $categoryId } } } } }
         skip: $skip
         limit: $limit
      ) {
         nodes {
            excerpt
            title
            id
            content
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