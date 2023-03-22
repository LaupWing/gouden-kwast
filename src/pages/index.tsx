import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <main className="">
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>