import { useMenuQuery } from "../hooks/useMenuQuery"

export const getMainMenu = () => {
   const allMenuItems = useMenuQuery()
   return allMenuItems.filter(x => !x.parentId)
}


export const parseMenu = () => {
   
}