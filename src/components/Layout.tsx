import * as React from "react"
import { HiPaintBrush } from "react-icons/hi2"
import { Link } from "gatsby"

const temp_links = [
   {
      to: "/",
      name: "Home"
   },
   {
      to: "/",
      name: "Onze diensten"
   },
   {
      to: "/",
      name: "Portfolio"
   },
   {
      to: "/",
      name: "Vactures"
   },
   {
      to: "/",
      name: "Contact"
   },
]

const Layout:React.FC<React.PropsWithChildren> = ({
   children
}) =>{
   return (
      <div className="w-screen h-screen flex flex-col">
         <Header />
         {children}
      </div>
   )
}
export default Layout


const Header = () => {
   return (
      <header className="w-full">
         <nav className="flex justify-between items-start">
            <div className="w-44 h-28 bg-slate-600 text-yellow-400 flex flex-col items-center justify-center">
               <HiPaintBrush size={30} />
               <h1 className="flex flex-col items-center leading-5"><span>Gouden</span>  <span>Kwast</span></h1>
            </div>
            <ul className="uppercase text-slate-600 font-semibold space-x-4 flex">
               {temp_links.map(link => (
                  <Link 
                     className="px-4 py-6 flex"
                     to={link.to}
                  >
                     { link.name }
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}