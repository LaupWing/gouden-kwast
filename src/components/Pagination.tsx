import * as React from "react"
import { Link } from "gatsby"

export const Pagination:React.FC<{
   currentPage: number
   numberOfPages: number
   categoryUri: string
}> = ({
   currentPage,
   numberOfPages,
   categoryUri
}) => {
   return (
      <div className="flex col-span-full gap-4 mt-14 items-center mx-auto">
         <Link
            to={`${categoryUri}/${currentPage === 2 ? "" : currentPage -1}`}
            className={currentPage > 1 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="btn-primary">Nieuwer</button>
         </Link>
         <span className="text-slate-50">{currentPage} / {numberOfPages}</span>
         <Link
            to={`${categoryUri}/${currentPage + 1}`}
            className={currentPage < numberOfPages 
               ? "opacity-100"
               : "opacity-0 pointer-events-none"}
         >
            <button className="btn-primary">Ouder</button>
         </Link>
      </div>
   )
}
