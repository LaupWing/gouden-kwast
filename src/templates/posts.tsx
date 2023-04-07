import { HeadFC, Link, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, ContactBanner } from "~/components"
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
                        <Link 
                           to={category.node.uri!}
                           activeClassName="text-yellow-400"
                        >
                           <li
                              className=""
                              key={category.node.id}
                           >
                              {category.node.name}
                           </li>
                        </Link>
                     ))}
                  </div>
               </ul>
            </div>
            
         </main>
         <ContactBanner />
      </>
   )
}

const Pagination:React.FC<{
   currentPage: number
   numberOfPages: number
   categoryUri: string
}> = ({
   currentPage,
   numberOfPages,
   categoryUri
}) => {
   return (
      <div className="flex col-span-full gap-4 mt-14 items-center mx-auto">
         <Link
            to={`${categoryUri}${currentPage === 2 ? "" : currentPage -1}`}
            className={currentPage > 1 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="btn-primary">Nieuwer</button>
         </Link>
         <span className="text-slate-50">{currentPage} / {numberOfPages}</span>
         <Link
            to={`${categoryUri}${currentPage + 1}`}
            className={currentPage < numberOfPages 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="btn-primary">Ouder</button>
         </Link>
      </div>
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