import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Quotes from "../components/Quotes"
import RequestForm from "../components/RequestForm"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <main className="flex-1">
            <Hero />
            <Quotes />
            <div className="bg-red-400">
               <RequestForm />
            </div>
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>