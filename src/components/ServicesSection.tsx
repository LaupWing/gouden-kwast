import * as React from "react"
import { Page } from "~/generated/graphql"
import { ServiceCard } from "./ServiceCard"
import { motion } from "framer-motion"

export const ServicesSection:React.FC<{
   services: Page[]
}> = ({ services }) => {
   return (
      <>
         <ServicesSectionDesktop services={services}/>
         <ServicesSectionMobile services={services}/>
      </>
   )
}

const ServicesSectionDesktop:React.FC<{
   services: Page[]
}> = ({services}) => {
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
      <motion.section 
         className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-4 overflow-hidden"
         variants={container}
         initial="hidden"
         animate="show"
      >
         {services.map(service => {
            return (
               <motion.div
                  variants={item}
                  key={service.id}
               >
                  <ServiceCard
                     service={service}
                  />
               </motion.div>
            )
         })}
      </motion.section>
   )
}

const ServicesSectionMobile:React.FC<{
   services: Page[]
}> = ({services}) => {

   return (
      <section className="grid md:hidden grid-cols-1 container mx-auto gap-4 overflow-hidden">
         {services.map((service, i) => {
            return (
               <motion.div
                  key={service.id}
                  initial={{
                     opacity: 0,
                     x: i % 2 === 0 ?  "50%": "-50%"
                  }}
                  whileInView={{
                     opacity: 1,
                     x: "0"
                  }}
               >
                  <ServiceCard
                     service={service}
                  />
               </motion.div>
            )
         })}
      </section>
   )
}