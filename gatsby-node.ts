import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
   actions,
   graphql
}) => {
   const test = await graphql(`
      query {
         wp {
            readingSettings {
               postsPerPage
            }
         }  
      }
   `)

   console.log(test)
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
}