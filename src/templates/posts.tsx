import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { ContactBanner } from "~/components"

const PostsPage: React.FC<PageProps> = ({data}) => {
   console.log(data)
   return (
      <>
         <main className="flex-1">
            <section 
               className="bg-slate-200 grid lg:grid-cols-2 h-minus-nav"
            >
            </section>
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
         totalCount
      }
   }
`