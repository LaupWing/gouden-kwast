import { graphql, useStaticQuery } from "gatsby"
import { GeneralSettings } from "../generated/graphql"

export const useWpSettings = () => {
   const data = useStaticQuery(graphql`
      query {
         wp {
            generalSettings {
               url
               email
            }
         }
      }
   `) 
   return data.data.wp.generalSettings as GeneralSettings
}