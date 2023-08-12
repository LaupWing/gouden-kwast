import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as React from "react"
import type { FC } from "react"
import { useEffect, useId } from "react"
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { useState } from "react"
import { HiPaintBrush } from "react-icons/hi2"
import { Link } from "gatsby"
import { AiFillInstagram, AiFillPhone } from "react-icons/ai"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { IoClose } from "react-icons/io5"
import { BiMenuAltRight } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"
import { MenuItem } from "~/generated/graphql"
import { getMainMenu, parsedMenu } from "~/lib/utils"
import clsx from "clsx"
import { useContactInfo } from "~/hooks/useContactInfo"
import "../styles/page.scss"
import { IconSearch } from "~/components"
import { StaticImage } from "gatsby-plugin-image"

const Layout:React.FC<{
   children: React.ReactNode
}> = ({
   children
}) =>{
   const [openDrawer, setOpenDrawer] = useState(false)
   const [initial, setInitial] = useState(false)

   if(!initial){
      return (
         <motion.div 
            className="inset-0 bg-white fixed flex items-center justify-center"
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1,
               transition: {
                  delay: 1
               }
            }}
         >
            <motion.div
               animate={{
                  rotateZ: 90,
                  transition: {
                     delay: 2
                  }
               }}
            >
               <StaticImage 
                  className="transform -rotate-90"
                  src="../images/logo.png"
                  alt="Logo"
               />
            </motion.div>
         </motion.div>
      )
   }

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

export default Layout

const HeaderDesktop:FC = () => {
   const contact = useContactInfo()
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
      hidden: { scale: 0, y: "60%" },
      show: { scale: 1, y: 0 },
   }
   return (
      <header className="w-full lg:flex flex-col hidden sticky top-0 bg-white z-[10000]">
         <nav className="flex items-start relative">
            <motion.div 
               className="w-56 my-auto flex flex-col items-center justify-center"
               initial={{
                  y: "-200%"
               }}
               animate={{
                  y: "0",
                  transition: {
                     delay: 0.3 * (parsedMenu().length  + 1)
                  }
               }}
            >
               <h1>
                  <StaticImage 
                     src="../images/logo.png"
                     alt="Logo"
                  />
               </h1>
            </motion.div>
            <motion.ul 
               className="uppercase h-nav text-slate-600 font-semibold space-x-4 flex text-sm ml-auto"
               variants={container}
               initial="hidden"
               animate="show"
            >
               {parsedMenu().map(link => (
                  link.childItems?.nodes.length! > 0 ? (
                     <HeaderDesktopDropdown 
                        link={link} 
                        key={link.id}
                     />
                  ) : (
                     <motion.li
                        variants={item}
                        className="flex"
                        key={link.id}
                     >
                        <Link 
                           to={link.url!}
                           className="flex-1 tracking-wider items-center flex px-4"
                           activeClassName="bg-black/10"
                           partiallyActive={link.url !== "/"}
                           key={link.id}
                        >
                           { link.label }
                        </Link>
                     </motion.li>
                  )
               ))}
               <motion.div 
                  className="bg-yellow-400 tracking-wide flex items-center justify-center px-10 text-slate-600"
                  initial={{
                     scaleY: 0
                  }}
                  animate={{
                     scaleY: 1,
                     transition: {
                        delay: 0.3 * parsedMenu().length
                     }
                  }}
               >
                  Bel: {contact.contactInformation?.phonenumber!}
               </motion.div>
            </motion.ul>
         </nav>
      </header>
   )
}

const HeaderDesktopDropdown:FC<{
   link: MenuItem
}> = ({ link }) => {
   const [isActive, setIsActive] = useState(false)
   useEffect(() => {
      setIsActive(window.location.pathname.includes(link.url!))
   }, [])
   const item = {
      hidden: { scale: 0, y: "60%" },
      show: { scale: 1, y: 0 },
   }
   const id = useId()
   return (
      <motion.li
         key={id}
         variants={item}
         className="flex"
      >
         <Menu 
            as={"div"}
            className="relative flex"
         >
            <div className={clsx(
               "space-x-2 px-4 flex items-center",
               isActive && "bg-black/10"
            )}>
               <Link 
                  className="flex items-center tracking-wider"
                  to={link.url!}
                  key={link.id}
               >
                  { link.label }
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
                  {link.childItems?.nodes.map((x:MenuItem) => 
                     <Menu.Item
                        key={x.id}
                     >
                        <Link 
                           to={x.url!}
                           className="hover:bg-black/5"
                           activeClassName="bg-black/10"
                        >
                           <button className="w-full text-left px-4 py-2">
                              {x.label}
                           </button>
                        </Link>
                     </Menu.Item>
                  )}
               </Menu.Items>
            </Transition>
         </Menu>
      </motion.li>
   )
}


const HeaderMobile:FC<{
   openDrawer: () => void
}> = ({
   openDrawer,
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
            <h1 className="w-40">
               <StaticImage 
                  src="../images/logo.png"
                  alt="Logo"
               />
            </h1>
         </div>
         <div className="flex-1 flex justify-end">
            <Link to="/search">
               <IconSearch size={24} />
            </Link>
         </div>
      </header>
   )
}

const MobileMenuNav:FC<{
   closeDrawer: () => void
}> = ({
   closeDrawer
}) => {
   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
         },
      },
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
         <nav className="grid max-w-[60%]">
            <motion.ul 
               className="grid gap-4 py-10"
               variants={container}
               initial="hidden"
               animate="show"
            >
               {parsedMenu().map(link => (
                  <MobileMenuNavLink
                     link={link}
                     key={link.id}
                     closeDrawer={closeDrawer}
                  />
               ))}
            </motion.ul>
         </nav>
         <motion.div 
            className="w-40"
            initial={{
               y: "100%",
               opacity: 0
            }}
            animate={{
               y: "0",
               opacity: 1,
               transition: {
                  delay: 1.6
               }
            }}
         >
            <StaticImage 
               src="../images/logo.png"
               alt="Logo"
            />
         </motion.div>
      </motion.div>
   )
}

const MobileMenuNavLink:FC<{
   link: MenuItem
   closeDrawer: () => void
}> = ({
   link,
   closeDrawer
}) => {
   const item = {
      hidden: { scale: 0 },
      show: { scale: 1 },
   }
   const [showDropdown, setShowDropdown] = useState(false)
   return (
      <motion.li
         key={link.id}
         variants={item}
         className="flex flex-col"
      >
         <div className="flex items-center justify-between">
            <Link 
               className={"flex items-center tracking-wider"}
               to={link.url!}
               activeClassName="text-yellow-500"
               partiallyActive={link.url !== "/"}
               onClick={closeDrawer}
            >
               { link.label }
            </Link>
            {link.childItems?.nodes?.length! > 0 &&  (
               <motion.div
                  initial={{
                     y: "100%",
                     opacity: 0
                  }}
                  animate={{
                     y: "0",
                     opacity: 1,
                     transition:{
                        delay: 1.2
                     }
                  }}
                  onClick={() => setShowDropdown(prev => !prev)}
               >
                  <FiChevronDown 
                     className={clsx(
                        "transform duration-200",
                        showDropdown 
                           ? "rotate-180"
                           : "rotate-0"
                     )}
                     size={22} 
                  />
               </motion.div>
            )}
         </div>
         <AnimatePresence initial={false}>
            {(link.childItems?.nodes?.length! > 0 && showDropdown) && (
               <motion.div 
                  key={"dropdown"}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  className="overflow-hidden"
                  variants={{
                     open: { opacity: 1, height: "auto", scale: 1 },
                     collapsed: { opacity: 0, height: 0, scale: 0.8 }
                  }}
               >
                  <ul className="flex flex-col gap-y-4 py-3 text-sm text-slate-700">
                     {link.childItems!.nodes.map((link: MenuItem) => (
                        <Link 
                           to={link.url!}
                           key={link.id}
                           activeClassName="text-yellow-400"
                           onClick={closeDrawer}
                        >
                           <li>
                              - { link.label }
                           </li>
                        </Link>
                     ))}
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.li>
   )
}

const Footer = () => {
   const contact = useContactInfo()
   return (
      <footer className="bg-slate-700 flex flex-col items-center">
         
         <div className="container text-slate-400 py-10 lg:px-0 px-6 flex justify-between lg:flex-row flex-col space-y-10 lg:space-y-0">
            <section className="space-y-6">
               <h1 className="text-slate-200 text-xl">Gouden kwast</h1>
               <ul className="text-sm space-y-2">
                  <li>{contact.contactInformation!.streetAndStreetnumber!}</li>
                  <li className="uppercase">{contact!.contactInformation!.zipcode}, {contact!.contactInformation?.city}</li>
                  <li>KVK 12345678910</li>
               </ul>
               <ul className="text-sm space-y-2">
                  <li className="flex">
                     <AiFillPhone className="mr-1 text-yellow-500" size={22} />
                     {contact!.contactInformation?.phonenumber}
                  </li>
                  <li className="flex">
                     <a className="flex" href={`mailto: ${contact!.contactInformation?.email}`}>
                        <MdEmail className="mr-1 text-yellow-500" size={22} />
                        {contact!.contactInformation?.email}
                     </a>
                  </li>
               </ul>
            </section>
            <div className="text-slate-400 flex lg:flex-row lg:space-y-0 space-y-10 flex-col lg:space-x-16">
               <section className="flex flex-col flex-1">
                  <h2 className="text-slate-200 text-xl mb-4">Navigatie</h2>
                  <ul className="flex flex-col flex-1 space-y-2 lg:space-y-0 justify-around">
                     {getMainMenu().map(link => (
                        <li 
                           key={link.id}
                           className="text-sm"
                        >
                           { link.label }
                        </li>
                     ))}
                  </ul>
               </section>
               <section className="flex flex-col flex-1 flex-shrink-0 whitespace-nowrap">
                  <h2 className="text-slate-200 text-xl mb-4">Social Media</h2>
                  <ul className="flex flex-col flex-1 justify-around space-y-3 lg:space-y-0">
                     <a target="_blank" href={contact!.contactInformation?.instagram!}>
                        <li className="text-sm flex items-center">
                           <AiFillInstagram size={24} className="mr-2 text-yellow-500" /> Instagram
                        </li>
                     </a>
                     <a target="_blank" href={contact!.contactInformation?.facebook!}>
                        <li className="text-sm flex items-center">
                           <FaFacebookSquare size={24} className="mr-2 text-yellow-500" /> Facebook
                        </li>
                     </a>
                     <a target="_blank" href={contact!.contactInformation?.linkedin!}>
                        <li className="text-sm flex items-center">
                           <FaLinkedin size={24} className="mr-2 text-yellow-500" /> LinkedIn
                        </li>
                     </a>
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