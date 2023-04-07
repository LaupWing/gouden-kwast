import * as React from "react"
import { CategoryConnectionEdge } from "~/generated/graphql"
import { Link } from "gatsby"

export const CategoriesMenu:React.FC<{
   categories:  CategoryConnectionEdge[]
   categoryUri: string
}> = ({
   categories,
   categoryUri
}) => {
   return (
      <ul className="bg-slate-50 rounded py-4 px-8">
         <li className="uppercase font-bold text-xs tracking-widest text-slate-400">
            <h2>Categoriën</h2>
         </li>
         <div className="flex flex-col gap-2 my-4">
            {categories.map(category => (
               <Link 
                  to={categoryUri + category.node.uri!.split('/.')[1]}
                  className="text-slate-500/50 hover:text-slate-500/80 duration-500"
                  activeClassName="!text-slate-500"
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
}