import { HeadFC, PageProps, graphql } from "gatsby"
import * as React from "react"
import { Layout } from "../components"

const OnzeDienstenPage: React.FC<PageProps> = ({data, serverData}) => {
   console.log(serverData)
   console.log(data)
   return (
      <Layout>
         <main className="flex-1 pt-10">
            Tessst
         </main>
      </Layout>
   )
}

export default OnzeDienstenPage

export const Head: HeadFC = () => <title>Onze diensten</title>

export const pageQuery = graphql`
   query {
      wpPage(title: {eq: "About"}) {
         id
         title
         content
         featuredImage {
            node {
               id
               localFile {
                  childImageSharp {
                     gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
                  }
               }
            }
         }
      }
   }

`