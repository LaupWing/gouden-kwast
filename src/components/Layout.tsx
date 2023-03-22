import * as React from "react"

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

export default function Layout(){
   return (
      <div className="w-screen h-screen flex flex-col">
         <Header />
      </div>
   )
}


const Header = () => {
   return (
      <header className="w-full">

      </header>
   )
}