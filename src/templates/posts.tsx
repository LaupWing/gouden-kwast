import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { BlogCard, ContactBanner } from "~/components"
import { PostConnection } from "~/generated/graphql"

const PostsPage: React.FC<PageProps<{
   allWpPost: PostConnection
}>> = ({data, pageContext}) => {
   console.log(data.allWpPost)
   return (
      <>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-800">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Portfolio</h2>
            <section className="grid grid-cols-2 gap-10 container m-auto">
               {data.allWpPost.nodes.map(blog => (
                  <BlogCard 
                     blog={blog}
                     key={blog.id}
                  />
               ))}
            </section>
            <Pagination />
         </main>
         <ContactBanner />
      </>
   )
}

const Pagination = () => {
   return (
      <div className="flex justify-between mt-14 items-center max-w-xs mx-auto">
         <button className="btn-primary">Nieuwer</button>
         <button className="btn-primary">Ouder</button>
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