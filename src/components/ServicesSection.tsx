import * as React from "react"
import { Page } from "~/generated/graphql"
import { ServiceCard } from "./ServiceCard"

export const ServicesSection:React.FC<{
   services: Page[]
}> = ({ services }) => {
   return (
      <ServicesSectionDesktop services={services}/>
   )
}

const ServicesSectionDesktop:React.FC<{
   services: Page[]
}> = ({services}) => {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto gap-4">
         {services.map(item => {
            return (
               <ServiceCard
                  service={item}
                  key={item.id}
               />
            )
         })}
      </section>
   )
}