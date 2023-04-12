import * as React from "react"
import { useState } from "react"
import { CategoryConnectionEdge, PostConnection } from "~/generated/graphql"
import { motion } from "framer-motion"
import { Pagination } from "./Pagination"
import { BlogCard } from "./BlogCard"
import { CategoriesMenu } from "./CategoriesMenu"
import { ContactBanner } from "./ContactBanner"

export const CategorySection: React.FC<{
   posts: PostConnection
   categories: CategoryConnectionEdge[]
   numberOfPages: number
   currentPage: number
   categoryUri: string
}> = ({
   categories,
   posts,
   numberOfPages,
   currentPage,
   categoryUri
}) => {
   const [showSideNav, setShowSideNav] = useState(false)
   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
         },
      },
   }
   const item = {
      hidden: { 
         opacity: 0,
         y: 20
      },
      show: { 
         opacity: 1,
         y: 0 
      },
   }
   return (
      <>
         <main className="flex-1 p-8 py-12 md:p-10 md:py-20 bg-slate-800">
            <h2 className="container mx-auto text-slate-100 text-3xl mb-4">Portfolio</h2>
            <div className="flex items-start gap-2 md:gap-4 relative container mx-auto overflow-hidden">
               <motion.section 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 container m-auto"
                  variants={container}
                  initial="hidden"
                  animate="show"
               >
                  {posts.nodes.map(blog => (
                     <motion.div
                        variants={item}
                        key={blog.id}
                     >
                        <BlogCard
                           blog={blog}
                        />
                     </motion.div>
                  ))}
                  <Pagination
                     currentPage={currentPage}
                     numberOfPages={numberOfPages}
                     categoryUri={categoryUri}
                  />
               </motion.section>
               <CategoriesMenu
                  categories={categories}
               />
            </div>
            
         </main>
         <ContactBanner />
      </>
   )
}