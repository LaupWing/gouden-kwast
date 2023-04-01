import { useMenuQuery } from "../hooks/useMenuQuery"
import { useWpSettings } from "../hooks/useWpSettings"

export const getMainMenu = () => {
   const allMenuItems = useMenuQuery()
   return allMenuItems.filter(x => !x.parentId)
}


export const parseMenu = () => {
   const mainMenu = getMainMenu()
   return mainMenu
      .map(x => ({
         ...x,
         url: x.url!
            .replace(/\/$/, "")
            .replace(/^\/\./, "")
      }))
      .map(x => {
         const wpSettings = useWpSettings()
         return {
            ...x,
            url: x.url === wpSettings.url ? "/" : x.url
         }
      })
}