import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"

const IndexPage: React.FC<PageProps> = () => {
   return (
      <main className="w-screen h-screen bg-red-200">
      </main>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>