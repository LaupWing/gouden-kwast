import { GatsbyNode } from "gatsby"
import { CategoryConnection, RootQuery } from "./src/generated/graphql"
import path from "path"

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
      allWpCategory: CategoryConnection
   }>(`#graphql
      query {
         wp {
            readingSettings {
               postsPerPage
            }
         }  
         allWpCategory {
            edges {
               node {
                  id
                  name
                  count
                  uri
                  slug
                  parentId
               }
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
   const blogPostTemplate = path.resolve("./src/templates/posts.tsx")

   Array.from({
      length: numberOfPages
   }).forEach((_,i:number)=>{
      actions.createPage({
         path: i === 0 
            ? "/portfolio"
            : `/portfolio/${i + 1}`,
         component: blogPostTemplate,
         context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numberOfPages,
            currentPage: i + 1,
            categories: resultBlogs.data?.allWpCategory.edges
         }
      })
   })
}