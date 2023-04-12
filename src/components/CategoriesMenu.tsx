import * as React from "react"
import { Dispatch, SetStateAction } from "react"
import { CategoryConnectionEdge } from "~/generated/graphql"
import { Link } from "gatsby"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { IconClose } from "./Icons"
import { AnimatePresence, motion } from "framer-motion"

export const CategoriesMenu:React.FC<{
   categories: CategoryConnectionEdge[]
   showSideNav: boolean
   setShowSideNav: Dispatch<SetStateAction<boolean>>
}> = ({
   categories,
   showSideNav,
   setShowSideNav
}) => {
   return (
      <>
         <CategoriesMenuDesktop 
            categories={categories} 
         />
         <CategoriesMenuMobile 
            categories={categories} 
            setShowSideNav={setShowSideNav}
            showSideNav={showSideNav}
         />
      </>
   )
}

const CategoriesMenuDesktop:React.FC<{
   categories:  CategoryConnectionEdge[]
}> = ({
   categories
}) => (
   <ul className="bg-slate-50 hidden md:flex flex-col flex-shrink-0 rounded py-4 px-8">
      <li className="uppercase font-bold text-xs tracking-widest text-slate-400">
         <h2>Categoriën</h2>
      </li>
      <div className="flex flex-col gap-2 my-4">
         <Link 
            to="/portfolio"
            className="text-slate-500/50 hover:text-slate-500/80 duration-500"
            activeClassName="!text-slate-500"
         >
            <li>Alle</li>
         </Link>
         {categories.map(category => (
            <Link 
               to={category.node.uri!}
               className="text-slate-500/50 hover:text-slate-500/80 duration-500"
               activeClassName="!text-slate-500"
               partiallyActive
               key={category.node.id}
            >
               <li
                  className=""
                  key={category.node.id}
               >
                  {category.node.name}
               </li>
            </Link>
         ))}
      </div>
   </ul>
)

const CategoriesMenuMobile:React.FC<{
   categories: CategoryConnectionEdge[]
   showSideNav: boolean
   setShowSideNav: Dispatch<SetStateAction<boolean>>
}> = ({
   categories,
   showSideNav,
   setShowSideNav
}) => (
   <>
      {!showSideNav && (
         <HiOutlineMenuAlt1 
            size={26} 
            className="text-white" 
            onClick={() => setShowSideNav(true)}
         />
      )}
      <AnimatePresence>
         {showSideNav && (
            <motion.ul 
               className="bg-slate-50 flex w-60 md:hidden flex-col flex-shrink-0 rounded py-4 px-8 absolute right-0"
               initial={{
                  x: "100%"
               }}
               exit={{
                  x: "100%"
               }}
               animate={{
                  x: 0
               }}
            >
               <li className="uppercase font-bold text-xs flex justify-between items-center tracking-widest text-slate-400">
                  <h2>Categoriën</h2>
                  <IconClose 
                     size={22} 
                     onClick={() => setShowSideNav(false)}
                  />
               </li>
               <div className="flex flex-col gap-2 my-4">
                  <Link 
                     to="/portfolio"
                     className="text-slate-500/50 hover:text-slate-500/80 duration-500"
                     activeClassName="!text-slate-500"
                  >
                     <li>Alle</li>
                  </Link>
                  {categories.map(category => (
                     <Link 
                        to={category.node.uri!}
                        className="text-slate-500/50 hover:text-slate-500/80 duration-500"
                        activeClassName="!text-slate-500"
                        partiallyActive
                        key={category.node.id}
                     >
                        <li
                           className=""
                           key={category.node.id}
                        >
                           {category.node.name}
                        </li>
                     </Link>
                  ))}
               </div>
            </motion.ul>
         )}
      </AnimatePresence>
   </>
)