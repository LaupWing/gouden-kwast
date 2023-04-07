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
      <ul className="bg-slate-50 rounded py-4 px-6">
         <li className="uppercase font-bold text-xs tracking-wider text-slate-400">
            <h2>Categoriën</h2>
         </li>
         <div className="flex flex-col gap-2 mt-2">
            {categories.map(category => (
               <Link 
                  to={categoryUri + category.node.uri!}
                  activeClassName="text-yellow-400"
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