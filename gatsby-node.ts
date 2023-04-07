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
   const categoryPostTemplate = path.resolve("./src/templates/categoryPosts.tsx")
   const removedUncategorized = resultBlogs.data?.allWpCategory.edges.filter(x =>
      x.node.name !== "Uncategorized"
   )
   const categories = removedUncategorized!.map(x => ({
      node: {
         ...x.node,
         uri: "/portfolio" + x.node.uri!.split('/.')[1]
      }
   }))
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
            categories,
            categoryUri: "/portfolio/",
         }
      })
   })
   
   removedUncategorized!.map(category =>{
      const numberOfCategoryPosts = category.node.count!
      const numberOfCategoryPages = Math.ceil(numberOfCategoryPosts / postsPerPage)

      if(numberOfCategoryPosts > 0){
         Array.from({
            length: numberOfCategoryPages
         }).forEach((_, i) => {
            const cleanCategoryUri = category.node.uri!.split('/.')[1] 
            actions.createPage({
               path: i === 0 
                  ? `/portfolio${cleanCategoryUri}`
                  : `/portfolio${cleanCategoryUri}${i + 1}`,
               component: categoryPostTemplate,
               context: {
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numberOfPages: numberOfCategoryPages,
                  currentPage: i + 1,
                  categoryId: category.node.id,
                  categories,
                  categoryUri: "/portfolio" + cleanCategoryUri,
               }
            })
         })
      }
   })
}