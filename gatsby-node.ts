import { GatsbyNode } from "gatsby"
import { RootQuery } from "./src/generated/graphql"

export const createPages: GatsbyNode["createPages"] = async ({
   actions,
   graphql,
   reporter
}) => {
   const resultBlogs = await graphql<{
      wp: RootQuery
      allWpPost: {
         totalCount: number
      }
   }>(`#graphql
      query {
         wp {
            readingSettings {
               postsPerPage
            }
         }  
         allWpPost {
            totalCount
         }
      }
   `)

   if(resultBlogs.errors){
      reporter.panicOnBuild("Something went wrong!", resultBlogs.errors)
   }
   const postsPerPage = resultBlogs.data!.wp!.readingSettings!.postsPerPage!
   const numberOfPosts = resultBlogs.data!.allWpPost!.totalCount
   const numberOfPages = Math.ceil(numberOfPosts / postsPerPage) 
   Array.from({
      length: numberOfPages
   }).forEach((_,i:number)=>{
      console.log(i)
   })
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
}