import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as React from "react"
import type { FC } from "react"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useState } from "react"
import { HiPaintBrush } from "react-icons/hi2"
import { Link } from "gatsby"
import { AiFillInstagram, AiFillPhone } from "react-icons/ai"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { IoArrowForwardCircle, IoClose } from "react-icons/io5"
import { BiMenuAltRight } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"
import { LinkType } from "../typings"
import { useMenuQuery } from "../hooks/useMenuQuery"
import { MenuItem } from "../generated/graphql"

const temp_links = [
   {
      to: "/",
      name: "Home"
   },
   {
      to: "/onze-diensten",
      name: "Onze diensten",
      links: [
         {
            to: "test1",
            name: "test1"
         },
         {
            to: "test2",
            name: "test2"
         },
         {
            to: "test3",
            name: "test3"
         },
      ]
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

export const Layout:React.FC<React.PropsWithChildren> = ({
   children
}) =>{
   const [openDrawer, setOpenDrawer] = useState(false)

   return (
      <div className="w-screen h-screen flex flex-col fixed inset-0 overflow-y-auto">
         <HeaderDesktop />
         <HeaderMobile openDrawer={() => setOpenDrawer(true)} />
         <AnimatePresence>
            {openDrawer && <MobileMenuNav closeDrawer={() => setOpenDrawer(false)} />}
         </AnimatePresence>
         {children}
         <Footer/>
      </div>
   )
}

const HeaderDesktop = () => {
   const links:MenuItem[] = useMenuQuery() 

   console.log(links)
   return (
      <header className="w-full lg:flex flex-col hidden sticky top-0 bg-white z-[10000]">
         <nav className="flex items-start relative">
            <div className="w-44 h-28 bg-slate-600 text-yellow-400 flex flex-col items-center justify-center absolute top-0 left-0">
               <HiPaintBrush size={30} />
               <h1 className="flex flex-col font-display items-center leading-4"><span>Gouden</span>  <span>Kwast</span></h1>
            </div>
            <ul className="uppercase h-nav text-slate-600 font-semibold space-x-4 flex text-sm ml-auto">
               {links.filter(x => !x.parentId).map(link => (
                     link.childItems?.nodes.length! > 0 ? (
                        <></>
                        // <HeaderDesktopDropdown 
                        //    link={link} 
                        //    key={link.name}
                        // />
                     ) : (
                        <Link 
                           className="px-4 flex items-center tracking-wider"
                           to={link.url!}
                           activeClassName="bg-black/10"
                           key={link.id}
                        >
                           { link.label }
                        </Link>
                     )
               ))}
               <div className="bg-yellow-400 tracking-wide flex items-center justify-center px-10 text-slate-600">
                  Bel: 061234567
               </div>
            </ul>
         </nav>
      </header>
   )
}

const HeaderDesktopDropdown:FC<{
   link: LinkType
}> = ({ link }) => {
   return (
      <Menu 
         as={"div"}
         className="relative flex"
      >
         <div className="space-x-2 px-4 flex items-center">
            <Link 
               className="flex items-center tracking-wider"
               to={link.to}
               activeClassName="bg-black/10"
               key={link.name}
            >
               { link.name }
            </Link>
            <Menu.Button>
               <FiChevronDown size={20} />
            </Menu.Button>
         </div>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-65"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <Menu.Items className={"absolute -bottom-1 shadow text-left transform translate-y-full flex flex-col bg-white w-full rounded divide-y"}>
               {link.links!.map(x => 
                  <Menu.Item
                     key={x.name}
                  >
                     {({active}) => (
                        <button className="w-full text-left px-4 py-2">
                           {x.name}
                        </button>
                     )}
                  </Menu.Item>
               )}
            </Menu.Items>
         </Transition>
      </Menu>
   )
}


const HeaderMobile = ({
   openDrawer
}: {
   openDrawer: () => void
}) => {
   return (
      <header className="w-full lg:hidden flex justify-between items-center text-white sticky top-0 bg-slate-800 z-[1000] p-3 px-4">
         <div className="justify-start flex-1 flex">
            <BiMenuAltRight 
               size={30} 
               onClick={openDrawer}
            />
         </div>
         <div className=" text-yellow-400 self-stretch flex-1 flex items-center justify-center">
            <HiPaintBrush size={30} />
            <h1 className="flex flex-col font-display items-center leading-4"><span>Gouden</span>  <span>Kwast</span></h1>
         </div>
         <div className="flex-1 flex justify-end">
            <BsSearch size={24} />
         </div>
      </header>
   )
}

const MobileMenuNav = ({
   closeDrawer
}: {
   closeDrawer: () => void
}) => {
   const container = {
      hidden: {  },
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
         },
      },
   }

   const item = {
      hidden: { scale: 0 },
      show: { scale: 1 },
   }
   return (
      <motion.div 
         className="w-screen h-screen text-slate-800 p-8 bg-white z-[10000] fixed inset-0"
         initial={{
            x: "-100%"
         }}
         animate={{
            x: "0",
            transition: {
               type: "spring",
               damping: 20
            }
         }}
         exit={{
            x: "-100%"
         }}
      >
         <header className="flex justify-between items-center">
            <span className="font-display font-bold text-xl">Menu</span>
            <IoClose 
               size={24} 
               onClick={closeDrawer}
            />
         </header>
         <nav className="grid">
            <motion.ul 
               className="grid gap-4 py-10"
               variants={container}
               initial="hidden"
               animate="show"
            >
               {temp_links.map(link => (
                  <motion.li
                     key={link.name}
                     variants={item}
                  >
                     <Link 
                        className="flex items-center tracking-wider"
                        to={link.to}
                        activeClassName="text-yellow-500"
                     >
                        { link.name }
                     </Link>
                  </motion.li>
               ))}
            </motion.ul>
         </nav>
      </motion.div>
   )
}

const Footer = () => {
   return (
      <footer className="bg-slate-700 flex flex-col items-center">
         <div className="container py-10 px-6 lg:px-0 flex lg:flex-row flex-col justify-between lg:items-center items-start">
            <h2 className="text-2xl font-bold text-slate-200">Geïnteresseerd?</h2>
            <div className="flex text-yellow-400 uppercase tracking-wider items-center font-bold text-sm">
               Contacteer ons 
               <IoArrowForwardCircle className="ml-2" size={24}/>
            </div>
         </div>
         <div className="container text-slate-400 py-10 lg:px-0 px-6 flex justify-between lg:flex-row flex-col space-y-10 lg:space-y-0">
            <section className="space-y-6">
               <h1 className="text-slate-200 text-xl">Gouden kwast</h1>
               <ul className="text-sm space-y-2">
                  <li>Vredenoord 109</li>
                  <li>1852 WJ, HEILOO</li>
                  <li>KVK 12345678910</li>
               </ul>
               <ul className="text-sm space-y-2">
                  <li className="flex">
                     <AiFillPhone className="mr-1 text-yellow-500" size={22} />
                     06123456789
                  </li>
                  <li className="flex">
                     <MdEmail className="mr-1 text-yellow-500" size={22} />
                     bastiaan@goudenkwast.nl
                  </li>
               </ul>
            </section>
            <div className="text-slate-400 flex lg:flex-row lg:space-y-0 space-y-10 flex-col lg:space-x-16">
               <section className="flex flex-col flex-1">
                  <h2 className="text-slate-200 text-xl mb-4">Navigatie</h2>
                  <ul className="flex flex-col flex-1 space-y-2 lg:space-y-0 justify-around">
                     {temp_links.map(link => (
                        <li 
                           key={link.name}
                           className="text-sm"
                        >
                           { link.name }
                        </li>
                     ))}
                  </ul>
               </section>
               <section className="flex flex-col flex-1 flex-shrink-0 whitespace-nowrap">
                  <h2 className="text-slate-200 text-xl mb-4">Social Media</h2>
                  <ul className="flex flex-col flex-1 justify-around space-y-3 lg:space-y-0">
                     <li className="text-sm flex items-center">
                        <AiFillInstagram size={24} className="mr-2 text-yellow-500" /> Instagram
                     </li>
                     <li className="text-sm flex items-center">
                        <FaFacebookSquare size={24} className="mr-2 text-yellow-500" /> Facebook
                     </li>
                     <li className="text-sm flex items-center">
                        <FaLinkedin size={24} className="mr-2 text-yellow-500" /> LinkedIn
                     </li>
                  </ul>
               </section>
            </div>
         </div>
         <div className="container py-10 lg:px-0 px-6 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} / Gouden Kwast is created by LaupWing.
         </div>
      </footer>
   )
}