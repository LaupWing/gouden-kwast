import * as React from "react"
import clsx from "clsx"
import { Carousel } from "react-responsive-carousel"
import { BlogCard } from "./BlogCard"
import { useBlogQuery } from "~/hooks/useBlogQuery"

export const RecentWork = () => {
   return (
      <section className="py-24 flex flex-col items-center bg-slate-700">
         <div className="container p-6 pt-4 pb-10">
            <h2 className="text-slate-100 text-3xl mb-4">Recente werk</h2>
            <CarouselSmall />
            <CarouselMedium />
            <CarouselLarge />
         </div>
      </section>
   )
}

const CarouselSmall = () => {
   const blogs = useBlogQuery()
   
   return (
      <Carousel className="md:hidden" showThumbs={false} showStatus={false}>
         {blogs.map((x, i) => (
            <BlogCard
               blog={x}
               key={i}
            />
         ))}
      </Carousel>
   )
}

const DynamicCarousel = ({
   cardLength,
   className = ""
}: {
   cardLength: number,
   className?: string
}) => {
   const blogs = useBlogQuery()
   const parts = Math.ceil(blogs.length / cardLength)
   const styles = clsx(
      "grid gap-4 gap-y-10",
      cardLength === 2 && "grid-cols-2", 
      cardLength === 3 && "grid-cols-3", 
   )
   
   return (
      <Carousel className={className} showThumbs={false} showStatus={false}>
         {[...Array(parts)].map((_, i) => (
            <div 
               className={styles}
               key={i}
            >
               {blogs
                  .filter((_, i2) => (i2 < ((i + 1) * cardLength)) && (i2 >= ((i) * cardLength)))
                  .map((x, i2) => (
                     <BlogCard
                        key={i2}
                        blog={x}
                     />
               ))}
            </div>
         ))}
      </Carousel>
   )
}

const CarouselMedium = () => {
   return (
      <DynamicCarousel 
         cardLength={2}
         className="hidden md:block xl:hidden"
      />
   )
}
const CarouselLarge = () => {
   return (
      <DynamicCarousel 
         cardLength={3}
         className="hidden xl:block"
      />
   )
}