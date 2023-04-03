import { graphql, useStaticQuery } from "gatsby"
import { Page } from "~/generated/graphql"

export const useContactInfo = () => {
   const data = useStaticQuery(graphql`
      query {
         wpPage(id: {eq: "cG9zdDo3"}) {
            title
            id
            contactInformation {
               city
               email
               facebook
               instagram
               linkedin
               phonenumber
               streetAndStreetnumber
               zipcode
            }
         }
      }
   `)
   return data.wpPage  as Page
}