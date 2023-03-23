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
            <div className="bg-slate-200 grid grid-cols-2 h-[calc(100vh - h-nav)]">
               <img className="h-full object-cover" src="https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <div className="p-10">
                  <RequestForm />
               </div>
            </div>
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>