import * as React from "react"
import { IconType } from "react-icons"
import { IoMdClose } from "react-icons/io"
import { BsSearch } from "react-icons/bs"

export const IconClose:IconType = (props) => {
   return (
      <IoMdClose {...props} />
   )
}

export const IconSearch:IconType = (props) => {
   return (
      <BsSearch {...props} />
   )
}