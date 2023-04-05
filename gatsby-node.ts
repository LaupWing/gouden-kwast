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
   console.log(Math.ceil(resultBlogs.data!.allWpPost!.totalCount / resultBlogs.data!.wp!.readingSettings!.postsPerPage!))
   console.log(resultBlogs)
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
}