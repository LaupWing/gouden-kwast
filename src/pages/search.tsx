import { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { ContactBanner } from "~/components"

const SearchPage: React.FC<PageProps> = () => {
   return (
      <>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-600">
            <div className="flex">
               <input type="text" />
            </div>
         </main>
         <ContactBanner />
      </>
   )
}

export default SearchPage

export const Head: HeadFC = () => <title>Zoeken</title>