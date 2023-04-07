import { HeadFC, Link, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, CategoriesMenu, ContactBanner, Pagination } from "~/components"
import { CategoryConnectionEdge, PostConnection } from "~/generated/graphql"

const PostsPage: React.FC<PageProps<{
   allWpPost: PostConnection
}, {
   categories: CategoryConnectionEdge[]
   numberOfPages: number
   currentPage: number
   categoryUri: string
}>> = ({data, pageContext}) => {
   console.log(pageContext)
   return (
      <>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-800">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Portfolio</h2>
            <div className="flex items-start gap-4 container mx-auto">
               <section className="grid grid-cols-2 gap-6 container m-auto">
                  {data.allWpPost.nodes.map(blog => (
                     <BlogCard 
                        blog={blog}
                        key={blog.id}
                     />
                  ))}
                  <Pagination
                     currentPage={pageContext.currentPage}
                     numberOfPages={pageContext.numberOfPages}
                     categoryUri={pageContext.categoryUri}
                  />
               </section>
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