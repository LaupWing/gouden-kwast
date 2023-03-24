import * as React from "react"
import { HiPaintBrush } from "react-icons/hi2"
import { Link } from "gatsby"
import { AiFillInstagram, AiFillPhone } from "react-icons/ai"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoArrowForwardCircle } from "react-icons/io5"

const temp_links = [
   {
      to: "/",
      name: "Home"
   },
   {
      to: "/onze-diensten",
      name: "Onze diensten"
   },
   {
      to: "/portfolio",
      name: "Portfolio"
   },
   {
      to: "/vacatures",
      name: "Vactures"
   },
   {
      to: "/contact",
      name: "Contact"
   },
]

const Layout:React.FC<React.PropsWithChildren> = ({
   children
}) =>{
   return (
      <div className="w-screen h-screen flex flex-col fixed inset-0 overflow-y-auto">
         <Header />
         {children}
         <Footer/>
      </div>
   )
}
export default Layout


const Header = () => {
   return (
      <header className="w-full sticky top-0 bg-white z-[10000]">
         <nav className="flex items-start relative">
            <div className="w-44 h-28 bg-slate-600 text-yellow-400 flex flex-col items-center justify-center absolute top-0 left-0">
               <HiPaintBrush size={30} />
               <h1 className="flex flex-col font-display items-center leading-4"><span>Gouden</span>  <span>Kwast</span></h1>
            </div>
            <ul className="uppercase h-nav text-slate-600 font-semibold space-x-4 flex text-sm ml-auto">
               {temp_links.map(link => (
                  <Link 
                     className="px-4 flex items-center tracking-wider"
                     to={link.to}
                     activeClassName="bg-black/10"
                  >
                     { link.name }
                  </Link>
               ))}
               <div className="bg-indigo-400 tracking-wide flex items-center justify-center px-10 text-white">
                  Bel: 061234567
               </div>
            </ul>
         </nav>
      </header>
   )
}

const Footer = () => {
   return (
      <footer className="bg-slate-700 flex flex-col items-center">
         <div className="container py-10 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-200">Geïnteresseerd?</h2>
            <div className="flex text-indigo-400 uppercase tracking-wider items-center font-bold text-sm">
               Contacteer ons 
               <IoArrowForwardCircle className="ml-2" size={24}/>
            </div>
         </div>
         <div className="container text-slate-400 py-10 flex justify-between">
            <section className="space-y-4">
               <h1 className="text-slate-200 text-xl">Gouden kwast</h1>
               <ul className="text-sm space-y-1">
                  <li>Vredenoord 109</li>
                  <li>1852 WJ, HEILOO</li>
                  <li>KVK 12345678910</li>
               </ul>
               <ul className="text-sm space-y-1">
                  <li className="flex">
                     <AiFillPhone className="mr-1 text-indigo-500" size={22} />
                     06123456789
                  </li>
                  <li className="flex">
                     <MdEmail className="mr-1 text-indigo-500" size={22} />
                     bastiaan@goudenkwast.nl
                  </li>
               </ul>
            </section>
            <div className="text-slate-400 flex space-x-16">
               <section className="flex flex-col flex-1">
                  <h2 className="text-slate-200 text-xl mb-4">Navigatie</h2>
                  <ul className="flex flex-col flex-1 justify-around">
                     {temp_links.map(link => (
                        <li 
                           className="text-sm"
                        >
                           { link.name }
                        </li>
                     ))}
                  </ul>
               </section>
               <section className="flex flex-col flex-1 flex-shrink-0 whitespace-nowrap">
                  <h2 className="text-slate-200 text-xl mb-4">Social Media</h2>
                  <ul className="flex flex-col flex-1 justify-between">
                     <li className="text-sm flex items-center">
                        <AiFillInstagram size={24} className="mr-2 text-indigo-500" /> Instagram
                     </li>
                     <li className="text-sm flex items-center">
                        <FaFacebookSquare size={24} className="mr-2 text-indigo-500" /> Facebook
                     </li>
                     <li className="text-sm flex items-center">
                        <FaLinkedin size={24} className="mr-2 text-indigo-500" /> LinkedIn
                     </li>
                  </ul>
               </section>
            </div>
         </div>
         <div className="container py-10 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} / Gouden Kwast is created by LaupWing.
         </div>
      </footer>
   )
}