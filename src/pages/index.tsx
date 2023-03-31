import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Hero from "../components/Hero"
import { Layout, RecentWork } from "../components"
import Quotes from "../components/Quotes"
import RequestForm from "../components/RequestForm"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <main className="flex-1">
            <Hero />
            <Quotes />
            <RecentWork />
            <section 
               className="bg-slate-200 grid lg:grid-cols-2 h-minus-nav"
               id="contact"
            >
               <img className="h-full hidden lg:block object-cover" src="https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <div className="lg:p-10 p-4 flex flex-col items-center justify-center">
                  <RequestForm />
               </div>
            </section>
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>