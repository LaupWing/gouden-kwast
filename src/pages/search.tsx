import { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { ContactBanner, IconSearch } from "~/components"

const SearchPage: React.FC<PageProps> = () => {
   // const onSubmit = (e) => {

   // }

   return (
      <>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-600">
            <form 
               className="flex rounded overflow-hidden">
               <input 
                  type="text" 
                  className="py-1 flex-1 border-none" 
                  placeholder="Zoeken naar"
               />
               <button 
                  className="bg-yellow-400 py-2 w-16 flex items-center justify-center text-slate-800"
                  type="submit"
               >
                  <IconSearch size={22}/>
               </button>
            </form>
         </main>
         <ContactBanner />
      </>
   )
}

export default SearchPage

export const Head: HeadFC = () => <title>Zoeken</title>