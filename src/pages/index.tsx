import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import Hero from "../components/Hero"
import { Layout } from "../components"
import Quotes from "../components/Quotes"
import RequestForm from "../components/RequestForm"
import data from "../dummy/projects.json"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <Layout>
         <main className="flex-1">
            <Hero />
            <Quotes />
            <section className="py-24 flex flex-col items-center bg-slate-700">
               <div className="container p-6">
                  <h2 className="text-slate-100 text-3xl mb-4">Recente werk</h2>
                  <div className="grid lg:grid-cols-3 lg:gap-4 gap-y-10">
                     {data.map(x => (
                        <div className="flex flex-col">
                           <div className="aspect-[4/3] relative">
                              <img 
                                 className="w-full h-full object-cover" 
                                 src={x.project_image} 
                                 alt="" 
                              />
                              <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
                                 <h2 className="text-lg leading-5">{x.project_title}</h2>
                                 <p className="text-xs text-slate-400 mt-1">{x.end_date}</p>
                              </div>
                           </div>
                           <p className="mt-1 text-slate-50 mb-4 text-sm">{x.project_description}</p>
                           <button className="mt-auto mr-auto py-1 px-4 text-white uppercase text-sm rounded bg-indigo-400 font-bold tracking-wider shadow">Lees meer</button>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
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