import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <main className="flex-1">
            <Hero />
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>