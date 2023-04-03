import * as React from "react"
import { Layout } from "~/components"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Page } from "~/generated/graphql"
import "./page.module.scss"

const OnzeDienstenDetail: React.FC<PageProps<{
   wpPage: Page 
}>> = ({ data }) => {
   
   return (
      <Layout>
         <main className="flex-1 bg-slate-200">
            <div className="relative flex">
               <div className="absolute inset-0 bg-slate-200/40 z-50"/>
               <div className="absolute z-[100] flex justify-center items-center inset-0">
                  <h2 className="uppercase font-display font-bold text-yellow-400 tracking-wider bg-slate-800/70 text-xl backdrop-blur px-8 py-3 rounded shadow">
                     {data.wpPage.title!}
                  </h2>
               </div>
               <GatsbyImage
                  // @ts-ignore
                  image={getImage(data.wpPage.featuredImage?.node.gatsbyImage)!}
                  alt={data.wpPage.title!}
                  className="w-full object-cover max-h-60 h-[30vh]"
               />
            </div>
            <section className="py-10">
               <div
                  className="container mx-auto"
                  dangerouslySetInnerHTML={{
                     __html: data.wpPage.content!
                  }}
               />
            </section>
         </main>
      </Layout>
   )
}
export default OnzeDienstenDetail

export const pageQuery = graphql`
   query OnzeDienstenDetail($id: String!) {
      wpPage(id: {eq: $id}) {
         content
         title
         featuredImage {
            node {
               gatsbyImage(placeholder: TRACED_SVG, width: 720)
            }
         }
      }
   }
`