import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout } from "../components"

const OnzeDienstenPage: React.FC<PageProps> = ({ data }) => {
   return (
      <Layout>
         <main className="flex-1 pt-10 bg-slate-500">Tessst</main>
      </Layout>
   )
}

export default OnzeDienstenPage

export const Head: HeadFC = () => <title>Onze diensten</title>

export const pageQuery = graphql`
   query MyQuery {
      allWpPage(filter: { parentId: { eq: "cG9zdDo5OA==" } }) {
         nodes {
            link
            slug
            uri
            title
            parentId
         }
      }
   }
`
