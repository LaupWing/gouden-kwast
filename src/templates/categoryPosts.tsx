import { HeadFC, Link, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, ContactBanner, Pagination } from "~/components"
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
               <ul className="bg-slate-50 rounded py-4 px-6">
                  <li className="uppercase font-bold text-xs tracking-wider text-slate-400">
                     <h2>Categoriën</h2>
                  </li>
                  <div className="flex flex-col gap-2 mt-2">
                     {pageContext.categories.map(category => (
                        <li
                           className=""
                           key={category.node.id}
                        >
                           {category.node.name}
                        </li>
                     ))}
                  </div>
               </ul>
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