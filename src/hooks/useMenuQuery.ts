import { graphql, useStaticQuery } from "gatsby"

export const useMenuQuery = () => {
   const data = useStaticQuery(graphql`
      query {
         wpMenu(name: {eq: "mainMenu"}){
            menuItems {
               nodes {
                  label
                  parentId
                  id
                  url
                  childItems {
                     nodes {
                        id
                        url
                        label
                     }
                  }
               }
            }
         }
      }
   `)

   return data.wpMenu.menuItems.nodes
}