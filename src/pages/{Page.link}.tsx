import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useContext, useEffect } from 'react'

const PageTemplate = () => {
   // console.log(data)
   return (
      <div 
         className='relative'
         style={{
            height: '60vh',
            maxHeight: '400px'
         }}
      >
         {/* <div className='z-20 inset-0 bg-neutral-900 bg-opacity-70 absolute flex justify-center items-center uppercase text-white font-bold tracking-wider text-2xl'>
            <h1>
               {data.wpPage.title}
            </h1>
         </div>
         <GatsbyImage 
            className='h-full object-cover'
            image={getImage(data.wpPage.featuredImage.node.localFile)} 
            alt='thumbnail'

         />
      </div>
      <div 
         id='wp-content'
         className="container text-neutral-300 mt-4"
         dangerouslySetInnerHTML={{__html: data.wpPage.content}}
      >

      </div> */}
      </div>
   )
}

export default PageTemplate
// export const pageQuery = graphql`
//    query {
//       wpPage(title: {eq: "About"}) {
//          id
//          title
//          content
//          featuredImage {
//             node {
//                id
//                localFile {
//                   childImageSharp {
//                      gatsbyImageData(placeholder: TRACED_SVG, width: 1920)
//                   }
//                }
//             }
//          }
//       }
//    }

// `