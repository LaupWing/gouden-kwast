import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, CategoriesMenu, ContactBanner, Pagination } from "~/components"
import { CategoryConnectionEdge, PostConnection } from "~/generated/graphql"
import { motion } from "framer-motion"

const PostsPage: React.FC<PageProps<{
   allWpPost: PostConnection
}, {
   categories: CategoryConnectionEdge[]
   numberOfPages: number
   currentPage: number
   categoryUri: string
   categorySlug: string
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
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-800">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Portfolio</h2>
            <div className="flex items-start gap-4 container mx-auto overflow-hidden">
               <motion.section 
                  className="grid grid-cols-2 gap-6 container m-auto"
                  variants={container}
                  initial="hidden"
                  animate="show"
               >
                  {data.allWpPost.nodes.map(blog => (
                     <motion.div
                        variants={item}
                        key={blog.id}
                     >
                        <BlogCard 
                           blog={blog}
                        />
                     </motion.div>
                  ))}
                  <Pagination
                     currentPage={pageContext.currentPage}
                     numberOfPages={pageContext.numberOfPages}
                     categoryUri={pageContext.categoryUri}
                  />
               </motion.section>
               <CategoriesMenu
                  categories={pageContext.categories}
               />
            </div>
            
         </main>
         <ContactBanner />
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