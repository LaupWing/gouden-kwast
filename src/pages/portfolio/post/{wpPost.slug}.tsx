import * as React from "react"
import { ContactBanner } from "~/components"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Post } from "~/generated/graphql"
import { Category } from "~/generated/graphql"

const PostDetailPage: React.FC<PageProps<{
   wpPost: Post
}>> = ({ data }) => {
   return (
      <>
         <main className="flex-1 bg-slate-200">
            <div className="relative flex">
               <div className="absolute inset-0 bg-slate-200/40 z-50"/>
               <div className="absolute z-[100] flex justify-center items-center inset-0">
                  <div className="flex flex-col items-center">
                     <h2 className="uppercase font-display font-bold text-yellow-400 tracking-wider bg-slate-800/70 text-xl backdrop-blur px-8 py-3 rounded shadow">
                        {data.wpPost.title!}
                     </h2>
                     <div className="mt-2 flex gap-3 tracking-wider font-bold uppercase text-sm flex-wrap">
                        {data.wpPost.categories?.nodes.map((category: Category) => (
                           <div 
                              className="px-3 py-1 rounded bg-slate-700/60 backdrop-blur text-yellow-400"
                              key={category.id}
                           >
                              {category.name}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <GatsbyImage
                  // @ts-ignore
                  image={getImage(data.wpPost.featuredImage?.node.gatsbyImage)!}
                  alt={data.wpPost.title!}
                  className="w-full object-cover max-h-60 h-[30vh]"
               />
            </div>
            <section id="page" className="py-10 px-6 container mx-auto">
               <div
                  className="container mx-auto"
                  dangerouslySetInnerHTML={{
                     __html: data.wpPost.content!
                  }}
               />
            </section>
         </main>
         <ContactBanner />
      </>
   )
}
export default PostDetailPage

export const pageQuery = graphql`
   query PostDetailQuery($id: String!) {
      wpPost(id: {eq: $id}) {
         content
         title
         id
         categories {
            nodes {
               name
               id
            }
         }
         featuredImage {
            node {
               gatsbyImage(placeholder: DOMINANT_COLOR, width: 720)
            }
         }
      }
   }
`