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
            <section className="py-16 flex flex-col items-center bg-slate-500">
               <div className="container">
                  <h2 className="text-slate-100 text-3xl">Recente werk</h2>
               </div>
               <img src="https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432__340.jpg" alt="" />
            </section>
            <section className="bg-slate-200 grid grid-cols-2 h-minus-nav">
               <img className="h-full object-cover" src="https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <div className="p-10 flex flex-col items-center justify-center">
                  <RequestForm />
               </div>
            </section>
         </main>
      </Layout>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>