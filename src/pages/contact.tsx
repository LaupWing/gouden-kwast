import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { ContactBanner } from "~/components"
import RequestForm from "~/components/RequestForm"

const ContactPage: React.FC<PageProps> = () => {
   return (
      <>
         <main className="flex-1 lg:p-10 p-4 flex flex-col items-center justify-center bg-slate-200">
            <RequestForm />
         </main>
         <ContactBanner />
      </>
   )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Page</title>