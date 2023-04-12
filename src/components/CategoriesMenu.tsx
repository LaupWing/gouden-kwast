import * as React from "react"
import { CategoryConnectionEdge } from "~/generated/graphql"
import { Link } from "gatsby"
import { HiOutlineMenuAlt1 } from "react-icons/hi"

export const CategoriesMenu:React.FC<{
   categories:  CategoryConnectionEdge[]
}> = ({
   categories
}) => {
   return (
      <>
         <CategoriesMenuDesktop 
            categories={categories} 
         />
         <CategoriesMenuMobile 
            categories={categories} 
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
   categories:  CategoryConnectionEdge[]
}> = ({
   categories
}) => (
   <>
      <HiOutlineMenuAlt1 size={26} className="text-white" />
      <ul className="bg-slate-50 w-60 md:hidden hidden flex-col flex-shrink-0 rounded py-4 px-8 absolute right-0">
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
   </>
)