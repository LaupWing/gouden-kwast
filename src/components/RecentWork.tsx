import * as React from "react"
import data from "../dummy/projects.json"
import { Carousel } from "react-responsive-carousel"

export const RecentWork = () => {
   return (
      <section className="py-24 flex flex-col items-center bg-slate-700">
         <div className="container p-6 pt-4 pb-10">
            <h2 className="text-slate-100 text-3xl mb-4">Recente werk</h2>
            {/* <CarouselSmall /> */}
            <CarouselMedium />
            {/* <div className="grid lg:grid-cols-3 lg:gap-4 gap-y-10">
               {data.map((x, i) => (
                  <div 
                     className="flex flex-col"
                     key={i}
                  >
                     <div className="aspect-[4/3] relative">
                        <img 
                           className="w-full h-full object-cover" 
                           src={x.project_image} 
                           alt="" 
                        />
                        <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
                           <h2 className="text-lg leading-5">{x.project_title}</h2>
                           <p className="text-xs text-slate-400 mt-1">{x.end_date}</p>
                        </div>
                     </div>
                     <p className="mt-1 text-slate-50 mb-4 text-sm">{x.project_description}</p>
                     <button className="mt-auto mr-auto py-1 px-4 text-slate-800 uppercase text-sm rounded bg-yellow-400 font-bold tracking-wider shadow">Lees meer</button>
                  </div>
               ))}
            </div> */}
         </div>
      </section>
   )
}

const CarouselSmall = () => {
   return (
      <Carousel showThumbs={false} showStatus={false}>
         {data.map((x, i) => (
            <div 
               className="flex flex-col"
               key={i}
            >
               <div className="aspect-[4/3] relative">
                  <img 
                     className="w-full h-full object-cover" 
                     src={x.project_image} 
                     alt="" 
                  />
                  <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
                     <h2 className="text-lg leading-5">{x.project_title}</h2>
                     <p className="text-xs text-slate-400 mt-1">{x.end_date}</p>
                  </div>
               </div>
               <p className="mt-1 text-slate-50 mb-4 text-sm">{x.project_description}</p>
               <button className="mt-auto mr-auto py-1 px-4 text-slate-800 uppercase text-sm rounded bg-yellow-400 font-bold tracking-wider shadow">Lees meer</button>
            </div>
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
   const parts = Math.ceil(data.length / cardLength)
   
   return (
      <Carousel className={className} showThumbs={false} showStatus={false}>
         {[...Array(parts)].map((_, i) => (
            <div 
               className="grid lg:grid-cols-2 lg:gap-4 gap-y-10"
               key={i}
            >
               {data
                  .filter((_, i2) => (i2 < ((i + 1) * cardLength)) && (i2 >= ((i) * cardLength)))
                  .map((x, i2) => (
                     <div 
                        className="flex flex-col"
                        key={i2}
                     >
                        <div className="aspect-[4/3] relative">
                           <img 
                              className="w-full h-full object-cover" 
                              src={x.project_image} 
                              alt="" 
                           />
                           <div className="bottom-1 left-1 bg-slate-50 absolute max-w-[80%] text-slate-800 px-4 py-2 font-bold">
                              <h2 className="text-lg leading-5">{x.project_title}</h2>
                              <p className="text-xs text-slate-400 mt-1">{x.end_date}</p>
                           </div>
                        </div>
                        <p className="mt-1 text-slate-50 mb-4 text-sm text-left">{x.project_description}</p>
                        <button className="mt-auto mr-auto py-1 px-4 text-slate-800 uppercase text-sm rounded bg-yellow-400 font-bold tracking-wider shadow">Lees meer</button>
                     </div>
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
         className=""
      />
   )
}
const CarouselLarge = () => {
   return (
      <>
      </>
   )
}